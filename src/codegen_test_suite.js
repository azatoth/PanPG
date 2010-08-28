function codegen_test_all(){var n,i,results=[]
 n=3
 for(i=1;i<=n;i++){
  results.push(i+' '+(eval('codegen_test_'+i)()?'PASS':'FAIL'))}
 return results.join('\n')}

var codegen_test_input_1=
'["","a",null,true,false,0,-1,1,1.7,-1.7,1e3,-1e3,5.2e8,-5.2e8,{"a":"a","":"","true":true,"false":false,"null":null,"0":0},{},{"":{"":{}}},[],[[[]]]]'
  , codegen_test_input_2='WhiteSpace ← [ U+0009 U+FEFF [:Zs:] ]'
  , codegen_test_input_3='S \nX'

var codegen_test_grammar_1='True ← "true"'
  , codegen_test_grammar_2='S ← "a"'
  , codegen_test_grammar_3='RS ← R LB R\n'+
                           'R  ← [ A-Z ]+ S?\n'+
                           'LB ← [U+000A]\n'+
                           'S  ← SpaceAtom+\n'+
                           'SpaceAtom ← " " / LB " "'

var codegen_test_output_g3_i3=[1,2,-1,1,4,-2,1,-2,2,3,-2,1,2,-2,1,-2,4]

function must_match(grammar,input){var code
 code=generateParser(grammar,{fname:'__codegen_test__'})
 eval(code)
 return __codegen_test__(input)[0]}

function must_produce_tree(grammar,opts,input,tree){var code
 opts.fname='__codegen_test__'
 code=generateParser(grammar,opts)
 eval(code)
 return JSON.stringify(__codegen_test__(input)[1])
     == JSON.stringify(tree)}

function codegen_test_1(){
 return must_match(codegen_test_grammar_1,"true")}

function codegen_test_2(){
 return must_match(codegen_test_grammar_2,'a')}

function codegen_test_3(){
 return must_produce_tree(codegen_test_grammar_3
                         ,{elide:['SpaceAtom']}
                         ,codegen_test_input_3
                         ,codegen_test_output_g3_i3)}