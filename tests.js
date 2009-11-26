;(function(){

var a=[]

function t(p_,s){a.push((test(p_,s))?'PASS':('FAIL '+s))}
function d(p_,s){a.push(pp(dissect(p_,s)))}
function br(){a.push('')}

function dissect(p_,str){var s=new State(str);p_(s);return s}

parserTests=function(){

a=[]
//t(empty,'');t(strLit('a'),'a');t(re(/^abc+/),'abccc')
//t(p_Empty,'ϵ')
//t(p_UPlusCodePoint,'U+1234')
//t(p_PositiveSpec,'[:Zs:]');br()
/* UNIMPLEMENTED
UnicodePropSpec   ← PositiveSpec / NegativeSpec
PositiveSpec      ← "[:"  PropSpec ":]"
NegativeSpec      ← "[:^" PropSpec ":]"
PropSpec          ← BinaryUnicodeProperty
                  / UnicodeProperty ("=" / "≠") PropVal
                  / ScriptOrCatPropVal ("|" ScriptOrCatPropVal)*

PropVal           ← UnicodePropVal ("|" UnicodePropVal)*
SingleChar        ← NamedCharacter
                  / CharacterLiteral
NamedCharacter    ← "'" (UPlusCodePoint / ϵ) UnicodeName "'"
CharacterLiteral  ← "'" ( CharEscape / [^'\] ) "'"

*/

t(p_PEG_v1_CharSetDifference,'a-z − x-z')
t(p_PEG_v1_CharSetIntersection,'a-z')
t(re(/^[\u2212]/),'−')
t(p_CodePointRange,'a-z');t(p_CodePointRange,'a-U+00B2')
t(p_CodePointFrom,'a');
t(strLit('-'),'-')
t(seq(p_CodePointFrom,strLit('-')),'a-')
t(seq(p_CodePointFrom,strLit('-'),p_CodePointTo),'a-z')
//t(p_SingleChar,'\'"\'')
t(p_CharSet,'[]');t(p_CharSet,'[a-zA-Z0-9]')
t(p_CharSetDifference,'a-z − pqr')
t(p_CharSetUnion,'pqr');t(p_CharSetUnion,'xyz')
t(p_S,' ');t(p_S,'\n ')
t(p_CharSetIntersection,'pqr ∩ xyz')
t(p_NonTerminal,'NonTerminal')
t(p_AnyRep,'Foo*');t(p_PosRep,'(Foo Bar)+')
t(p_MNRep,'(Foo / Bar){2,3}');t(p_Replicand,'(Foo Bar)')
t(p_AtomicExpr,'Foo');t(p_Sequence,'Foo Bar');t(p_Optional,'Foo?')
t(p_StrLit,'"xyzzy"')
//t(p_CharacterLiteral,'\'"\'')
t(p_CharEscape,'\\n');t(p_CharEscape,'\\uFFFF')
//t(p_PosLookahead,'&( Foo / Bar )')
/* UNDEFINED
PosLookahead      ← "&(" OrdChoice ")"
NegLookahead      ← "!(" OrdChoice ")"
*/
t(p_Rule,'Foo     ← Bar / Baz')
t(p_RuleSet,'Foo ← Bar\nBaz ← Foo / (Baz Bar)+')

return a.join('\n')}


var ruleset1='Foo ← Bar\nBaz ← Foo / (Baz Bar)+'

ruleset1_result_table=function(){
 d(p_RuleSet,ruleset1)
 return a.join('\n')}

ruleset1_buildTree=function(){
 return('The input\n\n'+pp(ruleset1)+'\n\nparses as:\n\n'+pp(tree(p_RuleSet,ruleset1)[1]))}

ruleset1_showTree=function(){
 //var x=pp(tree(p_RuleSet,ruleset1)[1],-1,0)
 //return x.replace(/\n\s*/g,'')
 return showTree(tree(p_RuleSet,ruleset1)[1])}

var selA='[S]'
,selB='U'
,selC='D'
,selD='UD'
,selE='UDBD'
,selF='DBUU'
,selG='UUBBD'
,selH='UU'
,selI='UBD'
,selZ='!U'

function selTest(sel){
 return sel+'\n\n'
  +showSelTree(sel,tree(p_RuleSet,ruleset1)[1])}

selTestA=function(){return selTest(selA)}
selTestB=function(){return selTest(selB)}
selTestC=function(){return selTest(selC)}
selTestD=function(){return selTest(selD)}
selTestE=function(){return selTest(selE)}
selTestF=function(){return selTest(selF)}

var mSelA='[p_S] D [p_Q] BDDDBBD'
,mSelB='UU[p_Rule]'

function mSel_parse(sel){
 return sel+'\n\n'
  +pp(parseStructSel(sel))}
function mSel_fixups(sel){
 return sel+'\n\n'
  +pp(modelStructSel(sel))}
mixedSelA_struct=function(){return mSel_parse(mSelA)}
mixedSelA_fixups=function(){return mSel_fixups(mSelA)}
mixedSelB_struct=function(){return mSel_parse(mSelB)}
mixedSelB_fixups=function(){return mSel_fixups(mSelB)}

/* this is an ugly hack, mixing levels that ought not to be mixed, but it does work */
var body

treeMut_n1=function(){
 getFile('treeMutation_n1')
 return showSelTree(body,tree(p_RuleSet,ruleset1)[1])}

_n1_body=function(){
 getFile('treeMutation_n1')
 return body}

_n1_struct=function(){
 getFile('treeMutation_n1')
 return pp(parseStructSel(body))}

_n1_fixups=function(){
 getFile('treeMutation_n1')
 return pp(modelStructSel(body))}

PEG_parse_tree=function(){
 getFile('peg.peg')
 //return pp(dissect(p_RuleSet,body))
 return showTree(tree(p_RuleSet,body)[1])}

PEG_minimal_parse_tree=function(){
 getFile('peg_minimal.peg')
 return showTree(tree(p_RuleSet,body)[1])}

_n2_body=function(){
 getFile('_n2')
 return body}

_n2_input_tree=function(){
 getFile('peg_minimal.peg')
 peg_tree=tree(p_RuleSet,body)[1]
 return showTree(peg_tree)}

_n2_program_AST=function(){
 getFile('_n2')
 return showAST(parseTMProg(body))}

_n2_models=function(){var n2_ast,peg_tree
 getFile('_n2')
 n2_ast=parseTMProg(body)
 return pp(build_models(n2_ast))}

_n2_mark_tree=function(){var n2_ast,peg_tree
 getFile('_n2')
 n2_ast=parseTMProg(body)
 getFile('peg_minimal.peg')
 peg_tree=tree(p_RuleSet,body)[1]
 return markTMProg(n2_ast,peg_tree)}

_n2_ruleset_1=function(){var n2_ast,peg_tree,models
 getFile('_n2')
 n2_ast=parseTMProg(body)
 getFile('peg_minimal.peg')
 peg_tree=tree(p_RuleSet,body)[1]
 models=build_models([n2_ast[0]])
 return showTree(mapSelectors(models,peg_tree))}

_n2_ruleset_1_2=function(){var n2_ast,peg_tree,models
 getFile('_n2')
 n2_ast=parseTMProg(body)
 getFile('peg_minimal.peg')
 peg_tree=tree(p_RuleSet,body)[1]
 models=build_models([n2_ast[0],n2_ast[1]])
 return showTree(mapSelectors(models,peg_tree))}

_n2_output_first_n_only=function(){var n2_ast,peg_tree
 getFile('_n2')
 n2_ast=parseTMProg(body)
 getFile('peg_minimal.peg')
 peg_tree=tree(p_RuleSet,body)[1]
 peg_tree.cn=peg_tree.cn.slice(0,39)
 return pp(applyTMProg(n2_ast,"{prefix:'p_'}",peg_tree,body,'match_code'))+'\n'+log.get()}

_n2_output=function(){var n2_ast,peg_tree
 getFile('_n2')
 n2_ast=parseTMProg(body)
 getFile('peg_minimal.peg')
 peg_tree=tree(p_RuleSet,body)[1]
 return pp(applyTMProg(n2_ast,"{prefix:'p_'}",peg_tree,body,'match_code'))}

var c={}

_cset_difference=function(){
 _CSET().import('',c)
 return pp([
  c.difference(c.universe,c.fromChar('a'))
 ,c.difference(c.fromChar('a'),c.nil)
 ,c.difference(c.fromChar('a'),c.universe)
 ].map(c.show))}

_cset_union=function(){_CSET().import('',c);return pp(
 c.union(c.fromChar('a')
           ,c.fromCharRange('p','z')))}

_cset_intersection=function(){_CSET().import('',c);return pp(
 c.intersection(c.fromCharRange('a','e')
               ,c.fromCharRange('d','f')))}

_cset_toREcclass=function(){_CSET().import('',c);return pp([
 c.toRegex(c.union(c.fromChar('a')
                                ,c.fromCharRange('p','z')))
//,c.toRegex(c.fromUnicodeGeneralCategory('Ll'))
,c.toRegex(c.fromUnicodeGeneralCategory('Cs'))
,c.toRegex([0,0xFFFF])
,c.toRegex([0,0x110000])
,c.toRegex([])
,c.toRegex([0])
,c.toRegex(c.fromCharRange('𝌆','𝍖'))
,c.toRegex(c.fromIntRange(0,0xFFFF))
,c.toRegex(c.fromChar('a'))
,c.toRegex(c.fromChar('𝌆'))])}

_cset_fromList=function(){_CSET().import('',c);return pp([
 c.fromList([])
,c.fromList([0])
,c.fromList([7,8,9])
,c.fromList([0xfffe])
,c.fromList([0xfffe,0xffff])
,c.fromList([3,4,0xff,0xfffa,0xffff])
].map(c.show))}

_cset_fromString=function(){_CSET().import('',c);return pp([
 c.fromString('apqrstuvwxyz')
,c.fromString('𝌆')
,c.fromCharRange('𝌆','𝍖')
].map(c.show))}

})();