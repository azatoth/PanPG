function PEG_codegen_2_test(s){
 s=stripComments(s)
 var pt=tree(p_PEG_RuleSet,s)
 return pt}

function PEG_codegen_2_test_2(pt){
 pt=pt[1]
 return showTree(pt)}

CSET.import('',CSET)

function PEG_codegen_2_test_3_showCode(){
 return PEG_codegen_2.toSource(0)}

function PEG_codegen_2_test_3(s,hide,force){var pt
 pt=tree(p_PEG_RuleSet,s)
 pt=pt[1]
 //return PEG_codegen_2.toSource(0)
 PEG_codegen_2(pt)
 try{return s+'\n\n'+showPTNodeTreeAttrs(pt,hide,force)}
 catch(e){return e.toString()+'\n\n'+showPTNodeTreeAttrs(pt,hide,[])}
 return showTree(pt)
 return pp(pt)
 return showTree(pt)}

function PEG_codegen_2_test_4(s){var pt
 pt=tree(p_PEG_RuleSet,s)[1]
 PEG_codegen_2(pt)
 return pt.code()}

function PEG_codegen_2_test_5(s){var pt
 pt=tree(p_Expr,s)[1]
 return s+'\n\n'+showTree(pt)}