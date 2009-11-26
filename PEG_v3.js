function p_PEG_v3_RuleSet(str){
 var s=new State(str)
 function PropSpec(s,p){var c=s.pre('PropSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,_PropSpec(s,c))}
 function BinaryUnicodeProperty(s,p){var c=s.pre('BinaryUnicodeProperty',p);if(typeof c=='boolean')return c;return s.fin(c,p,_BinaryUnicodeProperty(s,c))}
 function UnicodeProperty(s,p){var c=s.pre('UnicodeProperty',p);if(typeof c=='boolean')return c;return s.fin(c,p,_UnicodeProperty(s,c))}
 function PropVal(s,p){var c=s.pre('PropVal',p);if(typeof c=='boolean')return c;return s.fin(c,p,_PropVal(s,c))}
 function ScriptOrCatPropVal(s,p){var c=s.pre('ScriptOrCatPropVal',p);if(typeof c=='boolean')return c;return s.fin(c,p,_ScriptOrCatPropVal(s,c))}
 function UPlusCodePoint(s,p){var c=s.pre('UPlusCodePoint',p);if(typeof c=='boolean')return c;return s.fin(c,p,_UPlusCodePoint(s,c))}
 function PositiveSpec(s,p){var c=s.pre('PositiveSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,_PositiveSpec(s,c))}
 function NegativeSpec(s,p){var c=s.pre('NegativeSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,_NegativeSpec(s,c))}
 function CodePoint(s,p){var c=s.pre('CodePoint',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CodePoint(s,c))}
 function CodePointLit(s,p){var c=s.pre('CodePointLit',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CodePointLit(s,c))}
 function CodePointFrom(s,p){var c=s.pre('CodePointFrom',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CodePointFrom(s,c))}
 function CodePointTo(s,p){var c=s.pre('CodePointTo',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CodePointTo(s,c))}
 function CodePointRange(s,p){var c=s.pre('CodePointRange',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CodePointRange(s,c))}
 function UnicodePropSpec(s,p){var c=s.pre('UnicodePropSpec',p);if(typeof c=='boolean')return c;return s.fin(c,p,_UnicodePropSpec(s,c))}
 function CodePointExpr(s,p){var c=s.pre('CodePointExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CodePointExpr(s,c))}
 function CharSetUnion(s,p){var c=s.pre('CharSetUnion',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CharSetUnion(s,c))}
 function CharSetIntersection(s,p){var c=s.pre('CharSetIntersection',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CharSetIntersection(s,c))}
 function HEXDIG(s,p){var c=s.pre('HEXDIG',p);if(typeof c=='boolean')return c;return s.fin(c,p,_HEXDIG(s,c))}
 function CharSetDifference(s,p){var c=s.pre('CharSetDifference',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CharSetDifference(s,c))}
 function CharEscape(s,p){var c=s.pre('CharEscape',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CharEscape(s,c))}
 function CharSetExpr(s,p){var c=s.pre('CharSetExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CharSetExpr(s,c))}
 function StrLit(s,p){var c=s.pre('StrLit',p);if(typeof c=='boolean')return c;return s.fin(c,p,_StrLit(s,c))}
 function CharSet(s,p){var c=s.pre('CharSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,_CharSet(s,c))}
 function PosCharSet(s,p){var c=s.pre('PosCharSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,_PosCharSet(s,c))}
 function NegCharSet(s,p){var c=s.pre('NegCharSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,_NegCharSet(s,c))}
 function Empty(s,p){var c=s.pre('Empty',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Empty(s,c))}
 function AtomicExpr(s,p){var c=s.pre('AtomicExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,_AtomicExpr(s,c))}
 function ParenthExpr(s,p){var c=s.pre('ParenthExpr',p);if(typeof c=='boolean')return c;return s.fin(c,p,_ParenthExpr(s,c))}
 function Replicand(s,p){var c=s.pre('Replicand',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Replicand(s,c))}
 function N(s,p){var c=s.pre('N',p);if(typeof c=='boolean')return c;return s.fin(c,p,_N(s,c))}
 function M(s,p){var c=s.pre('M',p);if(typeof c=='boolean')return c;return s.fin(c,p,_M(s,c))}
 function Optional(s,p){var c=s.pre('Optional',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Optional(s,c))}
 function MNRep(s,p){var c=s.pre('MNRep',p);if(typeof c=='boolean')return c;return s.fin(c,p,_MNRep(s,c))}
 function PosRep(s,p){var c=s.pre('PosRep',p);if(typeof c=='boolean')return c;return s.fin(c,p,_PosRep(s,c))}
 function AnyRep(s,p){var c=s.pre('AnyRep',p);if(typeof c=='boolean')return c;return s.fin(c,p,_AnyRep(s,c))}
 function SeqUnit(s,p){var c=s.pre('SeqUnit',p);if(typeof c=='boolean')return c;return s.fin(c,p,_SeqUnit(s,c))}
 function Sequence(s,p){var c=s.pre('Sequence',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Sequence(s,c))}
 function IdentChar(s,p){var c=s.pre('IdentChar',p);if(typeof c=='boolean')return c;return s.fin(c,p,_IdentChar(s,c))}
 function IdentStartChar(s,p){var c=s.pre('IdentStartChar',p);if(typeof c=='boolean')return c;return s.fin(c,p,_IdentStartChar(s,c))}
 function OrdChoice(s,p){var c=s.pre('OrdChoice',p);if(typeof c=='boolean')return c;return s.fin(c,p,_OrdChoice(s,c))}
 function S(s,p){var c=s.pre('S',p);if(typeof c=='boolean')return c;return s.fin(c,p,_S(s,c))}
 function SpaceAtom(s,p){var c=s.pre('SpaceAtom',p);if(typeof c=='boolean')return c;return s.fin(c,p,_SpaceAtom(s,c))}
 function LB(s,p){var c=s.pre('LB',p);if(typeof c=='boolean')return c;return s.fin(c,p,_LB(s,c))}
 function NonTerminal(s,p){var c=s.pre('NonTerminal',p);if(typeof c=='boolean')return c;return s.fin(c,p,_NonTerminal(s,c))}
 function Comment(s,p){var c=s.pre('Comment',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Comment(s,c))}
 function Rule(s,p){var c=s.pre('Rule',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Rule(s,c))}
 function RuleSet(s,p){var c=s.pre('RuleSet',p);if(typeof c=='boolean')return c;return s.fin(c,p,_RuleSet(s,c))}
 function PosLookahead(s,p){var c=s.pre('PosLookahead',p);if(typeof c=='boolean')return c;return s.fin(c,p,_PosLookahead(s,c))}
 function NegLookahead(s,p){var c=s.pre('NegLookahead',p);if(typeof c=='boolean')return c;return s.fin(c,p,_NegLookahead(s,c))}
 var _PropSpec=ordChoice(BinaryUnicodeProperty,seq(UnicodeProperty,ordChoice(re(/^=/),re(/^≠/)),PropVal),seq(ScriptOrCatPropVal,rep(0,0,seq(re(/^\|/),ScriptOrCatPropVal))))
 var _BinaryUnicodeProperty=UnicodeProperty
 var _UnicodeProperty=rep(1,0,re(/^[ \-A-Z_a-z]/))
 var _PropVal=rep(1,0,re(/^[ \-A-Z_a-z]/))
 var _ScriptOrCatPropVal=rep(1,0,re(/^[ \-A-Z_a-z]/))
 var _UPlusCodePoint=seq(re(/^U\+/),rep(4,6,HEXDIG))
 var _PositiveSpec=seq(re(/^\[:/),PropSpec,re(/^:\]/))
 var _NegativeSpec=seq(re(/^\[:\^/),PropSpec,re(/^:\]/))
 var _CodePoint=ordChoice(UPlusCodePoint,CodePointLit)
 var _CodePointLit=re(/^[\u0000-\u001f!-\\^-\u009f¡-\u167fᚁ-\u180d\u180f-\u1fff\u200b-\u202e‰-⁞\u2060-∑∓-\u2fff、-\ud7ff\udc00-\uffff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udbff]/)
 var _CodePointFrom=CodePoint
 var _CodePointTo=CodePoint
 var _CodePointRange=seq(CodePointFrom,re(/^-/),CodePointTo)
 var _UnicodePropSpec=ordChoice(PositiveSpec,NegativeSpec)
 var _CodePointExpr=ordChoice(UnicodePropSpec,CodePointRange,CodePoint)
 var _CharSetUnion=rep(1,0,seq(CodePointExpr,rep(0,1,S)))
 var _CharSetIntersection=seq(CharSetUnion,rep(0,0,seq(rep(0,1,S),re(/^∩/),rep(0,1,S),CharSetUnion)))
 var _HEXDIG=re(/^[0-9A-F]/)
 var _CharSetDifference=seq(CharSetIntersection,rep(0,0,seq(rep(0,1,S),re(/^[−]/),rep(0,1,S),CharSetIntersection)))
 var _CharEscape=ordChoice(seq(re(/^[\\]/),rep(4,4,HEXDIG)),seq(re(/^[\\]/),re(/^[fnrtv]/)))
 var _CharSetExpr=seq(CharSetDifference,rep(0,1,S))
 var _StrLit=seq(re(/^["]/),rep(0,0,ordChoice(CharEscape,re(/^[\u0000-!#-[\]-\ud7ff\udc00-\uffff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udbff]/))),re(/^["]/))
 var _CharSet=ordChoice(NegCharSet,PosCharSet)
 var _PosCharSet=seq(re(/^\[/),rep(0,1,S),ordChoice(CharSetExpr,empty),re(/^\]/))
 var _NegCharSet=seq(re(/^\[\^/),rep(0,1,S),ordChoice(CharSetExpr,empty),re(/^\]/))
 var _Empty=re(/^ϵ/)
 var _AtomicExpr=ordChoice(Empty,CharSet,NonTerminal,StrLit)
 var _ParenthExpr=seq(re(/^\(/),OrdChoice,re(/^\)/))
 var _Replicand=ordChoice(ParenthExpr,AtomicExpr)
 var _N=rep(0,0,re(/^[0-9]/))
 var _M=rep(0,0,re(/^[0-9]/))
 var _Optional=seq(Replicand,re(/^\?/))
 var _MNRep=seq(Replicand,re(/^\{/),M,rep(0,1,seq(re(/^,/),N)),re(/^\}/))
 var _PosRep=seq(Replicand,re(/^\+/))
 var _AnyRep=seq(Replicand,re(/^\*/))
 var _SeqUnit=ordChoice(AnyRep,PosRep,MNRep,Optional,ParenthExpr,PosLookahead,NegLookahead,AtomicExpr)
 var _Sequence=rep(1,0,seq(SeqUnit,rep(0,1,S)))
 var _IdentChar=re(/^[0-9A-Z_a-z]/)
 var _IdentStartChar=re(/^[A-Z]/)
 var _OrdChoice=seq(rep(0,1,S),Sequence,rep(0,1,S),rep(0,0,seq(re(/^\//),rep(0,1,S),Sequence,rep(0,1,S))))
 var _S=rep(1,0,SpaceAtom)
 var _SpaceAtom=ordChoice(re(/^ /),seq(LB,re(/^ /)))
 var _LB=ordChoice(seq(re(/^[\r]/),re(/^[\n]/)),re(/^[\n\r]/))
 var _NonTerminal=seq(IdentStartChar,rep(0,0,IdentChar))
 var _Comment=seq(re(/^;/),rep(0,0,re(/^[\u0000-\t\v-\f\u000e-\ud7ff\udc00-\uffff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udbff]/)),LB)
 var _Rule=seq(NonTerminal,S,re(/^←/),S,OrdChoice)
 var _RuleSet=ordChoice(seq(ordChoice(Comment,Rule),rep(0,0,seq(rep(1,0,LB),ordChoice(Comment,Rule)))),empty)
 var _PosLookahead=seq(re(/^&\(/),OrdChoice,re(/^\)/))
 var _NegLookahead=seq(re(/^!\(/),OrdChoice,re(/^\)/))
 if(RuleSet(s) && s.pos==str.length) return [true, buildTree(s)]
 return [false, s]
}