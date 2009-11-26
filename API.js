/* test() attempts to parse a string against a particular p_ function, and returns true iff it succeeds consuming the entire string. */

function test(p_,str){
 var s=new State(str)
 return (p_(s) && s.str()=='')}

/* tree() attempts a parse, and returns either [true, tree], where tree is a parse tree of a successful parse, or [false, s], where s is the result table after a failed parse. */

function tree(p_,str){
 var s=new State(str)
 if(p_(s) && s.str()=='') return [true, buildTree(s)]
 return [false, s]}

function explainParseFailure(s){
 return pp(buildFailTree(s[1]))}

function createParserContext(peg,prefix){var ret
 ,n2_body=getFile('_n2')
 ,n2_ast=parseTMProg(n2_body)
 ,peg_tree=tree(p_PEG_RuleSet,peg)
 if(peg_tree[0]==false) return "no parse"
 ret=applyTMProg(n2_ast,"{prefix:'"+prefix+"'}",peg_tree[1],peg,'match_code')
 return ret}

function treeCtx(p_name,str,ctx){var
 code='(function(str){\n'+ctx+'\n'+'return tree('+p_name+',str);}(str)'
 return code}

/* summarize() parses a PEG and makes some human-readable remarks about it.  This will borrow much of the TMProg used for codegen and the re code that does cycle detection, etc, but none of that is performant enough to be used in a live feedback currently anyway on a grammar of even moderate size.

Any desired start token may be passed as the second parameter and the summary will cover that rule and its dependencies. */

function summarize(peg,start){
 var pt=tree(p_PEG_RuleSet,peg)
   , prog=parseTMProg(getFile('PEG_codegen')),depT,missing
 if(pt[0]){
  depT=applyTMProg(prog,'{}',pt[1],peg,'depTable')
  missing=start?missingDependenciesOf(depT,start)
               :missingDependencies(depT)
  return "missing dependencies:\n"
       + pp(missing[0])
       + "\n\nunused:\n"
       + pp(missing[1])
       + "\n\ndependency table:\n"
       + pp(depT)}
 else{
  return explainParseFailure(pt)}}

/* Simple PEG syntax check with explanation on failure */
function syntax(peg){
 var pt=tree(p_PEG_RuleSet,peg)
 if(pt[0]){
  return true}
 else{
  return explainParseFailure(pt)}}

/* Given a PEG, return an output table which includes re objects and parser template functions for each rule. */

function codegenTable(peg,prefix){
 var pt=tree(p_PEG_RuleSet,peg)
 return codegenTableTree(peg,pt,prefix)}

function codegenTableTree(peg,tree,prefix){
 var prog=parseTMProg(getFile('PEG_codegen'))
 return applyTMProg(prog,"{prefix:'"+prefix+"'}",tree,peg,'codegenTable')}

function PEG_summarize(s,hide){var pt,d,x
 s=stripComments(s)
 d=new Date
 pt=p_PEG_v5_RuleSet(s)
 if(!pt[0])return explainParseFailure(pt)
 pt=pt[1]
 PEG_summary(pt)
 x=pt.summary()
 return 'missing: '+x[0]
      + '\nunused: '+x[1]}

function PEG_summarize_tal(s){var pt,hide
 pt=p_PEG_v5_RuleSet(s)[1]
 hide=['LB','S','IdentStartChar','IdentChar']
 PEG_summary(pt)
 return showPTNodeTreeAttrs(pt,hide,['nm','direct_dependencies','summary','deps'])}