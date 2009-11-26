/* prog is the output of parseTMProg()
 * opts is a string that can be eval'd to create an object which will be available to code generation functions
 * tree is a parse tree produced by tree() in the PEG API.
 * string is the text from which tree() was parsed.
 * retattr is the name of an attribute on the root node that will be returned after running the program.

All of this is a bit messy, since the parse tree specifics are bleeding into the TMProg API, e.g. the string parameter.
 */

function applyTMProg(prog,opts,tree,string,retattr){
 _get_match.string=string
 try{mapSelectors(build_models(opts,prog),tree)}catch(e){
  throw e
  return log.get()}
 if(retattr) return tree[retattr]()
 return tree
 }

/* just mark the nodes that would be acted on by a TMProg */
/* Should probably be called markTree or so, but likely to be replaced by something else anyway */
function markTMProg(prog,tree){var mss=[]
 prog.forEach(function(ruleset){var ms=[]
  ruleset.forEach(function(rule){var m={}
   m.m=rule.sel.m
   m.distinguishedPath=rule.sel.distinguishedPath
   m.f=markNode
   ms.push(m)})
  mss.push(ms)})
 return showTree(mapSelectors(mss,tree))}

function showSelTree(s,t){var
 m=modelStructSel(s);m.f=markNode
 return showTree(mapSelectors([[m]],t))}