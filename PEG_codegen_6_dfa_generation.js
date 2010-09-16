function v6_leaf_dfas(opts,rules){var p
 for(p in rules){
  go(rules[p].expr)}
 return rules
 function go(expr){var dfa
  if(dfa=v6_leaf_dfa(opts,expr))expr.dfa=dfa
  expr.subexprs.map(go)}}

function v6_leaf_dfa(opts,expr){
 switch(expr.type){
 case 0:
  return v6_dfa_cset(expr.cset)}}

function v6_dfa(opts,rules,rule){var next_dep,re
 re=rule.re
 while(next_dep=re_dependency(re))
  re=v6_substitute(next_dep,rules[next_dep].re)(re)
 return v6_dfa_2(re,{})
 return pp(re)+'\n'+v6_dfa_2(re,{})+log.get()}

function v6_dfa_2(re,state){
 switch(re[0]){
 case 0:
  return v6_dfa_cset(re[1],state)
 case 1:
  return v6_dfa_2(v6_strLit2seq(re),state)
 case 2:
  return v6_dfa_seq(re[1],state)
 case 3:
  return v6_dfa_ordC(re[1],state)
 case 4:
  if(re[1]==0 && re[2]==0) return v6_dfa_rep(re[3],state)
  return v6_dfa_2(v6_munge_mnrep(re),state)
 case 5:
  throw new Error('no named references here')
 case 6:
  return v6_dfa_neg(re[1],state)
 case 7:
  return v6_dfa_pos(re[1],state)
 case 8:
  return v6_dfa_2([2,[]],state)
 default:
  throw new Error('v6_dfa: unexpected re type')}}

function v6_dfa_cset(cset,state){var sr,surrogates,bmp,i,l,srps,hi_cset,lo_cset,trans
 sr=CSET.toSurrogateRepresentation(cset)
 if(sr.surrogate_range_pairs.length == 0)
  return {type:'transition'
         ,transition:[[cset,{type:'match'}]]}
 surrogates=CSET.fromIntRange(0xD800,0xDFFF)
 // here we take the position that unmatched surrogates simply can never be accepted by a PanPG parser; this is the same as the v5 codegen and the v6 codegen without DFAs.  Other alternatives exist, however, and there are cases where searching for unmatched surrogates specifically is what is desired.
 bmp=CSET.difference(sr.bmp,surrogates)
 srps=sr.surrogate_range_pairs
 trans=[[bmp,{type:'match'}]]
 for(i=0,l=srps;i<l;i++){
  hi_cset=srps[i][0];lo_cset=srps[i][1]
  trans.push([hi_cset,{type:'transition'
                      ,transition:[[lo_cset,{type:'match'}]]}])}
 return {type:'transition'
        ,transition:trans}}

function v6_dfa_seq(seq,state){var d1,d2
 log('seq '+pp(seq))
 if(!seq.length)return {type:'match'}
 d1=v6_dfa_2(seq[0],state)
 //assert(d1,'d1 from seq[0]: '+pp(seq[0]))
 d2=v6_dfa_seq(seq.slice(1),state)
 log({seq_d1:d1})
 log({seq_d2:d2})
 return log(go(d1,d2))
 function go(d1,d2){
  if(!d1 || !d2) return
  if(d1.type=='fail')return d1
  if(d2.type=='fail')return d2
  if(d1.type=='match')return d2
  if(d2.type=='match')return d1
  return v6_dfa_transition_map(d1,function(d){return go(d,d2)})}}

function v6_dfa_transition_map(d,f){var i,l,ret=[],existing
 assert(d.type=='transition','DFA type is transition')
 for(i=0,l=d.transition.length;i<l;i++){existing=d.transition[i]
  ret[i]=[existing[0],f(existing[1])]}
 return {type:'transition'
        ,transition:ret}}

function v6_dfa_ordC(exprs,state){var d1,d2,merged
 log('ordC '+pp(exprs))
 if(!exprs.length)return {type:'fail'}
 d1=v6_dfa_2(exprs[0],state)
 d2=v6_dfa_ordC(exprs.slice(1),state)
 log({ordc_d1:d1})
 log({ordc_d2:d2})
 return log(go(d1,d2))
 function go(d1,d2){
  if(!d1 || !d2)return
  if(d1.type=='fail')return d2
  if(d2.type=='fail')return d1
  if(d1.type=='match')return d1
  if(d2.type=='match')return v6_dfa_opt(d1,state)
  return v6_dfa_ordC_(v6_dfa_merge_transitions(d1,d2))}}

function v6_dfa_ordC_(x){var i,l,cset,t1,t2,ret,res,res2,cache,j
 ret=[]
 cache=[[],[]]
 for(i=0,l=x.length;i<l;i++){
  cset=x[i][0];t1=x[i][1];t2=x[i][2]
  if(t1.type=='fail')res=t2; else
  if(t2.type=='fail')res=t1; else
  if(t1.type=='match')res=t1; else
  if(t2.type=='match') return; // decline
  else{ // both are transition states
   res=v6_dfa_ordC_(v6_dfa_merge_transitions(t1,t2))}
  log({i:i,res:res})
  if(res.type=='fail')continue
  res2=[cset,res]
  if((j=cache[0].indexOf(res))>-1){
   cache[1][j][0]=CSET.union(cache[1][j][0],cset)
   continue}
  cache[0].push(res);cache[1].push(res2)
  ret.push(res2)}
 return {type:'transition',transition:ret}}

function v6_dfa_merge_transitions(d1,d2){var i,l1,l2,j1s,j2s,t1,t2,fail,low1,low2,low1i,low2i,states1,states2,a,t1_next,t2_next,ret,prev,low,cset
 assert(d1.type=='transition'&&d2.type=='transition','called with transitions')
 fail={type:'fail'}
 t1=d1.transition;t2=d2.transition
 l1=t1.length;l2=t2.length
 states1=[];j1s=[];for(i=l1;i--;)states1[i]=j1s[i]=0
 states2=[];j2s=[];for(i=l2;i--;)states2[i]=j2s[i]=0
 prev=0
 ret=[]
 for(;;){
  a=lowest(t1,j1s);low1=a[0];low1i=a[1]
  a=lowest(t2,j2s);low2=a[0];low2i=a[1]
  t1_next=get_state(get_index(states1),t1)
  t2_next=get_state(get_index(states2),t2)
  if (low1 <= low2) {bump(states1,j1s,low1i);low=low1}
  if (low2 <= low1) {bump(states2,j2s,low2i);low=low2}
  if(low>0){
   // here we only produce single-range csets
   // a subsequent step could combine them
   cset= low==Infinity ? [prev] : [prev,low]
   ret.push([cset,t1_next,t2_next])}
  prev=low
  if(low1==Infinity && low2==Infinity)break}
 return log(ret)
 // find the lowest unseen values in all csets in a transition
 // these represent flips between on and off, initially off
 // there may be more than one cset that flips on the same code point, so we use an array to store the i indices of the low values
 function lowest(transition,indices){var i,l,low_water_mark,val,j,ret_i
  low_water_mark=Infinity
  for(i=transition.length;i--;){
   j=indices[i]
   val=transition[i][0][j] // the jth value of the cset of the ith (cset,state) pair in the transition
   if(val<low_water_mark){
    low_water_mark=val
    ret_i=[i]}
   else if(val==low_water_mark){
    ret_i.push(i)}}
  return [low_water_mark,ret_i]}
 function bump(states,indices,is){var k,i
  if(!is)return
  for(k=0;k<is.length;k++){
   i=is[k]
   indices[i]++
   states[i]=!states[i]}}
 // get the active cset, assert at most one
 function get_index(states){var i,x
  for(i=states.length;i--;) if(states[i]){
   assert(x==undefined,'no overlapping csets in DLO')
   x=i}
  return x}
 function get_state(index,transition){
  if(index==undefined)return fail
  return transition[index][1]}}

// from an expression of the form α / ε, where d1 is a DFA-like corresponding to α
// here we currently only handle the case where α is determinate in one character, i.e. where d1 is a cset type, i.e. a transition which transitions only to fail or match states, not to any other transition state.
// other cases would require lookahead or backtracking, which we do not yet handle here
// actually, even this case involves lookahead, because the match needs to happen at the previous position, i.e. the position has already been advanced once by the time we read the next character.
// so we just decline here for now
function v6_dfa_opt(d1,state){}

function v6_dfa_rep(re,state){throw pp(re)}

function v6_dfa_neg(re,state){}

function v6_dfa_pos(re,state){}