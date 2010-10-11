// compose :: Context, [String] → String

// Each compose function takes a Context c carrying information about
// the surrounding context in which the node appears, and an array of
// strings ss which it must combine and return into the final result.

var compose=

{Program:compose_program_elements
,Block:compose_program_elements

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

,ExpressionStatement:function(c,ss){return ss[0]}

,CallExpression:function(c,ss){return ss[0]+ss[1]} // TODO: add options for whitespace between callee and arguments

,Arguments:function(c,ss){
  return '('
       + ss.join(c.space_after_comma?', ':',')
       + ')'}

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

,Literal:function(kind,value){return function(c,ss){
  switch(kind){
   case 'string':return compose_string(c,value)
   case 'number':return compose_number(c,value)
   case 'regexp':return compose_regexp(c,value)
   default: throw new Error('unhandled literal kind: '+kind)}}}

}

function compose_program_elements(c,ss){var line_sep
 line_sep='\n'+c.indentation
 // this actually isn't correct either, because some "program elements" are function declarations, they are not all statements, and should not all have semicolons even in semicolons=all mode
 // The semicolons should be added in the statements' individual compose functions.
 if(c.semicolons=='all')return ss.map(function(s){return s+';'}).join(line_sep)
 throw new Error('XXX TODO: implement other semicolon styles')}

function compose_string(c,val){var quote_char
 quote_char=c.string_quote_char||c.string_quote_char_preference
 assert(quote_char=='single'||quote_char=='double','known string quote preference')
 // quote_string_* are declared in ../deps/util.js
 return {single:quote_string_single,double:quote_string_double}[quote_char](val)}

function compose_number(c,n){var str,ret,sign,radix
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
 return ret}

function compose_regexp(c,val){
    return "/" + val.body + "/"
    + (val.flags.global ? 'g' : '')
    + (val.flags.ignore_case ? 'i' : '')
    + (val.flags.multiline ? 'm' : '');
}
