// TODO:
// when opts.semicolons==false, add them when necessary
// don't eat comments
// the ForInStatement thing is probably buggy (if the Statement contains another for-in statement...), should just make VarTok return something special and then test for it.

function assert(x,m){if(!x)throw new Error('assertion failed: '+m)}

function format(s,opts){var res,cbs,out,hide,state,spaces
 opts=opts||{}


 default_('semicolons',true)
 default_('indentation',2)
 default_('newline_before_closing_brace',true)
 default_('space_after_comma',true)
 default_('space_around_operators',true)
 default_('object_literal_comma_first',false)
 default_('blank_before_function',true)
 default_('space_around_if_condition',true)

 function default_(k,v){if(opts[k]===undefined)opts[k]=v}

 spaces=repeat(' ',opts.indentation)

 // parse the input
 res=ES5Parser.parse(s)

 // `res` is now a parse tree (or an error if the parse failed)
 //return pp(res)

 state=
  {var_in_for:false
  }

 // next we process it with a post-order traversal with side-effecting callbacks

 cbs= // callbacks for each rule in the grammar (that we care about)

  // callbacks get two arguments: match object and children
  //   match object has a .text() method which gives you the actual match, sliced out of the input string
  //   children is the return values, if any, of the child nodes in the parse tree, if you didn't define callbacks that returned something on the child nodes then this will just be an empty array
  {Program:
    function(m,cn){out=cn.join('\n')}

  ,FunctionDeclaration:
    function(m,cn){var params='',body=''
      if(cn[1].formal_params){
        params=cn[1].formal_params
        body=cn[2]}
      else body=cn[1]
      return (opts.blank_before_function?'\n':'')
           + 'function '+cn[0]
           + '('+params+'){'
           + indent(body?'\n'+body:'')+'}'}

  ,FunctionExpr:
    function(m,cn){var name='',params='',body
      switch(cn.length){
        case 1:body=cn[0];break
        case 2:
          if(cn[0].formal_params) params=cn[0].formal_params
          else name=cn[0]
          body=cn[1];break
        case 3:
          name=cn[0]
          params=cn[1]
          body=cn[2];break
        default:assert(0,'number of child nodes')}
      return 'function '+name
           + '('+params+'){'
           + indent(body?'\n'+body:'')
           + '}'}

  ,FormalParameterList:
    function(m,cn){return {formal_params:cn.join(', ')}}

  ,FunctionBody:
    function(m,cn){return cn.join('\n')}

  ,Statement:
    function(m,cn){return cn[0]}



  /******** Statements ********/

  ,Block: // children are Statements
    function(m,cn){return '{'+indent('\n'+cn.join(''))+'}'}

  ,VariableStatement: // children are VariableDeclarations
    function(m,cn){
      state.var_in_for=false
      return 'var '+cn.join(',')+EOS()}

  ,EmptyStatement: // a literal semicolon, ASI does not apply
    function(){return ';'}

  ,ExprStatement:
    function(m,cn){return cn[0]+EOS()}

  ,IfStatement: // cn[0] = Expr, cn[1] = Statement, and if there was an else clause, cn[2] = Statement
    function(m,cn){var open='(',close=')'
      if(opts.space_around_if_condition) open=' (', close=') '
      if(cn.length==2) return 'if'+open+cn[0]+close+cn[1]
      assert(cn.length==3,'there is an else clause')
      return 'if'+open+cn[0]+close+cn[1]+'\n'
           + 'else '+cn[2]}

  //IterationStatement = do..while, while, for..in, for
  ,IterationStatement:
    function(m,cn){return cn[0]}

  ,DoWhileStatement:
    function(m,cn){return 'do '+cn[0]+'\nwhile '+cn[1]}

  ,WhileStatement:
    function(m,cn){return 'while '+cn[0]+'\n'+cn[1]}

  // this one is a little hairy:
  // ForInStatement ←
  //   ForTok S? "(" S? LeftHandSideExpr S? InTok S? Expr S? ")" S? Statement
  // / ForTok S? "(" S? VarTok S? VariableDeclarationNoIn S? InTok S? Expr S? ")" S? Statement
  // A for-in statement can have a variable declaration in it, or not.
  // to detect the difference we set a flag when we see a VarTok, and clear the flag in the enclosing VarStatement or ForInStatement
  // So if the flag is set here, it means we have the second form, otherwise we have the first form with LeftHandSideExpr
  ,ForInStatement:
    function(m,cn){var ret
      ret= 'for ('
         + (state.var_in_for ? 'var ' : '')
         + cn[0] // LHSExpr or VarDeclNoIn
         + ' in '
         + cn[1] // Expr
         + ') '
         + cn[2] // Statement
      state.var_in_for=false
      return ret}

  ,VarTok:
    function(){state.var_in_for=true}

  ,ContinueStatement:
    function(){return 'continue'+EOS()}

  ,BreakStatement:
    function(){return 'break'+EOS()}

  ,ReturnStatement:
    function(m,cn){return 'return '+cn[0]+EOS()}

  ,WithStatement: // cn[0] = Expr, cn[1] = Statement
    function(m,cn){return 'with ('+cn[0]+')'+cn[1]+EOS()}

  ,LabelledStatement:
    function(m,cn){return cn[0]+': '+cn[1]+EOS()}

  ,SwitchStatement: // children: Expr followed by 0 or more CaseClause or DefaultClause
    function(m,cn){
      return 'switch ('+cn[0]+'){\n'
           + cn.slice(1).join('\n')
           + '}'}

  ,CaseClause:
    function(m,cn){
      return 'case '+cn[0]+':'+indent('\n'+cn[1])}

  ,DefaultClause:
    function(m,cn){
      return 'default: '+indent('\n'+cn[0])}

  ,ThrowStatement:
    function(m,cn){return 'throw '+cn[0]+EOS()}

  ,TryStatement: // TryTok S? Block S? (Catch S? Finally? / Finally)
    function(m,cn){return 'try '+cn.join('\n')}

  ,DebuggerStatement:
    function(){return 'debugger'+EOS}

  ,VariableDeclaration: // cn[0] = Identifier, cn[1] = optional AssignmentExpr
    function(m,cn){
      assert(cn.length<3,'no extra children')
      if(cn.length==2)return cn[0]+OP('=')+cn[1]
      else return cn[0]}



  /******** Expressions ********/

  ,Expr:
    function(m,cn){return cn.join(COMMA())}

  // all of the *NoIn rules are kind of annoying, we DRY them all at once in a loop below

  ,AssignmentExpr:
    function(m,cn){
      if(cn.length==3) return cn[0]+OP(cn[1])+cn[2]
      else return cn[0]}

  ,AssignmentOperator:itself

  ,ConditionalExpr:
    function(m,cn){
      if(cn.length==3) return cn[0]+OP('?')+cn[1]+OP(':')+cn[2]
      else return cn[0]}

  // LogicalOrExpr... all these binary operators are very similar, differing only in the operator, so we handle them in a loop below as well.

  ,EqualityOp:itself
  ,RelationalOp:itself
  ,ShiftOp:itself
  ,AdditiveOp:itself
  ,MultiplicativeOp:itself

  ,UnaryExpr:transparent
  // the child of UnaryExpr is either PostfixExpr or one of the prefix operators DeleteExpr, VoidExpr, etc, handled below.

  ,PostfixExpr:transparent
  ,LeftHandSideExpr:transparent

  // we use the ECMAScript_streamable.peg definition of LeftHandSideExpr, which is easier to work with
  ,NewTok:function(){return 'new '}

  ,Arguments:
    function(m,cn){return '('+(cn[0]||'')+')'}

  ,ArgumentList:
    function(m,cn){return cn.join(COMMA())}

  ,BracketAccessor:
    function(m,cn){return '['+cn[0]+']'}

  ,DotAccessor:
    function(m,cn){return '.'+cn[0]}

  ,PrimaryExpr:
    function(m,cn){
      // TODO: add parens only when needed
      if(m.text().charAt()=='(')return '('+cn[0]+')'
      else return cn[0]}

  // an ArrayLiteral is either:
  // empty (no child nodes)
  // contains an elision or an ElementList without an elision at the end (one child)
  // or contains an ElementList followed by a literal comma followed by an Elision
  ,ArrayLiteral:
    function(m,cn){
      switch(cn.length){
        case 0:return '[]' // empty
        case 1:return '['+cn[0]+']' // contains ElementList or Elision
        case 2:return '['+cn[0]+COMMA()+cn[1]+']' // ElementList followed by literal comma followed by Elision
        default:assert(0,'unexpected number of children')}}

  // Elision? S? AssignmentExpr (S? "," Elision? S? AssignmentExpr)*
  ,ElementList:
    function(m,cn){var i,l,needs_comma=false,is_elision,ret=[]
      for(i=0,l=cn.length;i<l;i++){
        is_elision = /^(, ?)*$/.test(cn[i])
        if(needs_comma)ret.push(COMMA())
        ret.push(cn[i])
        if(!is_elision)needs_comma=true}
      return ret.join('')}

  // an Elision in an ArrayLiteral is a string of commas (and whitespace)
  // here we just strip any extra whitespace from the list
  ,Elision:
    function(m){return m.text().replace(/[^,]*,/g,COMMA())}

  ,ObjectLiteral:
    function(m,cn){return '{'+cn[0]+'}'}

  ,PropertyNameAndValueList:
    function(m,cn){return cn.join(
      opts.object_literal_comma_first?'\n,':',\n')}

  ,PropertyAssignment:
    function(m,cn){
      if(/^[gs]et\s/.test(m.text()))throw new Error('TODO: handle getters and setters here')
      return cn[0]+':'+cn[1]}

  ,PropertyName:itself
  ,PropertySetParameterList:itself

  ,Literal:itself

  ,Comment:itself

  ,Identifier:itself
  ,IdentifierName:itself
  }

 function EOS(){
  return opts.semicolons?';':''}

 function COMMA(){
  return opts.space_after_comma?', ':','}

 function OP(op){
  return opts.space_around_operators?' '+op+' ':op}

 function ENDBRACE(){
  return opts.newline_before_closing_brace?'\n}':'}'}

 function indent(s){
  if(!opts.indentation)return s
  return s.replace(/\n/g,'\n'+spaces)}

 function repeat(s,n){return new Array(n+1).join(s)}

 function itself(m,cn){return m.text()}
 function transparent(m,cn){return cn.join('')}

 // binary ops of the form: expr ( op expr )*
 ;
 [['LogicalOrExpr','||']
 ,['LogicalAndExpr','&&']
 ,['BitwiseOrExpr','|']
 ,['BitwiseXOrExpr','^']
 ,['BitwiseAndExpr','&']
 ].forEach(function(a){var rule=a[0],op=a[1]
   cbs[rule]=function(m,cn){
     return cn.join(OP(op))}})

 // binary op exprs that can take different operators:
 ;
 ['EqualityExpr'
 ,'RelationalExpr'
 ,'ShiftExpr'
 ,'AdditiveExpr'
 ,'MultiplicativeExpr'
 ].forEach(function(rule){
   cbs[rule]=function(m,cn){var ret=[],i
     for(i=0;i<cn.length;i++){
       if(i%2) ret.push(OP(cn[i]))
       else    ret.push(cn[i])}
     return ret.join('')}})

 // prefix operators
 ;
 [['DeleteExpr','delete ']
 ,['VoidExpr','void ']
 ,['TypeofExpr','typeof ']
 ,['PreIncrementExpr','++']
 ,['PreDecrementExpr','--']
 ,['UnaryPlusExpr','+']
 ,['UnaryMinusExpr','-']
 ,['BitwiseNotExpr','~']
 ,['LogicalNotExpr','!']
 ].forEach(function(a){var rule=a[0],prefix=a[1]
   cbs[rule]=function(m,cn){
     return prefix+cn[0]}})

 // *NoIn rules
 ;
 ['VariableDeclarationListNoIn'
 ,'VariableDeclarationNoIn'
 ,'ExprNoIn'
 ,'AssignmentExprNoIn'
 ,'ConditionalExprNoIn'
 ,'LogicalOrExprNoIn'
 ,'LogicalAndExprNoIn'
 ,'BitwiseOrExprNoIn'
 ,'BitwiseXOrExprNoIn'
 ,'BitwiseAndExprNoIn'
 ,'EqualityExprNoIn'
 ,'RelationalExprNoIn'
 ,'RelationalOpNoIn'
 ].forEach(function(rule){
   if(cbs[rule])return // don't clobber if handled
   else cbs[rule]=cbs[rule.slice(0,-4)]})


 // process it
 treeWalker(cbs,res)

 // regular output:
 //return out

 // the rest is for testing and debugging, comment out the normal return statement above to see the verbose debugging output

 var warnings,trace,p

 trace=[]

 // wrap each callback to add itself to the trace
 for(p in cbs){
  cbs[p]=(function(cb,p){
    return function(m,cn){var retval
      retval=cb(m,cn)
      trace.push(p+' '+retval)
      return retval}})
    (cbs[p],p)}

 warnings=treeWalker(cbs,res)

 // there are some nodes in the parse tree we just don't care about, so let's hide them
 hide=
  ['IdentifierStart'
  ,'IdentifierPart'
  ,'UnicodeLetter'
  ,'S','WhiteSpace'
  ,'anonymous'
  ]

 // if you want to see everything:
 //hide=[]

 // testing output:
 return 'input:\n'+s
      + '\n\noutput:\n'+out
      + '\n\nwarnings:\n'+warnings.join('\n')
      + '\n\ntrace:\n'+trace.join('\n')
      + '\n\nparse tree:\n'+showResult(res,{hide:hide})}
