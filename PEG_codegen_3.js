/*
function codegen_v3(start,prefix){return js_ast_serialize(
 jfun(prefix+start,['s'],
  [jvar(['st'])]))}
*/

function codegen_v3(start,prefix,fs){
 return 'function '+prefix+start+'(str){'
 + '\n var s=new State(str)'
 + '\n '+fs.join('\n ')
 + '\n if('+start+'(s) && s.pos==str.length) return [true, buildTree(s)]'
 + '\n return [false, s]'
 + '\n}'}