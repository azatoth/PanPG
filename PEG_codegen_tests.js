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