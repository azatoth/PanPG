function v6_dfa_table(opts,rules){return function(id_D,id_s,id_pos,id_equiv){
  return id_D+'='+v6_dfa_table_2(opts,rules)+'\n'
       + v6_dfa_reviver(id_s,id_pos,id_equiv)}}

// generate the actual D table
function v6_dfa_table_2(opts,rules){
 return '['+opts.dfa_table.map(v6_dfa_encode(opts)).join(',')+']'}

// example
// in:  {type:'transition',transition:[[[48,58],{type:'match'}]]}
// out: [[[[1]]]]
// a list of states, each of which is
//  a list of transitions, each of which is a tuple of
//   a list of equivalence class ids, and
//   a state id, omitted when = current + 1
function v6_dfa_encode(opts){return function _v6_dfa_encode(dfa){var key,i,l,match={},slots=[],indices=[],index,keys=[],equiv_states=[],parents=[],ret=[],equiv_count=0
  // state cache maps state keys onto slots
  log(dfa)
  go(dfa)
  log(slots)
  log(keys)
  log(equiv_states)
  go2()
  return v6_stringify(ret)
  function go(state){var i,l,a,cset,substate,equiv_classes,tr_keys,slot,st_key,n
   // if the state already has been assigned a slot, return it
   n=parents.indexOf(state)
   slot=slots.indexOf(state)
   if(n>-1)return '{'+n-parents.length+'}'
   if(slot>-1)return slot
   if(state.type=='match') key='[m]'
   if(state.type=='fail') key='[f]'
   if(state.type=='transition'){
    slot=slots.length
    index=ret.length
    slots[slot]=state
    tr_keys=[]
    for(i=0,l=dfa.transition.length;i<l;i++){a=dfa.transition[i]
     cset=a[0];substate=a[1]
     equiv_classes=v6_cset_equiv_lookup(opts)(cset)
     st_key=go(substate)
     tr_keys.push(equiv_classes+'→'+st_key)}
    key='['+tr_keys.join(';')+']'}
   log({key:key})
   n=keys.indexOf(key)
   if(n>-1){
    equiv_states[slot]=n
    equiv_count++}
   else{
    keys[slot]=key
    indices[slot]=index
    ret[index]=state}
   return key}
  function go2(){var trs,i,l,j,l2,a,state,tr,index,target
   for(i=0,l=slots.length;i<l;i++){state=slots[i]
    assert(state.type='transition')
    if(equiv_states[i])continue
    index=indices[i]
    trs=[]
    for(j=0,l2=state.transition.length;j<l2;j++){tr=state.transition[j]
     target=id(tr[1])
     equiv_classes=v6_cset_equiv_lookup(opts)(tr[0])
     if(target==index+1) trs.push([equiv_classes])
     else                trs.push([equiv_classes,target])}
    ret[index]=trs}}
  function id(state){var slot
   if(state.type=='match')return ret.length
   if(state.type=='fail')throw new Error('v6_dfa_encode: unhandled type')
   assert(state.type=='transition')
   slot=slots.indexOf(state)
   if(equiv_states[slot])slot=equiv_states[slot]
   return indices[slot]}}}

function v6_stringify(x){var a=[],p
 if(x instanceof Array){
  return '['+x.map(v6_stringify).join(',')+']'}
 if(typeof x=='object'){
  for(p in x)a.push(p+':'+v6_stringify(x[p]))
  return '{'+a.join(',')+'}'}
 return String(x)}

function v6_dfa_reviver(id_s,id_pos,id_equiv){var function_dfa
 function_dfa=
  // ss     states
  // l_ss   length of ss
  // st     state
  // t      transition
  // a      intermediate array created per state
  // d      dfa array (of states)
    'function dfa(ss){var i,l_ss,st,l_s,t,l_t,a,d=[],j,k,l;'
  +  'for(i=0,l_ss=ss.length;i<l_ss;i++){st=ss[i];'
  +   'a=[];'
  +   'for(j=0,l_s=st.length;j<l_s;j++){t=st[j];'
  +    'for(k=0,l_t=t[0].length;k<l_t;k++){'
  +     'a[t[0][k]]=t[1]==true?l_ss:t[1]}}'
  +   'for(j=0,l=a.length;j<l;j++)if(a[j]==undefined)a[j]=l_ss+1;'
  +   'd[i]=a}' + '\n  '
  +  'return function _dfa(){var st=0,eq,i='+id_pos+';'
  +   'while(st<l_ss){'
  +    'eq='+id_equiv+'['+id_s+'.charCodeAt(i++)];'
  +    'st=d[st][eq]}'
  +   'if(st==l_ss){'+id_pos+'=i;return true}'
  +   'return false'
  +  '}' // close function _dfa()
  + '}' // close function dfa()
 return ''
  + 'function revive(dfa){var i,l,state,j,l2,all=[],t,ts;'
  +  'for(i=0,l=dfa.length;i<l;i++){state=dfa[i];'
  +   'ts=[];' // transitions
  +   'for(j=0,l2=state.length;j<l2;j++){t=state[j];'
  +    'if(state[1]==l) ts.push([t[0],true]);'
  +    'else ts.push([t[0],t[1]==undefined?j+1:t[1]])}'
  +   'all.push(ts)}'
  +  'return dfa(all)'
  +  '\n '+function_dfa
  + '}'}
