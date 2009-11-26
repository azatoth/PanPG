function ECMAScript_peg_parse_tree(){var
 peg=getFile('ECMAScript.peg')
 ,res=tree(p_PEG_RuleSet,peg)
 if(!res[0]) return explainParseFailure(res)
 return showTree(tree(p_PEG_RuleSet,peg)[1])}

function ECMAScript_peg_tests(){var ret=[]
 function test(s,p_){var
  res=tree(p_,s)
  if(!res[0]){ret.push(explainParseFailure(res));return false}
  ret.push('PASS');return true}
 [['!(X)',p_PEG_NegLookahead]
 ].every(function(a){return test.apply(null,a)})
 return ret.join('\n')}

function ECMAScript_lex(){var
 body=getFile('API.js')
 ,peg=getFile('ECMAScript.peg')
 ,ctx=createParserContext(peg,'p_ES_')
 ,res=treeCtx('p_InputElementDiv',body,ctx)
 return pp([res+'\n\n\n',ctx,body])}

// this is a hack until we can regen the PEG parser to handle comments, I'm just not going to leave all comments out of the ECMAScript grammar in the meantime, hence...
function stripComments(s)
 s.split('\n').filter(function(l) l[0]!==";"&&l.length).join('\n')

function ECMAScript_unified_PEGinfo(){
 var x=getFile('ECMAScript_unified.peg')
 x = stripComments(x)
 return pp(summarize(x,'Program'))}

function ECMAScript_unified_PEG_syntax(){
 var x=getFile('ECMAScript_unified.peg')
 x = stripComments(x)
 return pp(syntax(x))}

function ECMAScript_Program_tests(){
 var x,pt
 x='f()'
 pt=tree(p_ES5_Program,x)
 return pt}