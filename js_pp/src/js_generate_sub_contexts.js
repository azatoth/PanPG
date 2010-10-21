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
// 16 ternary ≔ OrExpr ? AssignExpr : AssignExpr
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
          ,{min_prec:20}
          ,{min_prec:20})}

,ForStatement:function(f,c){
  // ForStatement children: init, test, update, body
  return h(c,f.cn.length
          ,{min_prec:18}
          ,{min_prec:18}
          ,{min_prec:18}
          ,{min_prec:20})}

,ExpressionStatement:function(f,c){
  return h(c,1
  ,{min_prec:18})}

,ReturnStatement:function(f,c){
  return h(c,1
  ,{min_prec:18})}

,FunctionDeclaration:function(f,c){
  return h(c,3
          ,{}
          ,{}
          ,{indentation:c.indentation+' '})}

,VariableStatement:function(f,c){
  return h(c,f.cn.length
          ,{})}

,VariableDeclaration:function(f,c){
  return h(c,f.cn.length
          ,{})}

,VariableDeclarator:function(f,c){
  return h(c,2
          ,{}
          ,{min_prec:17})}

,CallExpression:function(f,c){
  return h(c,2
          ,{min_prec:2}
          ,{min_prec:17})}

,Arguments:function(f,c){
  return h(c,f.cn.length
  ,{min_prec:17})}

,AssignmentExpression:function(f,c){
  return h(c,2
          ,{min_prec:17}
          ,{min_prec:17,assoc:'right'})}

,BinaryExpression:function(f,c){
  assert(f.assoc=='left','all binary ops left-associative')
  return h(c,f.cn.length
          ,{min_prec:f.prec,assoc:'left'}
          ,{min_prec:f.prec})}

,UpdateExpression:function(f,c){
  return h(c,1
          ,{min_prec:f.prec})}

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
function gsc_program_elements(f,c){var c1,i,l,ret
 ret=[]
 c1=copy(c)
 c1.min_prec=20
 for(i=0,l=f.cn.length;i<l;i++) ret.push(c1)
 return ret}
