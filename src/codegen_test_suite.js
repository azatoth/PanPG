function codegen_test_all(){var n,i,results=[]
 n=2
 for(i=1;i<=n;i++){
  results.push(i+' '+(eval('codegen_test_'+i)()?'PASS':'FAIL'))}
 return results.join('\n')}

var codegen_test_input_1=
'["","a",null,true,false,0,-1,1,1.7,-1.7,1e3,-1e3,5.2e8,-5.2e8,{"a":"a","":"","true":true,"false":false,"null":null,"0":0},{},{"":{"":{}}},[],[[[]]]]'

var codegen_test_grammar_1='True ← "true"'
  , codegen_test_grammar_2='S ← "a"'

function must_match(grammar,input){var code
 code=generateParser(grammar,{fname:'__codegen_test'})
 eval(code)
 return __codegen_test(input)[0]}

function codegen_test_1(){
 return must_match(codegen_test_grammar_1,"true")}

function codegen_test_2(){
 return must_match(codegen_test_grammar_2,'a')}

