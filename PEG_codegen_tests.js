function peg_v5_gen_tal(s){var pt,hide,force
 pt=p_PEG_v5_RuleSet(s)[1]
 PEG_codegen_5(pt)
 hide=['S','LB','IdentStartChar','IdentChar']
 force=['nm','f1','named_re','re','cset','cp']
 return showPTNodeTreeAttrs(pt,hide,force)}

function peg_v5_gen(s,opts){var pt
return generateParser(s,opts)
return pp(opts)
 pt=p_PEG_v5_RuleSet(s)[1]
 PEG_codegen_5(pt)
 return pt.code_v5()(opts)}

function benchmarkPEGParsers(peg){var out=[],ms
 ms=2000
 out.push(simple(function(){p_PEG_v5_RuleSet(peg)},ms,'v5'))
 out.push(simple(function(){parsePEG(peg)},ms,'v6'))
 return out.join('\n')}

function benchmarkParserGenerator(peg){var out=[],ms,opts
 ms=8000
 opts={start:'RuleSet'}
 out.push(simple(function(){generateParser(peg,opts)},ms,'old'))
 out.push(simple(function(){generateParser2(peg,opts)},ms,'new'))
 return out.join('\n')}

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

function peg_v6_test_streaming_arith(){var s,messages=[],parser,parse=[],tree,chunks
 chunks=['1+','2*3']
 chunks=['1+','2','*3']
 parser=p_arith_streaming_v6_Expr(out)
 chunks.forEach(function(chunk){parser('chunk',chunk)})
 parser('eof')
 tree=treeFromEvents(parse)
 s=chunks.join('')
 return s + '\n\n'
  + pp(messages) + '\n\n'
  + pp(parse) + '\n\n'
  + showTree(tree,p_arith_streaming_v6_Expr.names,s)
 function out(m,x){messages.push(m+' '+x)
  if(m=='tree segment')parse=parse.concat(x)}}

function peg_v6_test_streaming_arith_default(){var s,messages=[],parser,parse=[],tree,chunks
 chunks=['1+','2*3']
 chunks=['1+','2','*3']
 chunks=['1+2','*','3']
 //chunks=['4 * 3 + 2']
 s=chunks.join('')
 parser=p_arith_streaming_v6_default_flags_Expr(out)
 chunks.forEach(function(chunk){parser('chunk',chunk)})
 parser('eof')
 return pp(chunks) + '\n\n'
  + p_arith_streaming_v6_default_flags_Expr.legend + '\n\n'
  + pp(messages) + '\n\n'
  + pp(parse) + '\n\n'
  + showTree(parse,p_arith_streaming_v6_Expr.names,s)
 function out(m,x){messages.push(m+' '+x)
  if(m=='tree segment')parse=parse.concat(x)}}

function test_showEvents(){var events,s,state,out=[],a,names
 s='1+2*3'
 events=p_arith_streaming_v6_default_flags_Expr(s)
 names=p_arith_streaming_v6_default_flags_Expr.names
 //events==[true,[1,2,3,4,-2,1,-2,1,-1,1,3,4,-2,1,-1,1,4,-2,1,-2,3,-2,5,-2,5]]
 out.push('input: '+s)
 a=showEvents([1,2,3])
 out.push(a[0])//;out.push(pp(a[1]))
 a=showEvents([4,-2,1],undefined,s,a[1])
 out.push(a[0])//;out.push(pp(a[1]))
 a=showEvents([-2,1,-1,1],names,s,a[1])
 out.push(a[0])//;out.push(pp(a[1]))
 a=showEvents([3,4,-2,1],names,undefined,a[1])
 out.push(a[0])//;out.push(pp(a[1]))
 a=showEvents([-1,1,4,-2,1,-2,3,-2,5,-2,5],names,s,a[1])
 out.push(a[0])//;out.push(pp(a[1]))
 out.push('all together:')
 out.push(showEvents(events[1],names,s)[0])
 return out.join('\n\n')}

function test_showError(){var s,error,out=[]
 s='1+2x3' // 'x' is a parse error
 error=p_arith_streaming_v6_default_flags_Expr(s)
 assert(error[0]==false,'parse failed')
 out.push(showError(error[1],error[2],s))
 s='function f(){}\nfunction g(x) x*x\nfunction h(){}'
 error=p_ES5_v6_default(s)
 assert(error[0]==false,'ES5 parse failed')
 out.push(showError(error[1],error[2],s))
 return out.join('\n\n')}

function test_showResult(){var s1,s2,out=[],parser
 parser=p_arith_streaming_v6_default_flags_Expr
 s1="1+2+3"
 out.push(s1)
 out.push(showResult(parser(s1),parser.names,s1))
 s2="1+2x3"
 out.push(s2)
 out.push(showResult(parser(s2),parser.names,s2))
 return out.join('\n\n')}

function peg_v6_test_streaming_arith_single_call(){var x
 s='1+2*4'
 x=p_arith_streaming_v6_default_flags_Expr(s)
 return pp(x)}

function peg_v6_hacked(){var s,p,msgs=[],i,l,prof,ls=[]
 s=Array(257).join('1*2+')+'3'
 assert(s.length==1025,'s length')
 p=p_arith_streaming_v6_Expr_hacked(out)
 p('chunk',s)
 p('eof')
 function out(m,x,y){msgs.push(m+' '+x);if(m=='profile')prof=x}
 for(i=0;i<prof.length;i++)
  if(prof[i])
   ls.push(i+': '+prof[i])
 return ls.join('\n')
 }

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

function ES5_default_test(s){var p,pt=[],messages=[],tree
 p=p_ES5_v6_default(function(m,x){
  messages.push(m+' '+x)
  if(m=='tree segment')pt=pt.concat(x)})
 p('chunk',s)
 p('eof')
 tree=treeFromEvents(pt)
 return s + '\n\n'
      + pp(messages) + '\n\n'
 //     + pp(tree) + '\n\n'
      + showTree(tree,p_ES5_v6_default.names,s)
 return JSON.stringify(pt)
 return pt[0]
 return pp(pt)
 return showPTNodeTreeAttrs(pt,[],[])}

function ES5_default_test_identifier(s){var p,pt=[],messages=[],tree,failed=false
 s='foo_$xxx'
 p=p_ES5_v6_default_identifier(function(m,x){
  messages.push(m+' '+x)
  if(m=='tree segment')pt=pt.concat(x)
  if(m=='fail')failed=true})
 p('chunk',s)
 p('eof')
 if(!failed)tree=treeFromEvents(pt)
 else return pp(messages)
 return s + '\n\n'
      + pp(messages) + '\n\n'
 //     + pp(tree) + '\n\n'
      + showTree(tree,p_ES5_v6_default_identifier.names,s)}

// here we create a 1024-character string, reach each character from it, and compare this to an existing character.
// this gives us a theoretical maximum for any parser (assuming this is the fastest way to read the characters from a string)
function peg_benchmarks_upper_bound(){var ret=[],l,ms
 l=8192 // length in chars
 ms=8000 // ms to run test
 //l=4096,ms=4000
 //l=2048,ms=2000
 l=1024,ms=1000
 //l=128,ms=125
 // a ratio of 1024 : 1000 means that the results are in KiB/s
 ret.push(simple(peg_benchmarks_test_chars(l),ms,"test chars (charCodeAt)"))
 //ret.push(simple(peg_benchmarks_test_chars_bkt(l),ms,"test chars (bracket notation)"))
 //ret.push(simple(peg_benchmarks_test_chars_charat(l),ms,"test chars (charAt)"))
 ret.push(simple(peg_benchmarks_test_chars_re(l),ms,"test chars (regex)"))
 //ret.push(simple(peg_benchmarks_test_arith_streaming(l),ms,"streaming revisited"))
 ret.push(simple(peg_benchmarks_test_arith_fast(l),ms,"streaming fast"))
 ret.push(simple(peg_benchmarks_test_arith_v6(l),ms,"streaming v6"))
 ret.push(simple(peg_benchmarks_test_arith_v6_hacked(l),ms,"streaming v6 hacked"))
 ret.push(simple(peg_benchmarks_test_arith_v6_default(l),ms,"v6 default"))
 ret.push(simple(peg_benchmarks_test_arith_pushpop(l),ms,"state pushes and pops"))
 return ret.join('\n')}

function peg_benchmarks_test_chars(n){return function(){var s,l,i,x
 s=Array(n/2+1).join('ab')
 for(i=0,l=s.length;i<l;i++){
  x=s.charCodeAt(i)==0x61}}}

function peg_benchmarks_test_chars_bkt(n){return function(){var s,l,i,x
 s=Array(n/2+1).join('ab')
 for(i=0,l=s.length;i<l;i++){
  x=s[i]=='a'}}}

function peg_benchmarks_test_chars_charat(n){return function(){var s,l,i,x
 s=Array(n/2+1).join('ab')
 for(i=0,l=s.length;i<l;i++){
  x=s.charAt(i)=='a'}}}

function peg_benchmarks_test_chars_re(n){return function(){var s,l,i,x
 s=Array(n/2+1).join('ab')
 for(i=0,l=s.length;i<l;i++){
  s.slice(i).match(/^ab/)}}}

function peg_benchmarks_test_arith_streaming(n){return function(){var s,p,x=[]
 s=Array(n/8+1).join('1*2+')+'3'
 assert(s.length==n/2+1,'string length '+n)
 p=arith_stream(function(m,a){})
 p('chunk',s)
 p('chunk',s)
 p('eof')
 //return pp(x)
 }}

function peg_benchmarks_test_arith_v6(n){var s,p,x=[]
 s=Array(n/8+1).join('1*2+')+'3'
 assert(s.length==n/2+1,'string length '+n)
 return function(){
  p=p_arith_streaming_v6_Expr(function(m,a){})
  p('chunk',s)
  p('chunk',s)
  return s}}

function peg_benchmarks_test_arith_v6_hacked(n){var s,p,x=[]
 s=Array(n/8+1).join('1*2+')+'3'
 assert(s.length==n/2+1,'string length '+n)
 return function(){
  p=p_arith_streaming_v6_Expr_hacked(function(m,a){})
  p('chunk',s)
  p('chunk',s)
  return s}}

function peg_benchmarks_test_arith_v6_default(n){var s,p,x=[]
 s=Array(n/8+1).join('1*2+')+'3'
 assert(s.length==n/2+1,'string length '+n)
 return function(){
  p=p_arith_streaming_v6_default_flags_Expr(function(m,a){})
  p('chunk',s)
  p('chunk',s)
  return s}}

function peg_benchmarks_test_arith_fast(n){return function(){var s,p,x=[]
 s=Array(n/8+1).join('1*2+')+'3'
 assert(s.length==n/2+1,'string length')
 p=arith_stream(function(m,a){})
 p('chunk',s)
 p('chunk',s)
 p('eof')}}

function peg_benchmarks_test_arith_pushpop(n){return function(){var npushes,a=[],depth=16,i,j,total=0
  npushes=n*13 // the arithmetic parser does about 13 state pushes and pops per input character on the test input we use
  for(i=0;i<npushes;i+=depth){
   for(j=0;j<depth;j++) total++,a.push(42)
   for(j=0;j<depth;j++) a.pop()}
  //throw new Error('total: '+total)
  }}

function peg_benchmarks_array_push(){var ret=[],ms,n
 n=40960
 ms=16000
 ret.push(simple(peg_benchmarks_array_push_push(n),ms,"a.push(x)"))
 ret.push(simple(peg_benchmarks_array_push_index(n),ms,"a[a.length]=x"))
 return ret.join('\n')}

function peg_benchmarks_array_push_push(n){return function(){var a=[],i
 for(i=0;i<n;i++) a.push(42)}}

function peg_benchmarks_array_push_index(n){return function(){var a=[],i
 for(i=0;i<n;i++) a[a.length]=42}}

function benchmark(f,ms){var d1=+new Date,d2,end=d1+ms,res=[]
 do{
  f()
  d2=+new Date
  res.push(d2-d1)
  d1=d2}
 while(d2<end)
 return res}

function simple(f,ms,desc){var res,n,tot_ms,most
 res=benchmark(f,ms)
 n=res.length
 tot_ms=sum(res)
 //most=res.sort(function(a,b){return a==b?0:a<b?-1:1}).slice(0,Math.round(res.length*0.5))
 return desc+':\n'+
        ['rate: '+(n/tot_ms).toPrecision(4)
        ,'ms: '+tot_ms
        ,'max: '+max(res)
        ,'min: '+min(res)
        ,'n: '+n
        //,'\nmost: '+(most.length/sum(most)).toPrecision(4)
        //,'ms: '+sum(most)
        //,'max: '+max(most)
        //,'min: '+min(most)
        //,'n: '+most.length
        ].join(' ')}

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

function abc_test(peg){var parser
 parser=generateParserThrowing(peg)
 return parser
 eval(parser)
 return parser
      + '\n\n'
      + TestABC('abc')}
