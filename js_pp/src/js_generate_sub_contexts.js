// create_initial_context :: Options → Context

function create_initial_context(opts){var ctx,copied
 ctx={min_prec:19
     ,indentation:''
     }
 switch(opts.string_quote_style){
  case 'single': ctx.string_quote_char='single';break
  case 'double': ctx.string_quote_char='double';break
  case 'shorter-or-single': ctx.string_quote_char_preference='single';break
  case 'shorter-or-double': ctx.string_quote_char_preference='double';break
  default: throw new Error('bad option string_quote_style: '+opts.string_quote_style)}
 switch(opts.semicolons){
  case 'all': ctx.semicolons='all';break
  default: throw new Error('unimplemented semicolon option: '+opts.semicolons)}
 copied=['space_before_if_test'
        ,'space_inside_if_test_parens'
        ,'space_after_single_line_if_test'
        ,'spaces_inside_parens'
        ,'space_around_operators'
        ,'number_radix_preference'
        ,'number_use_exponential_notation'
        ,'homogenize_arrays'
        ,'space_before_for_semicolon'
        ,'space_after_for_semicolon'
        ,'space_before_for_paren'
        ,'space_around_assign'
        ,'space_before_function_call_arguments'
        ,'space_inside_function_call_parens'
        ,'space_after_comma'
        ,'array_use_elisions'
        ]
 copied.forEach(function(p){ctx[p]=opts[p]})
 return ctx}

// JavaScript operator precedence:

// 1  bracket accessors, dot accessors
// 2  new with arguments, function call
// 3  new without arguments
// 4  postincrement, postdecrement
// 5  delete, void, typeof, preincrement, predecrement, unary plus, unary minus, bitwise not, logical not
//    Binary operators:
// 6  Multiplicative (*, /)
// 7  Additive (+, -)
// 8  Shift
// 9  Relational (<, >, <=, >=, instanceof, in)
// 10 Equality
// 11 BitwiseAnd
// 12 BitwiseXOr
// 13 BitwiseOr
// 14 LogicalAnd
// 15 LogicalOr
// 16 ternary ≔ LogicalOrExpr ? AssignExpr : AssignExpr
// 17 assignment operators
// 18 comma operator
//    Other
// 19 statement separators (newlines, semicolons)

// generate_sub_contexts :: Formattable × Context → [Context]

// Most of these use a helper function h(), declared below, which
// copies the input context and modifies the copies.  The arguments
// to h() are: the initial context, the number of copies to create,
// and up to n modification objects which will overwrite properties
// in the corresponding copies.  If n is greater than the number of
// provided objects, the last object will be used repeatedly.

var generate_sub_contexts=

{Program:gsc_program_elements

,BlockStatement:gsc_program_elements

,IfStatement:function(f,c){
  // IfStatement children: test, consequent, (opt) alternate
  return h(c,f.cn.length
          ,{min_prec:18}
          ,{min_prec:19,inner_indentation:c.indentation+' '}
          ,{min_prec:19,inner_indentation:c.indentation+' '})}

,ForStatement:function(f,c){
  // ForStatement children: init, test, update, body
  return h(c,4
          ,{min_prec:18}
          ,{min_prec:18}
          ,{min_prec:18}
          ,{min_prec:19})}

,ForInStatement:function(f,c){
  return h(c,3
          ,{min_prec:0} // this doesn't quite capture what is intended here, which is that only an identifier, with optional "var" prefix, is allowed here.
          ,{min_prec:18}
          ,{min_prec:19,inner_indentation:c.indentation+' '})} // will be used if it is a BlockStatement

,WhileStatement:function(f,c){
  return h(c,2
          ,{min_prec:18}
          ,{min_prec:19})}

,DoWhileStatement:function(f,c){
  return h(c,2
          ,{min_prec:19}
          ,{min_prec:18})}

,ThrowStatement:function(f,c){
  return h(c,1
          ,{min_prec:17})}

,TryStatement:function(f,c){
  return h(c,3
          ,{min_prec:19,inner_indentation:c.indentation+' '}
          ,{min_prec:19,inner_indentation:c.indentation+' '}
          ,{min_prec:19,inner_indentation:c.indentation+' '})}

,CatchClause:function(f,c){
  return h(c,2
          ,{min_prec:0}
          ,{min_prec:19})}

,ExpressionStatement:function(f,c){
  return h(c,1
          ,{min_prec:18
           ,in_statement_context:true})}

,ReturnStatement:function(f,c){
  return h(c,1
          ,{min_prec:18})}

,BreakStatement:function(f,c){return h(c,1)}

,ContinueStatement:function(f,c){return h(c,1)}

,SwitchStatement:function(f,c){
  return h(c,f.cn.length
          ,{min_prec:18}
          ,{min_prec:19
           ,indentation:c.indentation+' '})}

,SwitchCase:function(f,c){
  return h(c,f.cn.length
          ,{min_prec:18}
          ,{min_prec:19})}

,FunctionDeclaration:function(f,c){var ret
  ret=h(c,f.cn.length)
  // Here the BlockStatement is the child, we actually want to indent the children of the BlockStatement, but not the BlockStatement itself (the difference is visible only on the opening and closing braces of the BlockStatement if the options are such that they appear on their own lines.
  // inner_indentation is handled by BlockStatement instead of doing it's own normal indentation
  ret[ret.length-1].inner_indentation=c.indentation+' ' // TODO: options
  return ret}

,FunctionExpression:function(f,c){var ret
  ret=h(c,f.cn.length)
  ret[ret.length-1].inner_indentation=c.indentation+' '
  return ret}

,VariableStatement:function(f,c){
  return h(c,f.cn.length)}

,VariableDeclaration:function(f,c){
  return h(c,f.cn.length)}

,VariableDeclarator:function(f,c){
  return h(c,2
          ,undefined
          ,{min_prec:17})}

,Arguments:function(f,c){
  return h(c,f.cn.length
          ,{min_prec:17})}

,SequenceExpression:function(f,c){
  return h(c,f.cn.length
          ,{min_prec:18,assoc:'left'}
          ,{min_prec:17})}

,AssignmentExpression:function(f,c){
  return h(c,2
          ,{min_prec:17}
          ,{min_prec:17,assoc:'right'})}

,BinaryExpression:function(f,c){
  assert(f.assoc=='left','all binary ops left-associative')
  return h(c,2
          ,{min_prec:f.prec,assoc:'left'}
          ,{min_prec:f.prec})}

,UnaryExpression:function(f,c){
  return h(c,1
          ,{min_prec:5})}

,UpdateExpression:function(f,c){
  return h(c,1
          ,{min_prec:f.prec})}

,ConditionalExpression:function(f,c){
  return h(c,3
          ,{min_prec:15,assoc:'left'}
          ,{min_prec:17}
          ,{min_prec:17})}

,ArrayExpression:function(f,c){var string_quote_char,i,l,dbl_penalty,sgl_penalty,context_update
  dbl_penalty=sgl_penalty=0
  if(c.homogenize_arrays && !c.string_quote_char){
   // testing some ideas by homogenizing string quote characters in arrays, see doc/overview
   for(i=0,l=f.cn.length;i<l;i++){
    if(f.cn[i].quote_char_preference=='double') sgl_penalty+=f.cn[i].quote_char_penalty
    if(f.cn[i].quote_char_preference=='single') dbl_penalty+=f.cn[i].quote_char_penalty}
   string_quote_char = dbl_penalty > sgl_penalty ? 'single'
                     : sgl_penalty < dbl_penalty ? 'double'
                     : c.string_quote_char_preference}
  context_update={min_prec:17}
  if(string_quote_char)context_update.string_quote_char=string_quote_char
  return h(c,f.cn.length,context_update)}

,ObjectExpression:function(f,c){
  return h(c,f.cn.length
          ,{min_prec:18})} // actually set by PropertyAssignment, so shouldn't matter

,PropertyAssignment:function(f,c){
  return h(c,2
          ,{min_prec:0} // only bare property names and string literals allowed
          ,{min_prec:18})}

,CallExpression:function(f,c){
  return h(c,2
          ,{min_prec:2}
          ,{min_prec:17})}

,NewExpression:function(f,c){
  return h(c,2
          ,{min_prec:2} // XXX can contain new with arguments, but can't contain function call
          ,{min_prec:17})} // shouldn't matter (Arguments will set this)

,MemberExpression:function(computed){return function(f,c){
  return h(c,2
          ,{min_prec:1}
          ,computed?{min_prec:18} // everything up to and including comma operator can appear in bracket accessor
                   :{min_prec:1})}}

}

// this is intended to be in a module (with the other js_pp files), so the 'h' helper will not be in the global scope.
// h :: Context, Integer, [update_object] → [Context]
// The provided context is copied as many times as necessary.
// Each update or diff object provided is used to replace properties of the context at the corresponding position.
// If there are more context objects requested than diff objects provided, the last diff object is reused.
// This is convenient for expressions with a variable number of sub-expressions that should be formatted alike.
// When a context is updated it is shallow-copied first.
// Thus it is safe to include multiple references to the same context object in the output array.
function h(c,n,diff /* ... */){var i,p,c2,ret
 ret=[]
 for(i=0;i<n;i++){
  c2=null
  diff=arguments[2+i]||diff
  if(diff) for(p in diff){
   c2=c2||copy(c)
   c2[p]=diff[p]}
  ret[i]=c2||c}
 return ret}

function copy(o){var r={},p;for(p in o)r[p]=o[p];return r}

// handles programs, blocks, function bodies
// all are sequences of statements and/or function declarations
function gsc_program_elements(f,c){
 return h(c,f.cn.length
         ,{min_prec:20
          ,indentation:c.inner_indentation||c.indentation})}
