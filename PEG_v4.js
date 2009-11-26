function p_PEG_v4_RuleSet(str){
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
 _PropSpec=ordChoice(BinaryUnicodeProperty,seq(UnicodeProperty,ordChoice(sl_0,sl_1),PropVal),seq(ScriptOrCatPropVal,rep(0,0,seq(sl_2,ScriptOrCatPropVal))))
 _BinaryUnicodeProperty=UnicodeProperty
 _UnicodeProperty=rep(1,0,cs_0)
 _PropVal=rep(1,0,cs_1)
 _ScriptOrCatPropVal=rep(1,0,cs_2)
 _UPlusCodePoint=seq(sl_3,rep(4,6,HEXDIG))
 _PositiveSpec=seq(sl_4,PropSpec,sl_5)
 _NegativeSpec=seq(sl_6,PropSpec,sl_7)
 _CodePoint=ordChoice(UPlusCodePoint,CodePointLit)
 _CodePointLit=cs_3
 _CodePointFrom=CodePoint
 _CodePointTo=CodePoint
 _CodePointRange=seq(CodePointFrom,sl_8,CodePointTo)
 _UnicodePropSpec=ordChoice(PositiveSpec,NegativeSpec)
 _CodePointExpr=ordChoice(UnicodePropSpec,CodePointRange,CodePoint)
 _CharSetUnion=rep(1,0,seq(CodePointExpr,rep(0,1,S)))
 _CharSetIntersection=seq(CharSetUnion,rep(0,0,seq(rep(0,1,S),sl_9,rep(0,1,S),CharSetUnion)))
 _HEXDIG=cs_4
 _CharSetDifference=seq(CharSetIntersection,rep(0,0,seq(rep(0,1,S),cs_5,rep(0,1,S),CharSetIntersection)))
 _CharEscape=ordChoice(seq(cs_6,rep(4,4,HEXDIG)),seq(cs_7,cs_8))
 _CharSetExpr=seq(CharSetDifference,rep(0,1,S))
 _StrLit=seq(cs_9,rep(0,0,ordChoice(CharEscape,cs_10)),cs_11)
 _CharSet=ordChoice(NegCharSet,PosCharSet)
 _PosCharSet=seq(sl_10,rep(0,1,S),ordChoice(CharSetExpr,empty),sl_11)
 _NegCharSet=seq(sl_12,rep(0,1,S),ordChoice(CharSetExpr,empty),sl_13)
 _Empty=sl_14
 _AtomicExpr=ordChoice(Empty,CharSet,NonTerminal,StrLit)
 _ParenthExpr=seq(sl_15,OrdChoice,sl_16)
 _Replicand=ordChoice(ParenthExpr,AtomicExpr)
 _N=rep(0,0,cs_12)
 _M=rep(0,0,cs_13)
 _Optional=seq(Replicand,sl_17)
 _MNRep=seq(Replicand,sl_18,M,rep(0,1,seq(sl_19,N)),sl_20)
 _PosRep=seq(Replicand,sl_21)
 _AnyRep=seq(Replicand,sl_22)
 _SeqUnit=ordChoice(AnyRep,PosRep,MNRep,Optional,ParenthExpr,PosLookahead,NegLookahead,AtomicExpr)
 _Sequence=rep(1,0,seq(SeqUnit,rep(0,1,S)))
 _IdentChar=cs_14
 _IdentStartChar=cs_15
 _OrdChoice=seq(rep(0,1,S),Sequence,rep(0,1,S),rep(0,0,seq(sl_23,rep(0,1,S),Sequence,rep(0,1,S))))
 _S=rep(1,0,SpaceAtom)
 _SpaceAtom=ordChoice(sl_24,seq(LB,sl_25))
 _LB=ordChoice(seq(cs_16,cs_17),cs_18)
 _NonTerminal=seq(IdentStartChar,rep(0,0,IdentChar))
 _Comment=seq(sl_26,rep(0,0,cs_19),LB)
 _Rule=seq(NonTerminal,S,sl_27,S,OrdChoice)
 _RuleSet=ordChoice(seq(ordChoice(Comment,Rule),rep(0,0,seq(rep(1,0,LB),ordChoice(Comment,Rule)))),empty)
 _PosLookahead=seq(sl_28,OrdChoice,sl_29)
 _NegLookahead=seq(sl_30,OrdChoice,sl_31)
 function cs_0(s){var c;c=s._str.charCodeAt(s.pos);if(c<32?0:c<33?1:c<45?0:c<46?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0){s.adv(1);return true}return false}
 function cs_1(s){var c;c=s._str.charCodeAt(s.pos);if(c<32?0:c<33?1:c<45?0:c<46?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0){s.adv(1);return true}return false}
 function cs_2(s){var c;c=s._str.charCodeAt(s.pos);if(c<32?0:c<33?1:c<45?0:c<46?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0){s.adv(1);return true}return false}
 function cs_3(s){var c;c=s._str.charCodeAt(s.pos);if(c<0?0:c<32?1:c<33?0:c<93?1:c<94?0:c<160?1:c<161?0:c<5760?1:c<5761?0:c<6158?1:c<6159?0:c<8192?1:c<8203?0:c<8239?1:c<8240?0:c<8287?1:c<8288?0:c<8722?1:c<8723?0:c<12288?1:c<12289?0:1){s.adv(1);return true}return false}
 function cs_4(s){var c;c=s._str.charCodeAt(s.pos);if(c<48?0:c<58?1:c<65?0:c<71?1:0){s.adv(1);return true}return false}
 function cs_5(s){var c;c=s._str.charCodeAt(s.pos);if(c<8722?0:c<8723?1:0){s.adv(1);return true}return false}
 function cs_6(s){var c;c=s._str.charCodeAt(s.pos);if(c<92?0:c<93?1:0){s.adv(1);return true}return false}
 function cs_7(s){var c;c=s._str.charCodeAt(s.pos);if(c<92?0:c<93?1:0){s.adv(1);return true}return false}
 function cs_8(s){var c;c=s._str.charCodeAt(s.pos);if(c<102?0:c<103?1:c<110?0:c<111?1:c<114?0:c<115?1:c<116?0:c<117?1:c<118?0:c<119?1:0){s.adv(1);return true}return false}
 function cs_9(s){var c;c=s._str.charCodeAt(s.pos);if(c<34?0:c<35?1:0){s.adv(1);return true}return false}
 function cs_10(s){var c;c=s._str.charCodeAt(s.pos);if(c<0?0:c<34?1:c<35?0:c<92?1:c<93?0:1){s.adv(1);return true}return false}
 function cs_11(s){var c;c=s._str.charCodeAt(s.pos);if(c<34?0:c<35?1:0){s.adv(1);return true}return false}
 function cs_12(s){var c;c=s._str.charCodeAt(s.pos);if(c<48?0:c<58?1:0){s.adv(1);return true}return false}
 function cs_13(s){var c;c=s._str.charCodeAt(s.pos);if(c<48?0:c<58?1:0){s.adv(1);return true}return false}
 function cs_14(s){var c;c=s._str.charCodeAt(s.pos);if(c<48?0:c<58?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0){s.adv(1);return true}return false}
 function cs_15(s){var c;c=s._str.charCodeAt(s.pos);if(c<65?0:c<91?1:0){s.adv(1);return true}return false}
 function cs_16(s){var c;c=s._str.charCodeAt(s.pos);if(c<13?0:c<14?1:0){s.adv(1);return true}return false}
 function cs_17(s){var c;c=s._str.charCodeAt(s.pos);if(c<10?0:c<11?1:0){s.adv(1);return true}return false}
 function cs_18(s){var c;c=s._str.charCodeAt(s.pos);if(c<10?0:c<11?1:c<13?0:c<14?1:0){s.adv(1);return true}return false}
 function cs_19(s){var c;c=s._str.charCodeAt(s.pos);if(c<0?0:c<10?1:c<11?0:c<13?1:c<14?0:1){s.adv(1);return true}return false}
 function sl_0(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==61){s.adv(1);return true}return false}
 function sl_1(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==8800){s.adv(1);return true}return false}
 function sl_2(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==124){s.adv(1);return true}return false}
 function sl_3(s){var p=s.pos,t=s._str;if(t.charCodeAt(p++)==85&&t.charCodeAt(p)==43){s.adv(2);return true}return false}
 function sl_4(s){var p=s.pos,t=s._str;if(t.charCodeAt(p++)==91&&t.charCodeAt(p)==58){s.adv(2);return true}return false}
 function sl_5(s){var p=s.pos,t=s._str;if(t.charCodeAt(p++)==58&&t.charCodeAt(p)==93){s.adv(2);return true}return false}
 function sl_6(s){var p=s.pos,t=s._str;if(t.charCodeAt(p++)==91&&t.charCodeAt(p++)==58&&t.charCodeAt(p)==94){s.adv(3);return true}return false}
 function sl_7(s){var p=s.pos,t=s._str;if(t.charCodeAt(p++)==58&&t.charCodeAt(p)==93){s.adv(2);return true}return false}
 function sl_8(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==45){s.adv(1);return true}return false}
 function sl_9(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==8745){s.adv(1);return true}return false}
 function sl_10(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==91){s.adv(1);return true}return false}
 function sl_11(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==93){s.adv(1);return true}return false}
 function sl_12(s){var p=s.pos,t=s._str;if(t.charCodeAt(p++)==91&&t.charCodeAt(p)==94){s.adv(2);return true}return false}
 function sl_13(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==93){s.adv(1);return true}return false}
 function sl_14(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==1013){s.adv(1);return true}return false}
 function sl_15(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==40){s.adv(1);return true}return false}
 function sl_16(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==41){s.adv(1);return true}return false}
 function sl_17(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==63){s.adv(1);return true}return false}
 function sl_18(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==123){s.adv(1);return true}return false}
 function sl_19(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==44){s.adv(1);return true}return false}
 function sl_20(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==125){s.adv(1);return true}return false}
 function sl_21(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==43){s.adv(1);return true}return false}
 function sl_22(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==42){s.adv(1);return true}return false}
 function sl_23(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==47){s.adv(1);return true}return false}
 function sl_24(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==32){s.adv(1);return true}return false}
 function sl_25(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==32){s.adv(1);return true}return false}
 function sl_26(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==59){s.adv(1);return true}return false}
 function sl_27(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==8592){s.adv(1);return true}return false}
 function sl_28(s){var p=s.pos,t=s._str;if(t.charCodeAt(p++)==38&&t.charCodeAt(p)==40){s.adv(2);return true}return false}
 function sl_29(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==41){s.adv(1);return true}return false}
 function sl_30(s){var p=s.pos,t=s._str;if(t.charCodeAt(p++)==33&&t.charCodeAt(p)==40){s.adv(2);return true}return false}
 function sl_31(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==41){s.adv(1);return true}return false}
 return RuleSet(s)?[true,buildTree(s)]:[false,s]}