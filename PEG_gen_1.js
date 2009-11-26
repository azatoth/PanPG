function p_PEG_v1_LB(s,p){var c=s.pre('LB',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^([\r][\n]|[\n\r])/)(s,c))}
function p_PEG_v1_Comment(s,p){var c=s.pre('Comment',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit(";"),rep(0,0,re(/^[\u0000-\t\v-\f\u000e-\ud7ff\udc00-\uffff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udbff]/)),p_PEG_v1_LB)(s,c))}
function p_PEG_v1_IdentChar(s,p){var c=s.pre('IdentChar',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^[0-9A-Z_a-z]/)(s,c))}
function p_PEG_v1_IdentStartChar(s,p){var c=s.pre('IdentStartChar',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^[A-Z]/)(s,c))}
function p_PEG_v1_NonTerminal(s,p){var c=s.pre('NonTerminal',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_IdentStartChar,rep(0,0,p_PEG_v1_IdentChar))(s,c))}
function p_PEG_v1_SpaceAtom(s,p){var c=s.pre('SpaceAtom',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(strLit(" "),seq(p_PEG_v1_LB,strLit(" ")))(s,c))}
function p_PEG_v1_S(s,p){var c=s.pre('S',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,p_PEG_v1_SpaceAtom)(s,c))}
function p_PEG_v1_CodePointLit(s,p){var c=s.pre('CodePointLit',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^[\u0000-\u001f!-\\^-\u009f¡-\u167fᚁ-\u180d\u180f-\u1fff\u200b-\u202e‰-⁞\u2060-∑∓-\u2fff、-\ud7ff\udc00-\uffff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udbff]/)(s,c))}
function p_PEG_v1_HEXDIG(s,p){var c=s.pre('HEXDIG',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^[0-9A-F]/)(s,c))}
function p_PEG_v1_UPlusCodePoint(s,p){var c=s.pre('UPlusCodePoint',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("U+"),rep(4,6,p_PEG_v1_HEXDIG))(s,c))}
function p_PEG_v1_CodePoint(s,p){var c=s.pre('CodePoint',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_v1_UPlusCodePoint,p_PEG_v1_CodePointLit)(s,c))}
function p_PEG_v1_CodePointFrom(s,p){var c=s.pre('CodePointFrom',p);if(typeof c=='boolean')return c;return s.fin(c,p,p_PEG_v1_CodePoint(s,c))}
function p_PEG_v1_CodePointTo(s,p){var c=s.pre('CodePointTo',p);if(typeof c=='boolean')return c;return s.fin(c,p,p_PEG_v1_CodePoint(s,c))}
function p_PEG_v1_CodePointRange(s,p){var c=s.pre('CodePointRange',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_CodePointFrom,strLit("-"),p_PEG_v1_CodePointTo)(s,c))}
function p_PEG_v1_UnicodeProperty(s,p){var c=s.pre('UnicodeProperty',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^([ \-A-Z_a-z])+/)(s,c))}
function p_PEG_v1_BinaryUnicodeProperty(s,p){var c=s.pre('BinaryUnicodeProperty',p);if(typeof c=='boolean')return c;return s.fin(c,p,p_PEG_v1_UnicodeProperty(s,c))}
function p_PEG_v1_PropVal(s,p){var c=s.pre('PropVal',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^([ \-A-Z_a-z])+/)(s,c))}
function p_PEG_v1_ScriptOrCatPropVal(s,p){var c=s.pre('ScriptOrCatPropVal',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^([ \-A-Z_a-z])+/)(s,c))}
function p_PEG_v1_PropSpec(s,p){var c=s.pre('PropSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_v1_BinaryUnicodeProperty,seq(p_PEG_v1_UnicodeProperty,ordChoice(strLit("="),strLit("≠")),p_PEG_v1_PropVal),seq(p_PEG_v1_ScriptOrCatPropVal,rep(0,0,seq(strLit("|"),p_PEG_v1_ScriptOrCatPropVal))))(s,c))}
function p_PEG_v1_NegativeSpec(s,p){var c=s.pre('NegativeSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("[:^"),p_PEG_v1_PropSpec,strLit(":]"))(s,c))}
function p_PEG_v1_PositiveSpec(s,p){var c=s.pre('PositiveSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("[:"),p_PEG_v1_PropSpec,strLit(":]"))(s,c))}
function p_PEG_v1_UnicodePropSpec(s,p){var c=s.pre('UnicodePropSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_v1_PositiveSpec,p_PEG_v1_NegativeSpec)(s,c))}
function p_PEG_v1_CodePointExpr(s,p){var c=s.pre('CodePointExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_v1_UnicodePropSpec,p_PEG_v1_CodePointRange,p_PEG_v1_CodePoint)(s,c))}
function p_PEG_v1_CharSetUnion(s,p){var c=s.pre('CharSetUnion',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,seq(p_PEG_v1_CodePointExpr,rep(0,1,p_PEG_v1_S)))(s,c))}
function p_PEG_v1_CharSetIntersection(s,p){var c=s.pre('CharSetIntersection',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_CharSetUnion,rep(0,0,seq(rep(0,1,p_PEG_v1_S),strLit("∩"),rep(0,1,p_PEG_v1_S),p_PEG_v1_CharSetUnion)))(s,c))}
function p_PEG_v1_CharSetDifference(s,p){var c=s.pre('CharSetDifference',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_CharSetIntersection,rep(0,0,seq(rep(0,1,p_PEG_v1_S),re(/^[−]/),rep(0,1,p_PEG_v1_S),p_PEG_v1_CharSetIntersection)))(s,c))}
function p_PEG_v1_CharSetExpr(s,p){var c=s.pre('CharSetExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_CharSetDifference,rep(0,1,p_PEG_v1_S))(s,c))}
function p_PEG_v1_NegCharSet(s,p){var c=s.pre('NegCharSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("[^"),rep(0,1,p_PEG_v1_S),ordChoice(p_PEG_v1_CharSetExpr,empty),strLit("]"))(s,c))}
function p_PEG_v1_PosCharSet(s,p){var c=s.pre('PosCharSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("["),rep(0,1,p_PEG_v1_S),ordChoice(p_PEG_v1_CharSetExpr,empty),strLit("]"))(s,c))}
function p_PEG_v1_CharSet(s,p){var c=s.pre('CharSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_v1_NegCharSet,p_PEG_v1_PosCharSet)(s,c))}
function p_PEG_v1_Empty(s,p){var c=s.pre('Empty',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^ϵ/)(s,c))}
function p_PEG_v1_CharEscape(s,p){var c=s.pre('CharEscape',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(seq(re(/^[\\]/),rep(4,4,p_PEG_v1_HEXDIG)),seq(re(/^[\\]/),re(/^[fnrtv]/)))(s,c))}
function p_PEG_v1_StrLit(s,p){var c=s.pre('StrLit',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(re(/^["]/),rep(0,0,ordChoice(p_PEG_v1_CharEscape,re(/^[\u0000-!#-[\]-\ud7ff\udc00-\uffff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udbff]/))),re(/^["]/))(s,c))}
function p_PEG_v1_AtomicExpr(s,p){var c=s.pre('AtomicExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_v1_Empty,p_PEG_v1_CharSet,p_PEG_v1_NonTerminal,p_PEG_v1_StrLit)(s,c))}
function p_PEG_v1_ParenthExpr(s,p){var c=s.pre('ParenthExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("("),p_PEG_v1_OrdChoice,strLit(")"))(s,c))}
function p_PEG_v1_Replicand(s,p){var c=s.pre('Replicand',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_v1_ParenthExpr,p_PEG_v1_AtomicExpr)(s,c))}
function p_PEG_v1_AnyRep(s,p){var c=s.pre('AnyRep',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_Replicand,strLit("*"))(s,c))}
function p_PEG_v1_M(s,p){var c=s.pre('M',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^([0-9])*/)(s,c))}
function p_PEG_v1_N(s,p){var c=s.pre('N',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^([0-9])*/)(s,c))}
function p_PEG_v1_MNRep(s,p){var c=s.pre('MNRep',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_Replicand,strLit("{"),p_PEG_v1_M,rep(0,1,seq(strLit(","),p_PEG_v1_N)),strLit("}"))(s,c))}
function p_PEG_v1_NegLookahead(s,p){var c=s.pre('NegLookahead',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("!("),p_PEG_v1_OrdChoice,strLit(")"))(s,c))}
function p_PEG_v1_Optional(s,p){var c=s.pre('Optional',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_Replicand,strLit("?"))(s,c))}
function p_PEG_v1_PosLookahead(s,p){var c=s.pre('PosLookahead',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("&("),p_PEG_v1_OrdChoice,strLit(")"))(s,c))}
function p_PEG_v1_PosRep(s,p){var c=s.pre('PosRep',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_Replicand,strLit("+"))(s,c))}
function p_PEG_v1_SeqUnit(s,p){var c=s.pre('SeqUnit',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_v1_AnyRep,p_PEG_v1_PosRep,p_PEG_v1_MNRep,p_PEG_v1_Optional,p_PEG_v1_ParenthExpr,p_PEG_v1_PosLookahead,p_PEG_v1_NegLookahead,p_PEG_v1_AtomicExpr)(s,c))}
function p_PEG_v1_Sequence(s,p){var c=s.pre('Sequence',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,seq(p_PEG_v1_SeqUnit,rep(0,1,p_PEG_v1_S)))(s,c))}
function p_PEG_v1_OrdChoice(s,p){var c=s.pre('OrdChoice',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(rep(0,1,p_PEG_v1_S),p_PEG_v1_Sequence,rep(0,1,p_PEG_v1_S),rep(0,0,seq(strLit("/"),rep(0,1,p_PEG_v1_S),p_PEG_v1_Sequence,rep(0,1,p_PEG_v1_S))))(s,c))}
function p_PEG_v1_Rule(s,p){var c=s.pre('Rule',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_v1_NonTerminal,p_PEG_v1_S,strLit("←"),p_PEG_v1_S,p_PEG_v1_OrdChoice)(s,c))}
function p_PEG_v1_RuleSet(s,p){var c=s.pre('RuleSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(seq(ordChoice(p_PEG_v1_Comment,p_PEG_v1_Rule),rep(0,0,seq(rep(1,0,p_PEG_v1_LB),ordChoice(p_PEG_v1_Comment,p_PEG_v1_Rule)))),empty)(s,c))}