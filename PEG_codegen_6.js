function codegen_v6(opts,names,named_res){var vars,rules,function_m_x,mainloop,ft,function_emit,debug,debug2,asserts,dbg,function_fail,nameline
 debug=false // human semi-readable output from the codegen
 debug2=false // debugging in the parser itself
 asserts=false // include assertions (for a slower, more debuggable parser)
 //debug=true
 //debug2=true // TODO: make these options opts.debugLevel=0..2
 //asserts=true
 //return pp(named_res)
 //opts=extend({},opts) // we mutate this argument
 opts.S_map=[]
 rules=v6_named_res_to_rules(opts,named_res)
 rules=v6_expr_fixups(opts,rules)
 rules=v6_dependencies(opts,rules)
 rules=v6_add_shadow_start_rule(opts,rules)
 nameline=v6_nameline(opts,rules)
 if(opts.t_bufferout) // caller-provided flags
  v6_apply_flags(opts,rules)
 else{
  v6_calculate_flags(opts,rules)
  v6_calculate_streamability(opts,rules)}
 rules=v6_assign_ids(opts,rules)
 rules=v6_step_three(opts,rules) // assign T, M, and F states
 dbg=debug2?v6_dbg(opts,rules):function(){return ''}
 vars=['eof=false'
      ,'s=\'\'','l=0'
      ,'S='+rules._.expr.S_flags
      ,'T','M','F','R'
      ,'tbl=[]','x'
      ,'pos=0','offset=0'
      ,'buf=[]','bufs=[]','states=[]','posns=[]','c']
 if(debug2) vars.push('S_map=[\''+opts.S_map.join('\',\'')+'\']')
 ft=v6_flag_test(opts)
 function_emit='function emit(){var x='
  + 'bufs.length?bufs[0]:buf;'
  + 'if(x.length){out(\'tree segment\',x);'
  +  'if(bufs.length)bufs[0]=[];else buf=[]}}'
 function_fail='function fail(s){'
  + 'out(\'fail\',pos,s)'
  + '}'
 function_m_x='function(m,x){'
  + 'switch(m){\n'
    // probably some room for optimization in this while() loop (i.e. getting rid of it)
  + 'case \'chunk\':s+=x;l=s.length;while(tbl.length<l+1)tbl.push([]);mainloop();break\n'
  + 'case \'eof\':eof=true;mainloop();break\n'
  + 'default:throw new Error(\'unhandled message: \'+m)'
  + '}}\n'
 mainloop='function mainloop(){for(;;){'
  + dbg('main')+'\n'
  + 'if('+v6_is_not_prim_test(opts)('S')+')t_block:{\n'
  + (asserts?'assert(typeof S=="number","S")\n'
     + 'assert((S>>>'+opts.flagbits
     +   ')<='+opts.highest_used_S+',"S in range: "+S)\n'
     + "assert(R==undefined,'result is unknown (R:'+R+',S:'+S+')')\n"
     :'')
  + 'if('+ft('S','pushpos')+')posns.push(pos)\n'
  + 'if('+ft('S','t_bufferout')+'){bufs.push(buf);buf=[]}\n'
  + 'if('+ft('S','cache')+'&&(x=tbl[pos-offset][S])!=undefined){'
  +  'if(x){R=true;pos=x[0];buf=x[1]}else{R=false}'
  +  dbg('cache hit')
  +  'break t_block}\n'
  + 'if('+ft('S','t_emitstate')+'){buf.push(S>>>'+opts.flagbits+')}\n'
  + 'states.push(S)\n'
  + (asserts?'assert(T[S>>>'+opts.flagbits+'],\'T\')\n':'')
  + 'S=T[S>>>'+opts.flagbits+']'
  + '}\n' // end if not prim test
  //+ 'else{\n' // prim test state
  + 'if('+v6_is_prim_test(opts)('S')+'){\n' // prim test state
  +  v6_ε_ifstmt(opts)('S','R')
  +  'else{\n'
  +   'c=s.charCodeAt(pos);'
  +   'if(isNaN(c)){'
  +    'if(eof)R=false;'
  +    'else{'
  +     'emit();'
  +     'R=undefined;'
  // +     'S=states.pop();'
  +     (asserts?'assert(S,\'popped state\');':'')
  +     dbg('waiting…')
  +     'out(\'ready\');'
  +     'return}'
  +    '}\n'
  +   'else switch(S){\n'
 //    + v6_ε_case(opts)('pos','R')
  +    v6_prim_test_case_statements_BMP(opts)('c','R')
  +    '}\n'
  +   'if(R)pos++\n'
  +   'else if(c>=0xD800&&c<=0xDFFF){' // surrogate code unit
  +    'if(c<0xDB80){' // high surrogate case
  +     'if(pos+1==l){' // no more characters available
  +      'if(eof)return fail(\'unmatched surrogate at EOF\');'
  +      'else{'
  +       'emit();'
  +       'R=undefined;'
  +       dbg('waiting (surrogate pair)')
  +       'out(\'ready\');'
  +       'return}}'
  +     'else{' // the next code unit is available
  +      'c=(c&0x3FF)<<10 | s.charCodeAt(pos+1)&0x3FF | 0x10000\n'
  +      'switch(S){'
  +       v6_prim_test_case_statements_supplementary(opts)('c','R')
  +       '\ndefault:R=false'
  +       '}\n'
  +      'if(R)pos+=2\n' // we matched a supplementary character
  +      '}' // end else
  +     '}' // end high surrogate case
  +    'else return fail(\'UTF-16 decoding error: unmatched low surrogate\')' // if not high surrogate, we saw a leading low surrogate which cannot be valid UTF-16
  +    '}' // end if surrogate code unit
  +   '}\n' // end else
  +  (asserts?'assert(R==true||R==false,\'have result\')\n':'')
  +  'S=states.pop()'
  +  '}\n' // end prim test state
    // has_result loop
  + 'while(R!=undefined){'
  + dbg('result')+'\n'
  + 'if(S=='+rules._.expr.S_flags+'){(R?emit:fail)();return}'
  + 'if(R){\n'
  +  'if('+ft('S','cache')+'){tbl[posns[posns.length-1]][S]=[pos,buf];buf=buf.slice()}\n'
  +  'if('+ft('S','m_emitstate')+')buf.push(S>>>'+opts.flagbits+')\n'
  +  'if('+ft('S','m_emitclose')+')buf.push(-2)\n'
  +  'if('+ft('S','m_emitanon')+')buf.push(-1)\n'
  +  'if('+ft('S','m_emitlength')+')buf.push(pos-posns[posns.length-1])\n'
  +  'if('+ft('S','m_resetpos')+')pos=posns[posns.length-1]\n'
  +  'if('+ft('S','pushpos')+')posns.pop()\n'
  +  'if('+ft('S','m_tossbuf')+')buf=bufs.pop()\n'
  +  'if('+ft('S','m_emitbuf')+')buf=bufs.pop().concat(buf)\n'
  +  'if(!bufs.length&&buf.length>64)emit()\n'
  +  (asserts?'assert(M[S>>>'+opts.flagbits+'],\'M\')\n':'')
  +  'S=M[S>>>'+opts.flagbits+']'
  + '}\n'
  + 'else{\n'
  +  'if('+ft('S','cache')+')tbl[posns[posns.length-1]][S]=false\n'
  +  'if('+ft('S','pushpos')+')pos=posns.pop()\n'
  +  'if('+ft('S','f_tossbuf')+')buf=bufs.pop()\n'
  +  (asserts?'assert(F[S>>>'+opts.flagbits+'],\'F\')\n':'')
  +  'S=F[S>>>'+opts.flagbits+']'
  + '}\n'
  + 'if(S=='+opts.S_succeed+'){R=true;S=states.pop()}'
  + 'else if(S=='+opts.S_fail+'){R=false;S=states.pop()}'
  + 'else R=undefined'
  + ';'+dbg('res_end')+'\n'
  + '}' // end has_result loop
  + '}}'
 return (debug?(v6_sexp(rules)+'\n\n'
               + pp(opts)+'\n\n'
               + pp(opts.prim_test_assignments)+'\n\n'
               + pp(rules)+'\n\n'):'')
      + (debug2?v6_legend(opts,rules)+'\n':'')
      + nameline+'\n'
      + 'function '+opts.fname+'(out){'
          +varstmt(vars)+'\n'
          +v6_TMF_tables(opts,rules)
          +'return '+function_m_x
          +mainloop+'\n'
          +function_emit+'\n'
          +function_fail
          +'}\n'}

function v6_dbg(opts,rules){return function(msg){
  return 'out(\''+msg+'\',\'S:\'+(S_map[S>>>'+opts.flagbits+']||\'unknown state \'+S>>>'+opts.flagbits+')'
 + '+\' pos:\'+pos+\' \'+s.charAt(pos)'
 + '+\' R:\'+R'
 + '+\' stack:\'+states.map(function(s){return s>>>'+opts.flagbits+'})'
 + '+\' posns:\'+posns'
 + '+\' bufs:\'+bufs.map(function(b){return \'[\'+b+\']\'})'
 + '+\' buf:\'+buf'
 + ');'}}

function v6_legend(opts,rules){
 return opts.fname+'.legend="'+v6_sexp(rules).replace(/\n/g,'\\n')+'";'}

function v6_sexp(res){var name,ret=[]
// return pp(res)
 for(name in res){
  ret.push(name+' ← '+f(res[name].expr))}
 return ret.join('\n')
 function f(expr){var ret=[]
  //return pp(expr)
  ret=[expr.id
      ,re_shortnames[expr.type]
      ]
  if(expr.type==0) ret.push(CSET.show(expr.cset).replace(/\n/g,' ').replace(/(.{16}).+/,"$1…"))
  //if(expr.type==0) ret.push(pp(expr.cset))
  if(expr.type==1) ret.push(expr.strLit)
  if(expr.type==4) ret[1]='rep' // we only have *-rep by this point
  if(expr.type==5) ret.push(expr.ref)
  ret=ret.concat(expr.subexprs.map(f))
  return "("+ret.join(' ')+")"}}

re_shortnames=
['cset' // 0
,'strLit' // 1
,'seq' // 2
,'ordC' // 3
,'mn_rep' // 4
,'ref' // 5
,'neg' // 6
,'pos' // 7
,'ϵ'
]

function v6_dependencies(opts,rules){var ret={},deps
 go(opts.start)
 return ret
 function go(rule_name){var rule
  if(ret[rule_name])return // it has already been processed
  rule=rules[rule_name]
  if(!rule) throw new Error('Rule required but not defined: '+rule_name)
  ret[rule_name]=rule
  v6_direct_dependencies(rule.expr).map(go)}}

// Re → [String]
function v6_direct_dependencies(expr){var ret=[]
 v6_walk(function(expr){if(isNamedRef(expr.type))ret.push(expr.ref)})
  (expr)
 return ret}

function v6_nameline(opts,rules){var names=[]
 for(p in rules)names[rules[p].S]=rules[p].name
 nameline=opts.fname+'.names='+'[\''+names.join('\',\'')+'\'];'
 return nameline}

function v6_named_res_to_rules(opts,res){var i,l,ret={},name
 for(i=0,l=res.length;i<l;i++){
  name=res[i][0]
  ret[name]={S:i+1
            ,re:res[i][1]
            ,name:name}}
 opts.highest_used_S=i
 return ret}

function v6_add_shadow_start_rule(opts,rules){var shadow_re
 // ShadowStartRule ← StartRule ![^]
 shadow_re=[2,[[5,opts.start],[6,[0,[0]]]]]

 rules._={S:++opts.highest_used_S
         ,name:"_"
         ,re:shadow_re}
 rules._.expr=v6_subexpr_fixups(opts,rules._)
 delete rules._.re
 return rules}

function v6_expr_fixups(opts,rules){var p
 for(p in rules){
  rules[p].expr=v6_subexpr_fixups(opts,rules[p])
  delete rules[p].re}
 return rules}

function v6_subexpr_fixups(opts,rule){var n=0
 //return re_subexprs(rule.re)
 if(rule.re[0]!=2) rule.re=[2,[rule.re]]
 return go(rule)(rule.re)
 function go(parent){return function(re){var ret
   if(re[0]==4) re=v6_munge_mnrep(opts,ret,re)
   if(re[0]==1) re=v6_strLit2seq(re)
   ret={id:rule.name+'+'+n++
       ,type:re[0]
       ,S:undefined
       ,T:undefined
       ,M:undefined
       ,F:undefined
       ,flags:undefined}
   if(n==1)ret.toplevel=true
   if(ret.type==0) ret.cset=re[1]
   if(ret.type==1) ret.strLit=re[1]
   if(ret.type==5) ret.ref=re[1]
   ret.flag_n=0
   //ret.flags=v6_expr_flags(opts,ret)
   //ret.S_flags=0
   //ret.S_flags_='debugging'
   ret.subexprs=re_subexprs(re).map(go(ret))
   return ret}}}

function v6_munge_mnrep(opts,ret,re){var m,n,required,optional,i
 m=re[1]
 n=re[2]
 if(m==0&&n==0) return re
 required=[]
 i=m; while(i--) required.push(re[3].slice())
 if(n==0) optional=[4,0,0,re[3]]
 else optional=opt_n(n-m,re[3])
 required.push(optional)
 if(required.length==1)return required[0]
 re=[2,required]
 return re}

function v6_strLit2seq(re){var s=re[1],cset_res=[],i
 if(s.length==0)return [8]
 for(i=0;i<s.length;i++){
  cset_res[i]=[0,CSET.fromInt(s.charCodeAt(i))]}
 if(cset_res.length==1)return cset_res[0]
 return [2,cset_res]}

// n, re → (re (re (re … (re / ϵ) … / ϵ) / ϵ) / ϵ)
function opt_n(n,re){
 if(n==0) return [8]
 assert(n>0)
 if(n==1) return [3,[re,[8]]]
 return [3,[[2,[re,opt_n(n-1,re)]],[8]]]}

function v6_apply_flags(opts,rules){var p,ret={}
 for(p in rules){
  f(rules[p].expr)}
 function f(expr){
  expr.flags=v6_expr_apply_flags(opts,expr)
  expr.subexprs.forEach(f)}}

function v6_expr_apply_flags(opts,expr){var ret={}
 f('cache')
 f('t_bufferout')
 f('pushpos')
 f('t_emitstate')
 f('m_emitstate')
 f('m_emitclose')
 f('m_emitanon')
 ret.m_emitlength=ret.t_emitstate||ret.m_emitstate||ret.m_emitanon
 f('m_resetpos')
 f('m_emitbuf')
 f('m_tossbuf')
 f('f_tossbuf')
 return ret
 function f(s){
  ret[s]=opts[s].indexOf(expr.id)>-1}}

function v6_calculate_flags(opts,rules){var p
 for(p in rules)
  if(p != '_')
   v6_calculate_flags_expr(rules[p])({})(rules[p].expr)
 // special cases for the shadow start rule
 rules._.expr.flags=
  {cache:false
  ,t_bufferout:false
  ,pushpos:false
  ,t_emitstate:false
  ,m_emitstate:false
  ,m_emitclose:false
  ,m_emitanon:false
  ,m_emitlength:false
  ,m_resetpos:false
  ,m_tossbuf:false
  ,f_tossbuf:false}}

function v6_calculate_flags_expr(rule){return function loop(parent){return function(expr,i){var ret={},subs_anon_consume=[],sub_can_emit_named=false
   function makeAnonEmit(sub){
    sub.emits_anon=true
    sub.flags.pushpos=true
    sub.flags.m_emitanon=true
    sub.flags.m_emitlength=true}
   if(isCset(expr.type)){
    expr.anon_consume=true}
   if(isNamedRef(expr.type)){
    expr.can_emit_named=true}
   ret.cache=!!expr.toplevel
   expr.subexprs.forEach(loop(expr))
   expr.subexprs.forEach(function(sub){
    if(sub.anon_consume) subs_anon_consume.push(sub)
    if(sub.can_emit_named) sub_can_emit_named=true})
   if(isLookahead(expr.type)){
    expr.consumes_anon=false
    expr.can_emit_named=false}
   if(isOrdC(expr.type)){
    expr.anon_consume = !!subs_anon_consume.length
    expr.can_emit_named = sub_can_emit_named
    if(expr.anon_consume && expr.can_emit_named){
     subs_anon_consume.forEach(makeAnonEmit)
     expr.anon_consume=false}}
   if(isSequence(expr.type)){
    expr.anon_consume = !!subs_anon_consume.length
    expr.can_emit_named = sub_can_emit_named
    if(expr.anon_consume && expr.can_emit_named){
     subs_anon_consume.forEach(makeAnonEmit)
     expr.anon_consume=false}}
   ret.t_bufferout=!!(  isLookahead(expr.type)
                     || expr.toplevel
                     || isProperSequence(expr)
                     )
   ret.pushpos=!!(  expr.toplevel
                 || isLookahead(expr.type)
                 || expr.emits_anon
                 || isProperSequence(expr) )
   ret.t_emitstate=!!expr.toplevel
   ret.m_emitstate=false // used only in streaming
   ret.m_emitclose=!!expr.toplevel
   ret.m_emitanon=false // will only be set by parent expression
   ret.m_emitlength=ret.m_emitclose
   ret.m_resetpos=isPositiveLookahead(expr.type)
   ret.m_emitbuf=!!(  isProperSequence(expr)
                   || expr.toplevel )
   ret.m_tossbuf=isLookahead(expr.type)
   ret.f_tossbuf=!!(//isProperSequence(parent)
                   isProperSequence(expr)
                   || isLookahead(expr.type)
                   || expr.toplevel
                   )
   expr.flags=ret}}}

function isProperSequence(expr){return isSequence(expr.type) && expr.subexprs.length>1}

function v6_calculate_streamability(opts,rules){
 rules._.expr.streamable=true}

function varstmt(vars){
 if(!vars.length) return ''
 return 'var '+vars.join(',')+';'}

function isCset(n){return n==0}
function isSequence(n){return n==2}
function isOrdC(n){return n==3}
function isNamedRef(n){return n==5}
function isPositiveLookahead(n){return n==7}
function isLookahead(n){return n==6||n==7}

/*
0 → cset
1 → string literal
2 → sequence of res
3 → union or ordC of res
4 → m to n reps of re
5 → named reference
6 → re negative lookahead
7 → re positive lookahead
8 → ϵ (equivalent to [1,""])
*/

// re_subexprs :: Re → [Re]
function re_subexprs(re){switch(re[0]){
 case 0:return []
 case 1:return []
 case 2:return re[1]
 case 3:return re[1]
 case 4:return [re[3]]
 case 5:return []
 case 6:return [re[1]]
 case 7:return [re[1]]
 case 8:return []}
 throw new Error(pp(re))}

function v6_assign_ids(opts,rules){var name,rule,last_id,bitfield_order,a
 last_id=rules._.S
 for(name in rules){rule=rules[name]
  go(rule.expr)}
 // we can re-use all the flag bits for primitive tests and other special states that don't have flags
 opts.S_succeed=++last_id
 opts.S_fail=++last_id
 opts.S_ε=++last_id
 opts.lowest_prim_test=opts.S_ε
 opts.highest_used_S=last_id
 return rules
 function go(expr){
  if(!bitfield_order){
   bitfield_order=v6_bitfield_order(expr.flags)
   opts.flagbits=bitfield_order[0]
   opts.bitfield_map=bitfield_order[1]}
  //expr.foo=bitfield_order
  if(expr.S==undefined){
   if(expr.toplevel) expr.S=rule.S
   else expr.S=++last_id
   opts.S_map[expr.S]=expr.id}
  expr.flag_n=v6_obj_to_bitfield(expr.flags,opts.bitfield_map)
  expr.S_flags=expr.S<<opts.flagbits^expr.flag_n
  expr.S_flags_=expr.S_flags.toString(2)
  //if(expr.type==0) assert(expr.cset,'cset exists 1')
  //delete expr['flags'] // XXX Firefox bug
  //if(expr.type==0) assert(expr.cset,'cset exists 2')
  expr.subexprs.forEach(go)}}

function v6_bitfield_order(o){var p,i=0,ret={}
 for(p in o) ret[p]=1<<i++
 return [i,ret]}

function v6_obj_to_bitfield(flags,bitfield_order){var p,n=0
 for(p in flags){
  if(flags[p]) n^=bitfield_order[p]}
 return n}

function v6_flag_test(opts){return function(varname,flagname){
  //return pp(opts.bitfield_map)
  return varname+'&'+opts.bitfield_map[flagname]+'/*'+flagname+'*/'}}

function v6_step_three(opts,rules){var name,rule
 for(name in rules){rule=rules[name]
  go()(rule.expr)}
 return rules
 function go(parent){return function(expr,i,a){var next
   switch(expr.type){
    case 0:expr.T=v6_assign_prim_test_id(opts,expr.cset);break
    case 5:expr.T=rules[expr.ref].expr.S_flags;break
    case 4:
    case 6:
    case 7:assert(expr.subexprs.length==1,'subexpr length')
           // fallthrough //
    case 2:
    case 3:expr.T=expr.subexprs[0].S_flags;break
    case 8:expr.T=opts.S_ε;break
    default:throw new Error('bad expr.type '+expr.type)}
   if(expr.toplevel){
    expr.M=opts.S_succeed
    expr.F=opts.S_fail}
   else{
    next=a[i+1] // next sibling expr if any
    switch(parent.type){
     case 2:expr.M=next?next.S_flags:opts.S_succeed
            expr.F=opts.S_fail;break
     case 3:expr.M=opts.S_succeed
            expr.F=next?next.S_flags:opts.S_fail;break
     case 4:assert(!next,'*-expr is singleton')
            expr.M=expr.S_flags
            expr.F=opts.S_succeed;break
     case 6:assert(!next,'lookahead is singleton')
            expr.M=opts.S_fail
            expr.F=opts.S_succeed;break
     case 7:assert(!next,'lookahead is singleton')
            expr.M=opts.S_succeed
            expr.F=opts.S_fail;break
     default:throw new Error('unexpected parent type '+parent.type)}}
   expr.subexprs.forEach(go(expr))}}}

function v6_assign_prim_test_id(opts,cset){var string_representation,x
 opts.prim_test_assignments=opts.prim_test_assignments||{}
 opts.prim_test_reverse=opts.prim_test_reverse||{}
 string_representation=cset.toString()
 x=opts.prim_test_assignments[string_representation]
 if(x)return x
 x=++opts.highest_used_S
 if(!opts.lowest_prim_test)opts.lowest_prim_test=x
 opts.highest_prim_test=x
 opts.prim_test_assignments[string_representation]=x
 opts.prim_test_reverse[x]=cset
 return x}

function v6_is_prim_test(opts){return function(varname){
  return varname+'<'+(opts.highest_prim_test+1)
    +'&&'+varname+'>'+(opts.lowest_prim_test-1)}}

function v6_is_not_prim_test(opts){return function(id_S){
  return id_S+'>'+(opts.highest_prim_test)
    +'||'+id_S+'<'+(opts.lowest_prim_test)}}

function v6_prim_test_case_statements_BMP(opts){return function(id_c,id_R){var ret=[],p,cset,BMP_no_surrogates,surrogates
  surrogates=CSET.fromIntRange(0xD800,0xDFFF)
  BMP_no_surrogates=CSET.difference(CSET.fromIntRange(0,0xFFFF),surrogates)
  for(p in opts.prim_test_reverse){
   cset=CSET.intersection(opts.prim_test_reverse[p],BMP_no_surrogates)
   ret.push(v6_cset_to_case_stmt(opts)(id_c,id_R,p,cset))}
  return ret.join('\n')}}

function v6_prim_test_case_statements_supplementary(opts){return function(id_c,id_R){var ret=[],p,cset,supplementary
  supplementary=CSET.fromIntRange(0x10000,0x10FFFF)
  for(p in opts.prim_test_reverse){
   cset=CSET.intersection(opts.prim_test_reverse[p],supplementary)
   if(CSET.empty(cset))continue
   else ret.push(v6_cset_to_case_stmt(opts)(id_c,id_R,p,cset))}
  return ret.join('\n')}}

function v6_cset_to_case_stmt(opts){return function(id_c,id_R,_case,cset){
  return 'case '+_case+':'+id_R+'='+cset_to_expr(cset,id_c)+';break'}}

function v6_ε_case(opts){return function(id_pos,id_R){
  return 'case '+opts.S_ε+':'+id_R+'=true;'+id_pos+'--;break\n'}}
function v6_ε_ifstmt(opts){return function(id_S,id_R){
  return 'if('+id_S+'=='+opts.S_ε+')'+id_R+'=true\n'}}

function v6_TMF_tables(opts,rules){var T=[],M=[],F=[],name
 for(name in rules){
  v6_walk(f)(rules[name].expr)}
 return 'T=['+T.join()+']\n'
      + 'M=['+M.join()+']\n'
      + 'F=['+F.join()+']\n'
 function f(expr){
  assert(expr.S_flags>>>opts.flagbits === expr.S,'S vs S_flags')
  T[expr.S]=expr.T
  M[expr.S]=expr.M
  F[expr.S]=expr.F}}

function v6_walk(f){return function walk(expr){
  f(expr)
  expr.subexprs.map(walk)}}