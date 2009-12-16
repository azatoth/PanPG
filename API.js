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

/* summarize() parses a PEG and makes some human-readable remarks about it.

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