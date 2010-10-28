function js_pp_ast_preservation(s){var ast1,s2,ast2,diff
 ast1=js_ast(s)
 //return ast1
 s2=print({},ast1)
 //return s2
 ast2=js_ast(s2)
 //return ast2
 if(diff=js_ast_diff(ast1,ast2)) return pp(diff)+'\n\n'+s2
 return 'ASTs are equal'}

function js_pp_tests(){var opts1,opts2
opts1={semicolons:'all'
      ,indentation:2
      ,newline_before_closing_brace:false
      ,newline_after_closing_brace:false
      ,space_around_operators:true
      ,space_around_assign:true
      ,space_inside_parens:false
      ,space_inside_if_test_parens:false
      ,space_before_if_test:false
      ,space_after_single_line_if_test:true
      ,string_quote_style:'shorter-or-double'
      ,space_after_comma:false
      ,array_use_elisions:true
      }
opts2=copy(opts1)
opts2.homogenize_arrays=true
opts2.array_use_elisions=false
opts3=copy(opts1)
opts3.space_around_operators=false
opts3.space_around_assign=false
return ''+
/*
 [optsN,input
       ,expected,name] */
[[opts1,'3*(1+2)'
       ,'3 * (1 + 2);','arithmetic precedence']
,[opts1,'if(x)foo()'
       ,'if(x) foo();','if statement']
,[opts1,'1+2%3*4-5+6/7*8'
       ,'1 + 2 % 3 * 4 - 5 + 6 / 7 * 8;','precedence']
,[opts1,'(1+2)*3'
       ,'(1 + 2) * 3;','precedence']
,[opts1,'1*(2+3)'
       ,'1 * (2 + 3);','precedence']
,[opts1,'\'""\''
       ,'\'""\';']
,[opts1,'[\'""\',"\'\'",\'abc\']'
       ,'[\'""\',"\'\'","abc"];','shorter-or-double string quoting']
,[opts2,'[\'"\',"\'"]'
       ,'["\\"","\'"];','homogenize quotes in array literal']
,[opts1,'"have a string"'
       ,'"have a string";','trivial string']
,[opts1,'var x'
       ,'var x;','variable declaration']
,[opts1,'function f(x){return x*x}'
       ,'function f(x){\n return x * x;\n}','simple function']
,[opts1,'for(i=0;i<10;i++)print(i);'
       ,'for (i = 0; i < 10; i++) print(i);','for loop']
,[opts1,'for(p in o)print(o[p]);'
       ,'for (p in o) print(o[p]);','for..in']
,[opts1,'!x'
       ,'!x;','unary expression']
,[opts1,'typeof x'
       ,'typeof x;','unary expression with required space']
,[opts1,'new new FactoryFactory()(x);'
       ,'new new FactoryFactory()(x);','nested new']
,[opts1,'new (new FactoryFactory)(x);'
       ,'new (new FactoryFactory)(x);','tricky nested new']
,[opts1,'new (FactoryFactory())(x);'
       ,'new (FactoryFactory())(x);','tricky new with CallExpr']
,[opts1,'+new Date'
       ,'+new Date;','+new Date'] // "+new Date()" would be a different AST.
,[opts1,'function f(){function g(){x}}'
       ,'function f(){\n function g(){\n  x;\n }\n}','nested function indentation']
,[opts1,'a+(b?c:d)+e;a+b?c:d+e'
       ,'a + (b ? c : d) + e;\na + b ? c : d + e;','precedence']
,[opts1,'a=0?0:0;1||1?1:1;'
       ,'a = 0 ? 0 : 0;\n1 || 1 ? 1 : 1;','ternary precedence']
,[opts1,'2||(2?2:2)'
       ,'2 || (2 ? 2 : 2);','ternary precedence']
,[opts1,'try{throw x}catch(e){e}'
       ,'try{\n throw x;\n}\ncatch(e){\n e;\n}','try/catch']
,[opts1,'try{x}catch(e){e}finally{x}'
       ,'try{\n x;\n}\ncatch(e){\n e;\n}\nfinally{\n x;\n}','try/catch/finally']
,[opts1,'try{x}finally{x}'
       ,'try{\n x;\n}\nfinally{\n x;\n}','try/finally']
,[opts1,'null;'
       ,'null;','null;']
,[opts1,'while(0)0;'
       ,'while(0)0;','while']
,[opts1,'a,b;'
       ,'a,b;','sequence expression']
,[opts1,'typeof x'
       ,'typeof x;','typeof']
,[opts1,'x instanceof y'
       ,'x instanceof y;','instanceof']
,[opts1,'[1,1.0,.1,1e2]'
       ,'[1,1,0.1,100];','numbers']
,[opts1,'[!1,-1,+1,~1,delete 1,typeof 1];'
       ,'[!1,-1,+1,~1,delete 1,typeof 1];','unary operators']
,[opts3,'1-1,1+1,1*1,1/1,1%1,1^1,1&1,1<<1,1>>1,1<1,1>1,1<=1,1>=1,1|1,1||1,1&&1;'
       ,'1-1,1+1,1*1,1/1,1%1,1^1,1&1,1<<1,1>>1,1<1,1>1,1<=1,1>=1,1|1,1||1,1&&1;','binary ops']
,[opts1,'/a/i,/a/g,/a/m'
       ,'/a/i,/a/g,/a/m;','regexp with flags']
,[opts1,'true,false'
       ,'true,false;','Boolean literals']
,[opts1,'function f(){function g(){x;x;x;}}'
       ,'function f(){\n function g(){\n  x;\n  x;\n  x;\n }\n}','function indentation']
,[opts1,'for(p in o){x;y;z}'
       ,'for (p in o){\n x;\n y;\n z;\n}','for..in indentation']
,[opts1,'for(var p in o){}'
       ,'for (var p in o){\n}','for var in']
,[opts1,'if(x){y}else if(z){a}else{b}'
       ,'if(x){\n y;\n}else if(z){\n a;\n}else{\n b;\n}','if else if else']
,[opts1,'{}'
       ,'{\n}','empty Block statement']
,[opts1,'(function(){})'
       ,'(function (){\n});','anonymous function expression statement']
,[opts1,'({});'
       ,'({});','object literal expression statement']
,[opts3,'s+=""'
       ,'s+="";','+=']
,[opts3,'s-=""'
       ,'s-="";','-=']
,[opts1,'[,]'
       ,'[,];','array, elision, otherwise empty']
,[opts1,'[0,]'
       ,'[0];','array trailing comma']
,[opts1,'[0,,]'
       ,'[0,,];','array with element, elision, trailing comma']
,[opts1,'[,,]'
       ,'[,,];','array elision']
,[opts1,'[0,,1,,]'
       ,'[0,,1,,];','array with element, elision, element, comma, elision']
,[opts2,'[,]'
       ,'[void 0];','array elision replacement']
,[opts3,'(x=y)>z'
       ,'(x=y)>z;','precedence']
,[opts3,'+i++;'
       ,'+i++;','precedence']
,[opts1,'x:y'
       ,'x:y;','labelled statement']
,[opts1,'with(o){p}'
       ,'with(o){\n p;\n}','with statement']
,[opts1,'i++;i--;++i;--i;'
       ,'i++;\ni--;\n++i;\n--i;','increment/decrement']
].map(function(a){var x
  try{x=format(a[0],a[1])}
  catch(e){return 'FAIL: '+a[3]+'\n      '+e}
  return x==a[2]
    ? 'PASS'
    : 'FAIL: '+(a[3]||'')
     +'\n      input:    '+a[1].replace(/\n/g,'\n                ')
     +'\n      expect:   '+a[2].replace(/\n/g,'\n                ')
     +'\n      actual:   '+x   .replace(/\n/g,'\n                ')})
 .join('\n')+log.get()}

function test(){

var test = 

//"//line comment test\n"+//PROBLEM? (not listed?) // yes, see comments about comments at the bottom of js_ast.js
//"/*block comment test*/\n"+//PROBLEM? (not listed?)
//"/*block comment newline test\n*/\n"+
//"/*block comment /*nest test*/\n"+
",1 in {1:1}//binary operator test\n"+
"1==2//binary operator test\n"+
"1===2//binary operator test\n"+
"1!=1//binary operator test\n"+
"1>=1//binary operator test\n"+
"1<=1//binary operator test\n"+
"1<1//binary operator test\n"+
"1>1//binary operator test\n"+
"x*=1//binary operator test\n"+
"x/=1//binary operator test\n"+
"x%=1//binary operator test\n"+
"x|=1//binary operator test\n"+
"x&=1//binary operator test\n"+
"1<<=1//binary operator test\n"+
"1>>=1//binary operator test\n"+
"x?0:1//conditional expression test\n"+
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
