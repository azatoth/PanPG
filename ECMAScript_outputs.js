function ECMAScript_unified_tokens(){
 var r=[],x=
 // from PEGinfo()'s list of missing dependencies:
 ["FalseTok"
 ,"TrueTok"
 ,"NullTok"
 ,"BreakTok"
 ,"ContinueTok"
 ,"DebuggerTok"
 ,"InTok"
 ,"ElseTok"
 ,"InstanceOfTok"
 ,"DeleteTok"
 ,"FunctionTok"
 ,"NewTok"
 ,"ThisTok"
 ,"TypeofTok"
 ,"VoidTok"
 ,"IfTok"
 ,"DoTok"
 ,"WhileTok"
 ,"ForTok"
 ,"VarTok"
 ,"ReturnTok"
 ,"CaseTok"
 ,"DefaultTok"
 ,"SwitchTok"
 ,"ThrowTok"
 ,"CatchTok"
 ,"FinallyTok"
 ,"TryTok"
 ,"EqTok"
 ,"WithTok"].forEach(function(x){
  r.push(x+' ← "'+x.slice(0,-3).toLowerCase()+'" !(IdentifierPart)')})
 return r.join('\n')}

/* Here again we use a bit of a hack to build up a partial result between successive steps by storing it on the window.  Ultimately some 3box feature or other should obviate this kind of thing. */

if(this.partial==undefined) partial=[]

function ECMAScript_unified_PEG_output_step_2(es5peg){
 var x=tree(p_PEG_RuleSet,es5peg)
 if(!x[0])return explainParseFailure(x)
 return x[1]}

function ECMAScript_unified_PEG_output_step_3(str,tree){
 var x=codegenTableTree(str,tree,'p_ES5_2_')
 return x}

function ECMAScript_unified_PEG_output_step_4(){
 var x=reTablePostProcess(partial[2][0])
 return pp(partial[3]=x)}

/* set of symbols to preserve even if they could be elided */
ECMAScript_unified_preserve_symbols=
['AdditiveExpr'
,'ArgumentList'
,'Arguments'
,'DebuggerStatement'
,'Identifier'
,'RegularExpressionLiteral'
]

function ECMAScript_unified_PEG_output_step_5(){
 var x,pts={},deps={},i,l,t=partial[2]
 for(i=0,l=t[1].length;i<l;i++) pts[t[1][i][0]]=t[1][i][1]
 for(i=0,l=t[2].length;i<l;i++)deps[t[2][i][0]]=t[2][i][1]             
 /*x=reTableCodeGen('Program'
                 ,'p_ES5_'
                 ,partial[3]
                 ,pts
                 ,deps
                 ,ECMAScript_unified_preserve_symbols
                 ,true)*/
 x=reTableCodeGen('Program'
                 ,'p_ES5_2_'
                 ,partial[3]
                 ,pts
                 ,deps
                 ,[]
                 ,false)
 return pp(partial[4]=x)}

function ECMAScript_unified_PEG_output_step_6(){}

function ECMAScript_unified_PEG_output_final(){
 return partial[4]}