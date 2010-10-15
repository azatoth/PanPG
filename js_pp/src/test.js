function test(){

var test = 

//"//line comment test\n"+//PROBLEM? (not listed?) // yes, see comments about comments at the bottom of js_ast.js
//"/*block comment test*/\n"+//PROBLEM? (not listed?)
//"/*block comment newline test\n*/\n"+
//"/*block comment /*nest test*/\n"+
"typeof 'x'//typeof test\n"+
"'x' instanceof String//instanceof test\n"+
"1//number literal test\n"+
"1e1//number literal test\n"+
"1.0//number literal test\n"+
".1//number literal test\n"+
"'x'//string literal test\n"+
"\"x\"//string literal test\n"+
"-1//unary operator test\n"+
"~1//unary operator test\n"+
"!1//unary operator test\n"+
"1-1//binary operator test\n"+
"1+1//binary operator test\n"+
"1*1//binary operator test\n"+
"1/1//binary operator test\n"+
"1%1//binary operator test\n"+
"1^1//binary operator test\n"+
"1&1//binary operator test\n"+
"1<<1//binary operator test\n"+
"1>>1//binary operator test\n"+
"1|1//binary operator test\n"+
"1||1//binary operator test\n"+
"1&&1//binary operator test\n"+
"1 in {1:1}//binary operator test\n"+
"1==2//binary operator test\n"+
"1===2//binary operator test\n"+
"1!=1//binary operator test\n"+
"1>=1//binary operator test\n"+
"1<=1//binary operator test\n"+
"1<1//binary operator test\n"+
"1>1//binary operator test\n"+
"x+=1//binary operator test\n"+
"x-=1//binary operator test\n"+
"x*=1//binary operator test\n"+
"x/=1//binary operator test\n"+
"x%=1//binary operator test\n"+
"x|=1//binary operator test\n"+
"x&=1//binary operator test\n"+
"1<<=1//binary operator test\n"+
"1>>=1//binary operator test\n"+
"x?0:1//conditional expression test\n"+
"labeltest:\n"+
"var vartest\n"+
", varcontinuedtest\n"+
", vardeclarationtest=1\n"+
", vardeclarationspacingtest = 1\n"+
", vardeclarationexpressiontext=1+1\n"+
", varstringtest='singlequotetest'\n"+
", varstringdoubletest=\"doublequotetest\"\n"+
", vararraytest=[]\n"+
", vararrayinittest=[1]\n"+
", vararraycontinuedinittest=[1,2]\n"+
", vararraycontinuedtest=[1,2,]\n"+
", varobjecttest={}\n"+
", varobjectliteralkeytest={x:1}\n"+
", varobjectstringkeytest={'x':1}\n"+
", varobjectdoublestringkeytest={\"x\":1}\n"+
", varobjectdoublestringmultiplekeytest={\"x\":1,y:2}\n"+
", varobjectdoublestringcontinuedkeytest={\"x\":1,y:2,}\n"+
", varobjectvalueexpressiontext={x:1+1}\n"+
"vartest.membertest=[]\n"+
"vartest.membertest.submembertest=[]\n"+
"vartest['calculatedmembertest']=[]\n"+
"vartest=1//assignmenttest\n"+
"vartest=vartest//identifiertest\n"+
"++vartest//preincrementtest\n"+
"vartest++//postincrementtest\n"+
"vartest--//postdecrementtest\n"+
"--vartest//predecrementtest\n"+
";//emptystatementtest\n"+
"if(vartest) ;//singleton if test\n"+
"else if(vartest) ; //else if singleton test\n"+
"else ; //singleton else test\n"+
"{;}//blockstatement test\n"+
"{}//literal vs blockstatement test\n"+
"while(0) ;//whilesingletonstatement test\n"+
"while(0){;}//whilestatement test\n"+
"do{;} while(0)//blockstatement test\n"+
"for(;;){}//forstatement test\n"+
"for(x in y){}//forstatement test\n"+
"for(var x in y){}//forstatement test\n"+
"for(;;){continue}//continuestatement test\n"+
"for(;;){continue xyz}//labelledcontinuestatement test\n"+
"for(;;){break xyz}//labelledbreakstatement test\n"+
"for(var x=0;;){}//forstatementinit test\n"+
"for(var x=0;x<1;){}//forstatementtest test\n"+
"for(var x=0;x<1;x++){}//forstatementcontinue test\n"+
"switch('x'){}//switchstatementliteral test\n"+
"switch(x){}//switchstatementvalue test\n"+
"switch(x){case 'x':}//switchstatementcase test\n"+
"switch(x){default:}//switchstatementdefault test\n"+
"function f(){}//function declaration test\n"+
"function f(g){}//function declaration params test\n"+
"function f(){return}//return statement test\n"+
"function f(g){return g}//return statement value test\n"+
"(function f(g){return g})//function expression test\n"+
"f()//function call test\n"+
""

return js_ast(test)}

function js_pp_tests(){var opts1,opts2
opts1={semicolons:'all'
      ,indentation:2
      ,newline_before_closing_brace:false
      ,space_around_operators:true
      ,space_inside_parens:false
      ,space_inside_if_test_parens:false
      ,space_before_if_test:false
      ,space_after_single_line_if_test:true
      ,string_quote_style:'shorter-or-double'
      }
opts2=copy(opts1)
opts2.homogenize_arrays=true
return ''+
[[opts1,'3*(1+2)','3 * (1 + 2);','arithmetic precedence']
,[opts1,'if(x)foo()','if(x) foo();','if statement']
,[opts1,'1+2%3*4-5+6/7*8','1 + 2 % 3 * 4 - 5 + 6 / 7 * 8;','precedence']
,[opts1,'(1+2)*3','(1 + 2) * 3;']
,[opts1,'1*(2+3)','1 * (2 + 3);']
,[opts1,'\'""\'','\'""\';']
,[opts1,'[\'""\',"\'\'",\'abc\']','[\'""\',"\'\'","abc"];','shorter-or-double string quoting']
,[opts2,'[\'"\',"\'"]','["\\"","\'"];','homogenize quotes in array literal']
].map(function(a){var x
  return (x=format(a[0],a[1]))==a[2]
    ? 'PASS'
    : 'FAIL: '+(a[3]||'')+'\n      expected: '+a[2]+'\n      actual:   '+x})
 .join('\n')}