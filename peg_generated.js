function p_PEG_PropSpec(s,p){var c=s.pre('PropSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_BinaryUnicodeProperty,seq(p_PEG_UnicodeProperty,ordChoice(strLit("="),strLit("≠")),p_PEG_PropVal),seq(p_PEG_ScriptOrCatPropVal,rep(0,0,seq(strLit("|"),p_PEG_ScriptOrCatPropVal))))(s,c))}

function p_PEG_BinaryUnicodeProperty(s,p){var c=s.pre('BinaryUnicodeProperty',p);if(typeof c=='boolean')return c;return s.fin(c,p,p_PEG_UnicodeProperty(s,c))}

function p_PEG_UnicodeProperty(s,p){var c=s.pre('UnicodeProperty',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,re(/^[\u0020\u002dA-Z_a-z]/))(s,c))}

function p_PEG_PropVal(s,p){var c=s.pre('PropVal',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,re(/^[\u0020\u002dA-Z_a-z]/))(s,c))}

function p_PEG_ScriptOrCatPropVal(s,p){var c=s.pre('ScriptOrCatPropVal',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,re(/^[\u0020\u002dA-Z_a-z]/))(s,c))}

function p_PEG_UPlusCodePoint(s,p){var c=s.pre('UPlusCodePoint',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("U+"),rep(4,6,p_PEG_HEXDIG))(s,c))}

function p_PEG_PositiveSpec(s,p){var c=s.pre('PositiveSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("[:"),p_PEG_PropSpec,strLit(":]"))(s,c))}

function p_PEG_NegativeSpec(s,p){var c=s.pre('NegativeSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("[:^"),p_PEG_PropSpec,strLit(":]"))(s,c))}

function p_PEG_CodePoint(s,p){var c=s.pre('CodePoint',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_UPlusCodePoint,p_PEG_CodePointLit)(s,c))}

function p_PEG_CodePointLit(s,p){var c=s.pre('CodePointLit',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^[\u0000-\u001f\u0021-\u005c^-\u009f\u00a1-\u167f\u1681-\u180d\u180f-\u1fff\u200b-\u202e\u2030-\u205e\u2060-\u2211\u2213-\u2fff\u3001-\uffff]/)(s,c))}

function p_PEG_CodePointFrom(s,p){var c=s.pre('CodePointFrom',p);if(typeof c=='boolean')return c;return s.fin(c,p,p_PEG_CodePoint(s,c))}

function p_PEG_CodePointTo(s,p){var c=s.pre('CodePointTo',p);if(typeof c=='boolean')return c;return s.fin(c,p,p_PEG_CodePoint(s,c))}

function p_PEG_CodePointRange(s,p){var c=s.pre('CodePointRange',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_CodePointFrom,strLit("-"),p_PEG_CodePointTo)(s,c))}

function p_PEG_UnicodePropSpec(s,p){var c=s.pre('UnicodePropSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_PositiveSpec,p_PEG_NegativeSpec)(s,c))}

function p_PEG_CodePointExpr(s,p){var c=s.pre('CodePointExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_UnicodePropSpec,p_PEG_CodePointRange,p_PEG_CodePoint)(s,c))}

function p_PEG_CharSetUnion(s,p){var c=s.pre('CharSetUnion',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,seq(p_PEG_CodePointExpr,rep(0,1,p_PEG_S)))(s,c))}

function p_PEG_CharSetIntersection(s,p){var c=s.pre('CharSetIntersection',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_CharSetUnion,rep(0,0,seq(rep(0,1,p_PEG_S),strLit("∩"),rep(0,1,p_PEG_S),p_PEG_CharSetUnion)))(s,c))}

function p_PEG_HEXDIG(s,p){var c=s.pre('HEXDIG',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^[0-9A-F]/)(s,c))}

function p_PEG_CharSetDiff(s,p){var c=s.pre('CharSetDiff',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_CharSetIntersection,rep(0,0,seq(rep(0,0,p_PEG_S),strLit("\u2212"),rep(0,0,p_PEG_S),p_PEG_CharSetIntersection)))(s,c))}

function p_PEG_CharEscape(s,p){var c=s.pre('CharEscape',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(seq(strLit("\u005C"),rep(4,4,p_PEG_HEXDIG)),seq(strLit("\u005C"),re(/^[fnrtv]/)))(s,c))}

function p_PEG_CharSetExpr(s,p){var c=s.pre('CharSetExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_CharSetDiff,rep(0,1,p_PEG_S))(s,c))}

function p_PEG_StrLit(s,p){var c=s.pre('StrLit',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("\u0022"),rep(0,0,ordChoice(p_PEG_CharEscape,re(/^[\u0000-\u0021#-[\u005d-\uffff]/))),strLit("\u0022"))(s,c))}

function p_PEG_CharSet(s,p){var c=s.pre('CharSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_NegCharSet,p_PEG_PosCharSet)(s,c))}

function p_PEG_PosCharSet(s,p){var c=s.pre('PosCharSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("["),rep(0,1,p_PEG_S),ordChoice(p_PEG_CharSetExpr,empty),strLit("]"))(s,c))}

function p_PEG_NegCharSet(s,p){var c=s.pre('NegCharSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("[^"),rep(0,1,p_PEG_S),ordChoice(p_PEG_CharSetExpr,empty),strLit("]"))(s,c))}

function p_PEG_Empty(s,p){var c=s.pre('Empty',p);if(typeof c=='boolean')return c;return s.fin(c,p,strLit("ϵ")(s,c))}

function p_PEG_AtomicExpr(s,p){var c=s.pre('AtomicExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_Empty,p_PEG_CharSet,p_PEG_NonTerminal,p_PEG_StrLit)(s,c))}

function p_PEG_ParenthExpr(s,p){var c=s.pre('ParenthExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("("),p_PEG_OrdChoice,strLit(")"))(s,c))}

function p_PEG_Replicand(s,p){var c=s.pre('Replicand',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_ParenthExpr,p_PEG_AtomicExpr)(s,c))}

function p_PEG_N(s,p){var c=s.pre('N',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(0,0,re(/^[0-9]/))(s,c))}

function p_PEG_M(s,p){var c=s.pre('M',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(0,0,re(/^[0-9]/))(s,c))}

function p_PEG_Optional(s,p){var c=s.pre('Optional',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_Replicand,strLit("?"))(s,c))}

function p_PEG_MNRep(s,p){var c=s.pre('MNRep',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_Replicand,strLit("{"),p_PEG_M,rep(0,1,seq(strLit(","),p_PEG_N)),strLit("}"))(s,c))}

function p_PEG_PosRep(s,p){var c=s.pre('PosRep',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_Replicand,strLit("+"))(s,c))}

function p_PEG_AnyRep(s,p){var c=s.pre('AnyRep',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_Replicand,strLit("*"))(s,c))}

function p_PEG_SeqUnit(s,p){var c=s.pre('SeqUnit',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(p_PEG_AnyRep,p_PEG_PosRep,p_PEG_MNRep,p_PEG_Optional,p_PEG_ParenthExpr,p_PEG_PosLookahead,p_PEG_NegLookahead,p_PEG_AtomicExpr)(s,c))}

function p_PEG_Sequence(s,p){var c=s.pre('Sequence',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,seq(p_PEG_SeqUnit,rep(0,1,p_PEG_S)))(s,c))}

function p_PEG_IdentChar(s,p){var c=s.pre('IdentChar',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^[0-9A-Z_a-z]/)(s,c))}

function p_PEG_IdentStartChar(s,p){var c=s.pre('IdentStartChar',p);if(typeof c=='boolean')return c;return s.fin(c,p,re(/^[A-Z]/)(s,c))}

function p_PEG_OrdChoice(s,p){var c=s.pre('OrdChoice',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(rep(0,1,p_PEG_S),p_PEG_Sequence,rep(0,1,p_PEG_S),rep(0,0,seq(strLit("/"),rep(0,1,p_PEG_S),p_PEG_Sequence,rep(0,1,p_PEG_S))))(s,c))}

function p_PEG_S(s,p){var c=s.pre('S',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,p_PEG_SpaceAtom)(s,c))}

function p_PEG_SpaceAtom(s,p){var c=s.pre('SpaceAtom',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(strLit(" "),seq(p_PEG_LB,strLit(" ")))(s,c))}

function p_PEG_LB(s,p){var c=s.pre('LB',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(strLit("\r\n"),strLit("\n"),strLit("\r"))(s,c))}

function p_PEG_NonTerminal(s,p){var c=s.pre('NonTerminal',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_IdentStartChar,rep(0,0,p_PEG_IdentChar))(s,c))}

function p_PEG_Rule(s,p){var c=s.pre('Rule',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_PEG_NonTerminal,p_PEG_S,strLit("←"),p_PEG_S,p_PEG_OrdChoice)(s,c))}

function p_PEG_RuleSet(s,p){var c=s.pre('RuleSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(seq(p_PEG_Rule,rep(0,0,seq(rep(1,0,p_PEG_LB),p_PEG_Rule))),empty)(s,c))}

function p_PEG_PosLookahead(s,p){var c=s.pre('PosLookahead',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("&("),p_PEG_OrdChoice,strLit(")"))(s,c))}

function p_PEG_NegLookahead(s,p){var c=s.pre('NegLookahead',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(strLit("!("),p_PEG_OrdChoice,strLit(")"))(s,c))}