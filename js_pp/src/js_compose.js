// compose :: Context, [String] → String

// Each compose function takes a Context c carrying information about
// the surrounding context in which the node appears, and an array of
// strings ss which it must combine and return into the final result.

var compose=

{Program:compose_program_elements

,BlockStatement:function(c,ss){
  return '{\n'
       + compose_program_elements(c,ss)
       + '\n}'}
,EmptyStatement:function(){
  return ''}

,IfStatement:function(c,ss){var ret
  return 'if'
       + (c.space_before_if_test?' ':'')
       + (c.space_inside_if_test_parens?'( ':'(')
       + ss[0]
       + (c.space_inside_if_test_parens?' )':')')
       + ' ' // TODO: handle blocks and single statements here
       + ss[1]
       + (ss[2] // is there an alternative branch?
          ?'else'+ss[2]
          :'')}

,ForStatement:function(c,ss){
  return 'for'
       + (c.space_before_for_paren?' ':'')
       + (c.space_inside_for_parens?'( ':'(')
       + ss[0]
       + (c.space_before_for_semicolon && ss[0] ?' ':'')
       + ';'
       + (c.space_after_for_semicolon && ss[0] && ss[1] ?' ':'')
       + ss[1]
       + (c.space_before_for_semicolon && ss[1] && ss[2] ?' ':'')
       + ';'
       + (c.space_after_for_semicolon && ss[2] ?' ':'')
       + ss[2]
       + (c.space_inside_for_parens?' )':')')
       + ' ' // TODO: handle blocks and single statements here
       + ss[3]}

,ForInStatement:function(c,ss){
  return 'for'
       + (c.space_before_for_paren?' ':'')
       + (c.space_inside_for_parens?'( ':'(')
       + ss[0]
       + ' in ' // needs an option (for minimization) to drop the second space when possible
       + ss[1]
       + (c.space_inside_for_parens?' )':')')
       + ' ' // TODO: handle blocks and single statements here
       + ss[2]}

,ExpressionStatement:function(c,ss){return c.indentation+ss[0]}

,ReturnStatement:function(c,ss){
    return c.indentation+ 'return' + ( ss[0] ? ' ' : '' ) + ss[0]}

,VariableStatement:function(c,ss){
  return c.indentation+'var '+ss.join()}

,VariableDeclaration:function(c,ss){
    return c.indentation+'var '+ss.join()}

,FunctionDeclaration:function(c,ss){
  return 'function '
       + ss[0]
       + '('  // TODO: add space options
       + ss[1]
       + ')'
       + ss[2]}

,VariableDeclarator:function(c,ss){
  return ss[0]
       + (ss[1]?'='+ss[1]:'')}

,Arguments:function(c,ss){
  return (c.space_inside_function_call_parens?'( ':'(')
       + ss.join(c.space_after_comma?', ':',')
       + (c.space_inside_function_call_parens?' )':')')}

,AssignmentExpression:function(c,ss){
  return c.indentation 
       + ss[0] 
       + (c.space_around_assign ? ' = ' : '=' )
       + ss[1]}

,UpdateExpression:function(operator,prefix,prec){return function(c,ss){
  if(prefix) return operator + ss[0]
  return ss[0] + operator}}

,BinaryExpression:function(op,prec,assoc){return function(c,ss){var parenthesize,parens
  parenthesize=prec>c.min_prec || prec==c.min_prec && assoc!=c.assoc
  parens=c.spaces_inside_parens?['( ',' )']:['(',')']
  return (parenthesize?parens[0]:'')
       + ss[0]
       + (c.space_around_operators?(' '+op+' '):op)
       + ss[1]
       + (parenthesize?parens[1]:'')}}

,ArrayExpression:function(c,ss){
  return '['
       + ss.join(',') // TODO: add options for spaces
       + ']'}

,MemberExpression:function(computed){return function(c,ss){
  if(computed) return ss[0]+'['+ss[1]+']'
  return ss[0]+'.'+ss[1]}}

,CallExpression:function(c,ss){
  return ss[0]
       + (c.space_before_function_call_arguments?' ':'')
       + ss[1]}

,NewExpression:function(c,ss){
  return 'new ' // TODO: option for minimization to lose this space when possible (e.g. "new(f().g)")
       + ss[0]
       + (c.space_before_function_call_arguments?' ':'') // TODO: these options should probably be different from the function call options
       + (c.space_inside_function_call_parens?'( ':'(') // TODO: when arguments are empty, and context allows it, add an option to drop parens for minimization
       + ss[1]
       + (c.space_inside_function_call_parens?' )':')')}

}

// To deal with line termination with semicolons, rather than add the same code to each statement's compose method, we replace each method here with a new function that calls the original function, then appends a semicolon if necessary.

// Some statements do not need a terminating semicolon, e.g. because the statement with which they end will already have a semicolon.
// This includes the iteration statements, `if` statements and a few others.
// Other than these, all *Statement nodes are handled the same.

var statements_not_followed_by_semicolon=
['ForStatement','ForInStatement'
,'WhileStatement','DoWhileStatement'
,'IfStatement'
,'WithStatement','LabelledStatement'
,'SwitchStatement','TryStatement'
,'BlockStatement']

for(var p in compose){
 if(statements_not_followed_by_semicolon.indexOf(p)>-1)continue
 if(p=='EmptyStatement')compose[p]=function(){return ';'}
 else if(p.slice(-9)=='Statement')compose[p]=add_semi_rules(compose[p])}

function add_semi_rules(f){
 return function(c,ss){
  if(c.semicolons=='all')return f(c,ss)+';'
  throw new Error('XXX TODO: implement other semicolon styles')}}

function compose_program_elements(c,ss){var line_sep
 line_sep='\n'+c.indentation
 return ss.join(line_sep)}

function compose_string(f){return function _compose_string(c){var quote_char
 quote_char=c.string_quote_char||f.quote_char_preference||c.string_quote_char_preference
 assert(quote_char=='single'||quote_char=='double','known string quote preference')
 return f[quote_char+'_quoted']}}

function compose_number(n){return function _compose_number(c){var str,ret,sign,radix
 radix=c.number_radix||c.number_radix_preference
 sign=n<0?'-':''
 n=Math.abs(n)
 str=n.toString(radix)
 switch(radix){
  case  8: ret='0'+str;break
  case 10: ret=str;break
  case 16: ret='0x'+str;break
  default: throw new Error('unhandled number radix: '+radix)}
 ret=sign+ret
 assert(+ret == n,"number formatting preserves value "+ret+" : "+n)
 return ret}}

function compose_regexp(regexp){return function(c){
  var flags = 
   (regexp.global ? 'g' : '')
   + (regexp.ignoreCase ? 'i' : '')
   + (regexp.multiline ? 'm' : '')
  return '/'+regexp.source+'/'+flags}}

function compose_boolean(bool){return function(c){
  return bool ? 'true' : 'false'}}
