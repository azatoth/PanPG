// TODO:
// everything

function format(s,opts){var ast,spaces,format_nodes
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

 function repeat(s,n){return Array(n+1).join(s)}

 // parse the input
 ast=js_ast(s)

 if(ast.type=="ParseError") return ast.error

 return ast

 // There are some subtleties in laying out code, e.g. if there is a rule that if statements should be on one line when below a certain length, then the formatting of an if statement depends not only on what it contains but also how deeply indented it is.
 // If there is also a rule that parallel structures should have parallel formatting, then the formatting of a set of if statements nearby may cause an individual one to be formatted differently than it otherwise would.
 // In the case of operators with different precedences, an expression may need to be parenthesized or not depending on where it appears.
 // So there are constraints passed both up and down the tree.
 // Some constraints are soft (e.g. break lines at 72 chars) and some are hard (identifiers, however long, can't be broken across lines).
 // In general, we can imagine a set of heuristics that specify desirable formatting outcomes, and a system that resolves conflicts between these outcomes in a reasonable way.

 // First we make a pass over the AST, calculating everything we can about nesting depth, and in general the "ideal" formatting of each node without regard to context.
 // In a second pass we can then evaluate constraints and perhaps use some weighted preferences to resolve conflicts.

 // Rather than clutter the existing AST with formatting values, we might want to construct a new structure.
 // The idea is that the new structure won't contain the node types as they appear in the AST, it will only contain whatever is needed to make formatting decisions and generate output.

 format_nodes=go(ast)

 function go(node){var cn
   switch(node.type){

   case 'Program':
     cn=node.elements.map(go)
     return 
   
   }}

}
