function old_peg_codegen_test(s){var pt
 pt=tree(p_RuleSet,s)
 if(!pt[0])return 'error'
 pt=pt[1]
 PEG_codegen_2(pt)
 PEG_codegen_1(pt)
 return pt.codegen_v1()('RuleSet','p_PEG_v1_',[],false)}

function peg_v3_gen_tal(s){var pt,hide,force
 pt=tree(p_RuleSet,s)[1]
 PEG_codegen_1(pt)
 PEG_codegen_2(pt)
 PEG_codegen_3(pt)
 hide=['S','LB']
 force=['p','code_v3','code']
 return showPTNodeTreeAttrs(pt,hide,force)}

function peg_v3_gen(s,start,prefix){var pt,hide,force
 pt=tree(p_RuleSet,s)[1]
 PEG_codegen_1(pt)
 PEG_codegen_2(pt)
 PEG_codegen_3(pt)
 return pt.code_v3()(start,prefix,[],false)}

function peg_v4_gen_tal(s){var pt,hide,force
 pt=tree(p_RuleSet,s)[1]
 PEG_codegen_4(pt)
 hide=['S','LB','OrdChoice']
 force=['p','code_v3','code','f1','named_re']
 return showPTNodeTreeAttrs(pt,hide,force)}

function peg_v4_gen(s,start,prefix){var pt,hide,force
 pt=tree(p_RuleSet,s)[1]
 PEG_codegen_4(pt)
 return pt.code_v4()(start,prefix,[],false)}

function peg_v5_gen_tal(s){var pt,hide,force
 //pt=tree(p_RuleSet,s)[1]
 pt=p_PEG_v5_RuleSet(s)[1]
 //return showTree(pt)
 //return pp(pt)
 PEG_codegen_5(pt)
 hide=['S','LB','IdentStartChar']
 force=['nm','f1','named_re','re','cset','cp']
 return showPTNodeTreeAttrs(pt,hide,force)}

function peg_v5_gen(s,opts){var pt
 //pt=tree(p_RuleSet,s)[1]
 pt=p_PEG_v5_RuleSet(s)[1]
 PEG_codegen_5(pt)
 return pt.code_v5()(opts)}

function peg_arith_test(s){var pt,pt2
 pt=tree(p_Expr,s)[1]
 pt2=p_arith_Expr(s)[1]
 pt3=p_arith_v4_Expr(s)[1]
 pt4=p_arith_v5_Expr(s)[1]
 return s
    //  + '\n\n' + pp(pt)
    //  + '\n\n' + pp(pt2)
    //  + '\n\n' + pp(pt3)
      + '\n\n' + showTree(pt4,p_arith_v5_Expr.names)}

function peg_features_test(){
 return showTree(p_PEG_features_v5_S('x')[1])}

function PEG_ES5_arith_Expr_test(s){var pt
 pt=p_ES5_arith_Expr(s)[1]
 return showTree(pt)}

function ES5_test(s){var pt
 pt=p_ES5_v5_Program(s)
 //return peg_profile_analyzer(pt[1])
 return JSON.stringify(pt)
 return pt[0]
 return pp(pt)
 return showPTNodeTreeAttrs(pt,[],[])}

function peg_benchmarks(s){var pt,t,ret=[]
 t=new Date
 function push(f,name,flag){var n=8
  while(n--)pt=flag?f(s):tree(f,s)
  ret.push(name +' '+ pt[0] +' '+ (new Date-t))
  t=new Date}
 //push(p_PEG_RuleSet,'p_PEG   ')
 //push(p_PEG_v1_RuleSet,'p_PEG_v1')
 //push(p_PEG_v3_RuleSet,'p_PEG_v3',1)
 push(p_PEG_v4_RuleSet,'p_PEG_v4',1)
 push(p_PEG_v5_RuleSet,'p_PEG_v5',1)
 push(p_PEG_v5_1_RuleSet,'p_PEG_v5_1',1)
 //ret.push(pp(pt[2].log.get()))
 if(!pt[0])return explainParseFailure(pt)
 return ret.join('\n')}

function peg_benchmarks_re_vs_loop(s){var t,i,l,re,re2,res=[],res2=[],s2,ret=[],x
 //s=Array(9).join(s)
 t=new Date
 re=/^[a-z]/
 re2=/^[a-z]/g
 function push(msg,res){
  ret.push(msg+(new Date-t))
  t=new Date
  //ret.push(res.map(function(x){return x?'T':'F'}))
  }
 ret.push('string length: '+s.length)
 for(i=0,l=s.length;i<l;i++){
  s2=s.slice(i)
  res[i]=re.test(s2)}
 push('new strings: ',res)
 for(i=0,l=s.length;i<l;i++){
  s2=s.slice(i)
  res[i]=re.test(s2)}
 push('new strings: ',res)
 for(i=0,l=s.length;i<l;i++){
  s2=s.slice(i)
  res[i]=re.test(s2)}
 push('new strings: ',res)
 for(i=0,l=s.length;i<l;i++){
  x=s.charCodeAt(i)
  res[i]=x<123&&x>96}
 push('comparison ops: ',res)
 for(i=0,l=s.length;i<l;i++){
  x=s.charCodeAt(i)
  res[i]=x<123&&x>96}
 push('comparison ops: ',res)
 try{(function f(s,i,l){
   x=s.charCodeAt(i)
   res[i]=x<123&&x>96
   if(i<l)f(s,i+1,l)})(s,0,s.length-1)
 push('recursive function: ',res)}catch(e){}
 try{(function f(s,i,l){
   x=s.charCodeAt(i)
   res[i]=x<123&&x>96
   if(i<l)f(s,i+1,l)})(s,0,s.length-1)
 push('recursive function: ',res)}catch(e){}
 return ret.join('\n')}

function peg_benchmarks_fcall_vs_loop(){var d,n,ret=[]
 d=new Date
 n=1000
 for(;;){
  if(!n--)break}
 ret.push('1000 loops: '+(new Date-d));d=new Date
 for(n=10000000;n--;){}
 ret.push('10000000 loops: '+(new Date-d));d=new Date
 f(500)
 ret.push('1000 fcalls: '+(new Date-d))
 return ret.join('\n')
 function f(n){if(n)g(--n)}
 function g(n){f(n)}}

function peg_profile_analyzer(profile){var res={},ret=[],totals={puts:0,hits:0,pos:0,neg:0},zeros=[]
 profile.forEach(function(entry){var name,event
  event=entry[0],name=entry[1]
  if(!res[name])res[name]={name:name,puts:0,hits:0,pos:0,neg:0}
  switch(event){
   case 0:
    res[name].puts++;break
   case 1:
    res[name].hits++
    res[name].pos++;break
   case 2:
    res[name].hits++
    res[name].neg++;break}})
 for(var p in res){
  res[p].ratio=res[p].hits/res[p].puts
  totals.puts+=res[p].puts
  totals.hits+=res[p].hits
  totals.pos+=res[p].pos
  totals.neg+=res[p].neg
  ret.push(res[p])
  if(res[p].hits==0)zeros.push([p,res[p].puts])}
 ret.sort(function(a,b){
  if(a.ratio<b.ratio)return -1
  if(a.ratio>b.ratio)return 1
  return 0})
 zeros.sort(function(a,b){return a[1]<b[1]?1:a[1]>b[1]?-1:0})
 return pp(ret)
      + '\n\nTotals:\n'
      + pp(totals)
      + '\n\nZeros:\n'
      + zeros.map(function(x){return x[0]+' ('+x[1]+')'}).join('\n')}

;(function(){

var rule=
 ["SourceCharacter ← [ U+0000-U+10FFFF ]"
 ,"SourceCharacter ← [ U+0000-U+FFFF ]"
 ,"InputElementDiv ← WhiteSpace / LineTerminator / Comment / Token / DivPunctuator"
 ,"WhiteSpace ← [ U+0009 U+000B U+000C U+0020 U+0085 U+00A0 U+200B U+FEFF [:Zs:] ]"
 ,'MultiLineComment ← "/*" (!("*/") SourceCharacter)* "*/"'
 ,'SingleLineComment ← "//" [^ U+000A U+000D U+2028 U+2029 ]*'
 ,'Keyword ← "break" / "case" / "catch"'
 ,'Identifier ← !(ReservedWord) IdentifierName'
 ,'IdentifierName ← IdentifierStart IdentifierPart*'
 ,'IdentiferStart ← UnicodeLetter / "$" / "_" / RS UnicodeEscapeSequence'
 ,'IdentifierPart ← IdentifierStart / [ [:Mn:] [:Mc:] [:Nd:] [:Pc:] ]'
 ,'NumericLiteral ← DecimalLiteral !(IdentifierStart) / HexIntegerLiteral !(IdentifierStart)'
 ,'DecimalIntegerLiteral ← "0" / [1-9] DecimalDigit*'
 ,'Foo ← [1-9]'
 ,'HexIntegerLiteral ← "0x" HexDigit+ / "0X" HexDigit+'
 ,'SingleStringCharacter ← !( SQ / RS / LineTerminator ) SourceCharacter / RS EscapeSequence / LineContinuation'
 ,'SingleEscapeCharacter ← [ U+0027 U+0022 U+005C b f n r t v ]'
 ,'UnicodeEscapeSequence ← "u" HexDigit{4}'
 ,'RegularExpressionFirstChar ← !( LineTerminator / [ * U+005C / [ ] ) SourceCharacter / RegularExpressionBackslashSequence / RegularExpressionClass'
 ,'Bar ← Bar'
 ][19]

PEG_codegen_tests_input_tree=function(){
 return [rule
        ,showTree(tree(p_PEG_Rule,rule)[1])
        ].join('\n\n')}

PEG_codegen_tests_show_prog=function(){
 return pp(parseTMProg(getFile('PEG_codegen')))}

PEG_codegen_tests_mark_tree=function(){
 return [rule
        ,markTMProg(parseTMProg(getFile('PEG_codegen'))
                   ,tree(p_PEG_Rule,rule)[1])
        ].join('\n\n')}

function output(retattr){
 var ptA=tree(p_PEG_Rule,rule)
   , prog=parseTMProg(getFile('PEG_codegen'))
 return [rule
        ,applyTMProg(prog,"{prefix:'p_ES_'}",ptA[1],rule,retattr)
        ].join('\n\n')}

PEG_codegen_tests_output=function(){return output('p')}
PEG_codegen_tests_output_re=function(){return output('re_kvpair')}

//var peg=getFile('ECMAScript.peg')

PEG_codegen_tests_codegenTable=function(){
 try{
  return pp(codegenTable(peg,'p_ES_'))}
 catch(e){
  return e.toString()+'\n\n'+log.get()}}

PEG_codegen_tests_reTablePostProcess=function(){
 log.clear()
 var x=peg.split('\n').slice(0,48).join('\n')
                                 return x
 //x=rule
 try{
  return pp(
   it=reTablePostProcess(codegenTable(x,'p_ES_')[0]))}
 catch(e){
  return e.toString()+'\n\n'+log.get()+'\n\n'+e.stack.slice(0,512)}}

PEG_codegen_tests_deps=function(){
 var x=rule
 x=peg
 return pp(codegenTable(x,'p_ES_')[2])}

PEG_codegen_tests_codegen=function(){
 var x=peg
   , t,res={},pts={},deps={},i,l
 delete it2
 if(!('it2' in window)){
  t=codegenTable(x,'p_ES_')
  res=reTablePostProcess(t[0])
  for(i=0,l=t[1].length;i<l;i++) pts[t[1][i][0]]=t[1][i][1]
  for(i=0,l=t[2].length;i<l;i++)deps[t[2][i][0]]=t[2][i][1]
  it2=[res,pts,deps]
  it3=t}
 else{
  [res,pts,deps]=it2}
 return pp(reTableCodeGen('InputElementDiv','p_ES_',res,pts,deps,['Comment','Keyword','Identifier','Punctuator','DivPunctuator','NullLiteral','BooleanLiteral','NumericLiteral','StringLiteral','RegularExpressionLiteral'],true))}

})()