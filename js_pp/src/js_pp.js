// TODO:
//
// Handle the other 90% of AST node types.
// correct string quoting (in util.js)
// The compose functions Stringⁿ → String will then be extension points; the caller can provide their own for any node types.

// format :: Options × String → String
function format(opts,s){var ast,defaults
 opts=opts||{}

 // semicolons, indentation, newline_before_closing_brace, space_after_comma, space_around_operators, space_inside_parens, number_radix, object_literal_comma_first, blank_before_function, space_inside_if_test_parens, space_before_if_test, space_after_single_line_if_test, control_statement_braces, control_statement_empty, string_linebreak_style, string_charset
 defaults=
  {semicolons: 'all'                          // 'after-all', 'separators', 'only-required', 'before-dangerous'
  ,indentation: 2                             // TODO: support tabs
  ,newline_before_closing_brace: true
  ,space_after_comma: true
  ,space_around_operators: true               // TODO: add option to show precedence, e.g: 'x = a*b + b*c' but 'x=a+b;'
  ,space_inside_parens: false                 // where parens are used for grouping (not as syntax in control structures)
  ,number_radix_preference: 10                // 8, 10, 16
  ,number_use_exponential_notation: 'never'   // 'never', 0..N which is cutoff limit, 1 is essentially when shorter
  ,object_literal_comma_first: false
  ,blank_before_function: true
  ,space_inside_if_test_parens: false         // 'if ( x )' or 'if (x)'
  ,space_before_if_test: true                 // 'if (' or 'if('
  ,space_after_single_line_if_test: true      // 'if(...) foo()' or 'if(...)foo()'
  ,control_statement_braces: 'preserve'       // 'preserve', 'braces', 'one-statement-only' [1] [2]
  ,control_statement_empty: 'empty-statement' // 'empty-statement', 'empty-braces' [3]
  ,string_linebreak_style: 'backslash-n'      // 'backslash-n', 'line-continuation', 'plus-operator'
  ,string_charset: 'unicode'                  // 'unicode', 'ascii' [4]
  ,string_quote_style: 'shorter-or-double'    // 'single', 'double', 'shorter-or-single', 'shorter-or-double' [5]
  ,homogenize_arrays: false
  }
 opts=extend(defaults,opts)

 // [1] 'preserve' preserves braces if they are in the input, leaving "if(x)y" without braces and "if(x){y}" with braces.
 //     'braces' always uses a block statement, even with only one statement inside.
 //     'one-statement-only' will drop braces whenever there is only one statement in the body of the if statement.
 // [2] The "control statements" include the if statement and the iteration statements: for, for-in, while, do-while.
 // [3] If a control statement has an empty body, it can be written as an empty statement e.g. "while(x());", or as an empty block e.g. "while(x()){}".
 // [4] 'ascii' uses \uHHHH escapes for all non-ASCII characters, while 'unicode' allows all Unicode characters directly, using escapes only for newlines, quotation marks, etc.
 // [5] 'single' and 'double' always use the specied kind of quote, escaping string content as necessary, while 'shorter-or-' variants prefer one kind of quote but use the other if it makes the escaped string literal shorter (i.e. when the string value itself contains quotation marks).

 // parse the input
 ast=js_ast(s)

 if(ast.type=="ParseError") return ast.error

 return print(opts,ast)}


// print :: Options × AST → String
function print(opts,ast){
 return go(create_initial_context(opts),generate_formattable(opts)(ast))
 // go :: Context × Formattable → String
 function go(ctx,f){var sub_contexts,sub_strings,i,l
   sub_strings=[]
  if(f.cn && f.cn.length){
   sub_contexts=f.generate_sub_contexts(f,ctx)
   for(i=0,l=f.cn.length;i<l;i++) sub_strings[i]=go(sub_contexts[i],f.cn[i])}
  return f.compose(ctx,sub_strings)}}


// generate_formattable :: Options → AST → Formattable
function generate_formattable(opts){return function self(ast){var f,cn,str1,str2,str3

 // `f` is the formattable we are constructing and will return
 // `cn` or "children" is the child formattable objects, constructed by mapping
 //      `self` (this function) over the AST child nodes (according to the node
 //      type, handled below)

 // Some AST nodes on which we recurse can contain some null child elements,
 // which we handle by returning a formattable that encodes the empty string.

 if(ast===null){
  return {cn:[]
         ,compose:function(){return ''}
         ,min_chars:0
         ,min_width:0
         ,n_statements:0
         }}


 //if(!ast.type in generate_sub_contexts)throw new Error('AST node type '+ast.type+' generate_sub_contexts not implemented')
 //if(!ast.type in compose)throw new Error('AST node type '+ast.type+' compose not implemented')


 f={compose:compose[ast.type]
   ,generate_sub_contexts:generate_sub_contexts[ast.type]
   }


 switch(ast.type){

 case 'Program':
  cn=ast.elements;break

 case 'BlockStatement':
  cn=ast.body;break

 case 'ExpressionStatement':
  cn=[ast.expression];break

 case 'IfStatement':
  cn=[ast.test,ast.consequent,ast.alternate];break

 case 'LabelledStatement':
  cn=[ast.label,ast.body];break

 case 'BreakStatement':
 case 'ContinueStatement':
  cn=[ast.label];break

 case 'WithStatement':
  cn=[ast.object,ast.body];break

 case 'SwitchStatement':
  cn=[ast.test].concat(ast.cases);break

 case 'ReturnStatement':
 case 'ThrowStatement':
  cn=[ast.argument];break

 case 'TryStatement':
  cn=[ast.block,ast.handler,ast.finalizer];break

 case 'WhileStatement':
  cn=[ast.test,ast.body];break

 case 'DoWhileStatement':
  cn=[ast.body,ast.test];break

 case 'ForStatement':
  cn=[ast.init,ast.test,ast.update,ast.body];break

 case 'VariableDeclaration':
  cn=ast.declarations;break

 case 'ForInStatement':
  cn=[ast.left,ast.right,ast.body]

 case 'DebuggerStatement':
 case 'Literal':
 case 'Identifier':
 case 'ThisExpression':
  break

 case 'FunctionDeclaration':
  cn=[ast.id].concat(ast.params).concat([ast.body]);break

 case 'VariableStatement':
  cn=ast.declarations;break

 case 'VariableDeclarator':
  cn=[ast.id,ast.init];break
 case 'ArrayExpression':
  cn=ast.elements;break

 case 'ObjectExpression':
  cn=ast.properties.map(function(p){p=copy(p);p.type='PropertyAssignment';return p});break

 case 'PropertyAssignment': // doesn't occur in the AST, but we create this above
  cn=[ast.key,ast.value];break

 // TODO: getters and setters contain FunctionExpressions but these need to be formatted differently from normal ones

 case 'FunctionExpression':
  cn=[ast.id].concat(ast.params).concat([ast.body]);break

 case 'SequenceExpression':
  cn=ast.expressions;break

 case 'UpdateExpression':
 case 'UnaryExpression':
  cn=[ast.argument];break

 case 'AssignmentExpression': // Perhaps handle the same as BinaryExpression?
 case 'BinaryExpression':
  cn=[ast.left,ast.right];break

 case 'ConditionalExpression':
  cn=[ast.test,ast.consequent,ast.alternate];break

 case 'MemberExpression':
  cn=[ast.object,ast.property];break

 case 'NewExpression':
  cn=[ast.constructor,ast.arguments];break

 case 'CallExpression':
  cn=[ast.callee,ast.arguments];break

 case 'Arguments':
  cn=ast.elements;break

 case 'SwitchCase':
  cn=[ast.test,ast.consequent];break

 case 'CatchClause':
  cn=[ast.param,ast.body];break

 default:
  throw new Error('unhandled AST node type '+ast.type+' ('+pp(ast)+')')}

 if(cn)cn=cn.map(self)

 switch(ast.type){

 case 'IfStatement':
  f.n_statements=1+sum(cn.slice(1).map(access('n_statements')));break

 case 'BinaryExpression':
  // The compose function for binary operators handles all the binary operators, so it needs
  // to be specialized with the actual operator and it's precedence and associativity.
  // All ECMAScript binary operators happen to be left-associative, otherwise we'd have a
  // binary_op_assoc table for these as well.
  f.assoc='left'
  f.prec=binary_op_prec[ast.operator]
  f.compose=f.compose(ast.operator,f.prec,f.assoc);break

 case 'Literal':
  switch(ast.kind){
  case 'number':
   str1=String(ast.value)
   f.min_chars=str1.length
   f.min_width=str1.length
   f.compose=compose_number(ast.value)
   break
  case 'string':
   str1=quote_string_single(ast.value)
   str2=quote_string_double(ast.value)
   f.min_chars=min([str1.length,str2.length])
   f.min_width=ast.value.length?3:2 // strings can be broken across lines, but need at least an opening quote, one character and a line continuation = 3 chars per line
   if(str1.length<str2.length)f.quote_char_preference='single'
   if(str1.length>str2.length)f.quote_char_preference='double'
   f.quote_char_penalty=Math.abs(str1.length-str2.length)
   f.single_quoted=str1
   f.double_quoted=str2
   f.compose=compose_string(f)
   break
  case 'regexp':
   f.min_chars=f.min_width=String(ast.value.body).length + String(ast.value.flags) + 2
   f.compose=compose_regexp(ast.value)
   break
  default:
   throw new Error('unhandled literal type: '+ast.kind)}
  break

 case 'Identifier':
  f.min_chars=ast.name.length
  f.min_width=ast.name.length
  f.compose=function(){return ast.name};break

 case 'ArrayExpression':
  // min length is brackets + commas + sum of min length of children
  f.min_chars=2+(cn.length?cn.length-1:0)+sum(cn.map(access('min_chars')));break}



 if(cn && f.min_chars==undefined) f.min_chars=sum(cn.map(access('min_chars')))
 if(cn && f.min_width==undefined) f.min_width=max(cn.map(access('min_width')))

 if(f.n_statements==undefined){
  f.n_statements=cn?sum(cn.map(access('n_statements')))
                   :0
  if(isStatement(ast))f.n_statements++}

 f.cn=cn

 assert(typeof f.compose=='function','formattable compose, on node '+pp(ast))
 assert(!f.cn || typeof f.generate_sub_contexts=='function','non-leaf formattable has generate_sub_contexts, on node '+pp(ast))
 assert(typeof f.n_statements=='number','formattable n_statements')
 /* ... */

 return f

 // copied from js_ast.js
 function isStatement(x){return x&&x.type&&x.type.slice(-9)=="Statement"}}}

// JavaScript operator precedence:

// 1  bracket accessors, dot accessors
// 2  new with arguments, function call
// 3  new without arguments
// 4  postincrement, postdecrement
// 5  delete, void, typeof, preincrement, predecrement, unary plus, unary minus, bitwise not, logical not
//    Binary operators:
// 6  Multiplicative
// 7  Additive (e + e, e - e)
// 8  Shift
// 9  Relational (<, >, <=, >=, instanceof, in)
// 10 Equality
// 11 BitwiseAnd
// 12 BitwiseXOr
// 13 BitwiseOr
// 14 LogicalAnd
// 15 LogicalOr
// 16 ternary ≔ OrExpr ? AssignExpr : AssignExpr
// 17 assignment operators
// 18 comma operator
//    Other
// 19 statement separators (newlines, semicolons)

var binary_op_prec=
{'*':6
,'/':6
,'+':7
,'-':7
,'<<':8
,'>>':8
,'>>>':8
,'<':9
,'>':9
,'<=':9
,'>=':9
,'instanceof':9
,'in':9
,'==':10
,'!=':10
,'===':10
,'!==':10
,'&':11
,'^':12
,'|':13
,'&&':14
,'||':15
}

function assert(x,msg){if(!x)throw new Error('assertion failed: '+msg)}
