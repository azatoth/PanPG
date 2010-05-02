function assert(x,m){if(!x)throw new Error('assertion failed: '+m)}

function format(s,opts){var res,cbs,out,hide,state
 opts=opts||{}

 default_('semicolons',true)
 default_('indentation',2)
 default_('newline_before_closing_brace',true)
 default_('space_after_comma',true)
 default_('space_around_operators',true)

 function default_(k,v){if(opts[k]===undefined)opts[k]=v}

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
    function(m,cn){out=cn.join('')}

  ,FunctionDeclaration:
    function(m,cn){return 'function '+cn[0]+'('+(cn[1]||'')+'){\n'+(cn[2]||'')+'}'}

  ,FormalParameterList:
    function(m,cn){return cn.join(', ')}

  ,FunctionBody:
    function(m,cn){return cn.join('\n')}

  ,Statement:
    function(m,cn){return cn[0]}



  /******** Statements ********/

  ,Block: // children are Statements
    function(m,cn){return '{'+cn.join('')+'}'}

  ,VariableStatement: // children are VariableDeclarations
    function(m,cn){
      state.var_in_for=false
      return 'var '+cn.join(',')+EOS()}

  ,EmptyStatement: // a literal semicolon, ASI does not apply
    function(){return ';'}

  ,ExprStatement:
    function(m,cn){return cn[0]}

  ,IfStatement: // cn[0] = Expr, cn[1] = Statement, and if there was an else clause, cn[2] = Statement
    function(m,cn){
     if(cn.length==2) return 'if('+cn[0]+')'+cn[1]
     //assert(cn.length==3,'there is an else clause')
     return 'if('+cn[0]+') '+cn[1]+'\n'
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

  ,ThrowStatement:
    function(m,cn){return 'throw '+cn[0]+EOS()}

  ,TryStatement: // TryTok S? Block S? (Catch S? Finally? / Finally)
    function(m,cn){return 'try '+cn.join('\n')}

  ,DebuggerStatement:
    function(){return 'debugger'+EOS}

  ,VariableDeclaration: // cn[0] = Identifier, cn[1] = optional AssignmentExpr
    function(m,cn){
      if(cn[1])return cn[0]+'='+cn[1]
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

  ,BracketAccessor:
    function(m,cn){return '['+cn[0]+']'}

  ,DotAccessor:
    function(m,cn){return '.'+cn[0]}

  ,Identifier:
    // to pretty-print an identifier we just print it
    function(m,cn){return m.text()}
  }

 function EOS(){
  return opts.semicolons?';':''}

 function COMMA(){
  return opts.space_after_comma?', ':','}

 function OP(op){
  return opts.space_around_operators?' '+op+' ':op}

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
       else    ret.push(cn[i])}}})

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
      + '\n\nparse tree:\n'+showResult(res,{hide:hide})}
