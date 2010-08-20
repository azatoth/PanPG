var codegen_test_input_1=
'["","a",null,true,false,0,-1,1,1.7,-1.7,1e3,-1e3,5.2e8,-5.2e8,{"a":"a","":"","true":true,"false":false,"null":null,"0":0},{},{"":{"":{}}},[],[[[]]]]'

var codegen_test_grammar_1=
'True ← "true"'

  , codegen_test_grammar_2=
'S ← "a"'

function codegen_test_001(){var code
 code=generateParser(codegen_test_grammar_1)
 eval(code)
 return True("true")[0]
 return explain(codegen_test_grammar_1,{},"true",true)}

function codegen_test_002(){
 return explain(codegen_test_grammar_2,{},'a')}

