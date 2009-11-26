function p_PEG_v5_RuleSet(str){
 var tbl=[],pos=0,l=str.length+1;while(l--)tbl.push({});l=str.length
 function PropSpec(a){var x,c,p=pos;if(x=tbl[p]['PropSpec']){pos=x[1];a.push([p,'PropSpec']);return 1}if(x==false)return 0;c=[];return fin(c,p,'PropSpec',_PropSpec(c),a)}
 function BinaryUnicodeProperty(a){var x,c,p=pos;if(x=tbl[p]['BinaryUnicodeProperty']){pos=x[1];a.push([p,'BinaryUnicodeProperty']);return 1}if(x==false)return 0;c=[];return fin(c,p,'BinaryUnicodeProperty',_BinaryUnicodeProperty(c),a)}
 function UnicodeProperty(a){var x,c,p=pos;if(x=tbl[p]['UnicodeProperty']){pos=x[1];a.push([p,'UnicodeProperty']);return 1}if(x==false)return 0;c=[];return fin(c,p,'UnicodeProperty',_UnicodeProperty(c),a)}
 function PropVal(a){var x,c,p=pos;if(x=tbl[p]['PropVal']){pos=x[1];a.push([p,'PropVal']);return 1}if(x==false)return 0;c=[];return fin(c,p,'PropVal',_PropVal(c),a)}
 function ScriptOrCatPropVal(a){var x,c,p=pos;if(x=tbl[p]['ScriptOrCatPropVal']){pos=x[1];a.push([p,'ScriptOrCatPropVal']);return 1}if(x==false)return 0;c=[];return fin(c,p,'ScriptOrCatPropVal',_ScriptOrCatPropVal(c),a)}
 function UPlusCodePoint(a){var x,c,p=pos;if(x=tbl[p]['UPlusCodePoint']){pos=x[1];a.push([p,'UPlusCodePoint']);return 1}if(x==false)return 0;c=[];return fin(c,p,'UPlusCodePoint',_UPlusCodePoint(c),a)}
 function PositiveSpec(a){var x,c,p=pos;if(x=tbl[p]['PositiveSpec']){pos=x[1];a.push([p,'PositiveSpec']);return 1}if(x==false)return 0;c=[];return fin(c,p,'PositiveSpec',_PositiveSpec(c),a)}
 function NegativeSpec(a){var x,c,p=pos;if(x=tbl[p]['NegativeSpec']){pos=x[1];a.push([p,'NegativeSpec']);return 1}if(x==false)return 0;c=[];return fin(c,p,'NegativeSpec',_NegativeSpec(c),a)}
 function CodePoint(a){var x,c,p=pos;if(x=tbl[p]['CodePoint']){pos=x[1];a.push([p,'CodePoint']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CodePoint',_CodePoint(c),a)}
 function CodePointLit(a){var x,c,p=pos;if(x=tbl[p]['CodePointLit']){pos=x[1];a.push([p,'CodePointLit']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CodePointLit',_CodePointLit(c),a)}
 function CodePointFrom(a){var x,c,p=pos;if(x=tbl[p]['CodePointFrom']){pos=x[1];a.push([p,'CodePointFrom']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CodePointFrom',_CodePointFrom(c),a)}
 function CodePointTo(a){var x,c,p=pos;if(x=tbl[p]['CodePointTo']){pos=x[1];a.push([p,'CodePointTo']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CodePointTo',_CodePointTo(c),a)}
 function CodePointRange(a){var x,c,p=pos;if(x=tbl[p]['CodePointRange']){pos=x[1];a.push([p,'CodePointRange']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CodePointRange',_CodePointRange(c),a)}
 function UnicodePropSpec(a){var x,c,p=pos;if(x=tbl[p]['UnicodePropSpec']){pos=x[1];a.push([p,'UnicodePropSpec']);return 1}if(x==false)return 0;c=[];return fin(c,p,'UnicodePropSpec',_UnicodePropSpec(c),a)}
 function CodePointExpr(a){var x,c,p=pos;if(x=tbl[p]['CodePointExpr']){pos=x[1];a.push([p,'CodePointExpr']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CodePointExpr',_CodePointExpr(c),a)}
 function CharSetUnion(a){var x,c,p=pos;if(x=tbl[p]['CharSetUnion']){pos=x[1];a.push([p,'CharSetUnion']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CharSetUnion',_CharSetUnion(c),a)}
 function CharSetIntersection(a){var x,c,p=pos;if(x=tbl[p]['CharSetIntersection']){pos=x[1];a.push([p,'CharSetIntersection']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CharSetIntersection',_CharSetIntersection(c),a)}
 function HEXDIG(a){var x,c,p=pos;if(x=tbl[p]['HEXDIG']){pos=x[1];a.push([p,'HEXDIG']);return 1}if(x==false)return 0;c=[];return fin(c,p,'HEXDIG',_HEXDIG(c),a)}
 function CharSetDifference(a){var x,c,p=pos;if(x=tbl[p]['CharSetDifference']){pos=x[1];a.push([p,'CharSetDifference']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CharSetDifference',_CharSetDifference(c),a)}
 function CharEscape(a){var x,c,p=pos;if(x=tbl[p]['CharEscape']){pos=x[1];a.push([p,'CharEscape']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CharEscape',_CharEscape(c),a)}
 function CharSetExpr(a){var x,c,p=pos;if(x=tbl[p]['CharSetExpr']){pos=x[1];a.push([p,'CharSetExpr']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CharSetExpr',_CharSetExpr(c),a)}
 function StrLit(a){var x,c,p=pos;if(x=tbl[p]['StrLit']){pos=x[1];a.push([p,'StrLit']);return 1}if(x==false)return 0;c=[];return fin(c,p,'StrLit',_StrLit(c),a)}
 function CharSet(a){var x,c,p=pos;if(x=tbl[p]['CharSet']){pos=x[1];a.push([p,'CharSet']);return 1}if(x==false)return 0;c=[];return fin(c,p,'CharSet',_CharSet(c),a)}
 function PosCharSet(a){var x,c,p=pos;if(x=tbl[p]['PosCharSet']){pos=x[1];a.push([p,'PosCharSet']);return 1}if(x==false)return 0;c=[];return fin(c,p,'PosCharSet',_PosCharSet(c),a)}
 function NegCharSet(a){var x,c,p=pos;if(x=tbl[p]['NegCharSet']){pos=x[1];a.push([p,'NegCharSet']);return 1}if(x==false)return 0;c=[];return fin(c,p,'NegCharSet',_NegCharSet(c),a)}
 function Empty(a){var x,c,p=pos;if(x=tbl[p]['Empty']){pos=x[1];a.push([p,'Empty']);return 1}if(x==false)return 0;c=[];return fin(c,p,'Empty',_Empty(c),a)}
 function AtomicExpr(a){var x,c,p=pos;if(x=tbl[p]['AtomicExpr']){pos=x[1];a.push([p,'AtomicExpr']);return 1}if(x==false)return 0;c=[];return fin(c,p,'AtomicExpr',_AtomicExpr(c),a)}
 function ParenthExpr(a){var x,c,p=pos;if(x=tbl[p]['ParenthExpr']){pos=x[1];a.push([p,'ParenthExpr']);return 1}if(x==false)return 0;c=[];return fin(c,p,'ParenthExpr',_ParenthExpr(c),a)}
 function Replicand(a){var x,c,p=pos;if(x=tbl[p]['Replicand']){pos=x[1];a.push([p,'Replicand']);return 1}if(x==false)return 0;c=[];return fin(c,p,'Replicand',_Replicand(c),a)}
 function N(a){var x,c,p=pos;if(x=tbl[p]['N']){pos=x[1];a.push([p,'N']);return 1}if(x==false)return 0;c=[];return fin(c,p,'N',_N(c),a)}
 function M(a){var x,c,p=pos;if(x=tbl[p]['M']){pos=x[1];a.push([p,'M']);return 1}if(x==false)return 0;c=[];return fin(c,p,'M',_M(c),a)}
 function Optional(a){var x,c,p=pos;if(x=tbl[p]['Optional']){pos=x[1];a.push([p,'Optional']);return 1}if(x==false)return 0;c=[];return fin(c,p,'Optional',_Optional(c),a)}
 function MNRep(a){var x,c,p=pos;if(x=tbl[p]['MNRep']){pos=x[1];a.push([p,'MNRep']);return 1}if(x==false)return 0;c=[];return fin(c,p,'MNRep',_MNRep(c),a)}
 function PosRep(a){var x,c,p=pos;if(x=tbl[p]['PosRep']){pos=x[1];a.push([p,'PosRep']);return 1}if(x==false)return 0;c=[];return fin(c,p,'PosRep',_PosRep(c),a)}
 function AnyRep(a){var x,c,p=pos;if(x=tbl[p]['AnyRep']){pos=x[1];a.push([p,'AnyRep']);return 1}if(x==false)return 0;c=[];return fin(c,p,'AnyRep',_AnyRep(c),a)}
 function SeqUnit(a){var x,c,p=pos;if(x=tbl[p]['SeqUnit']){pos=x[1];a.push([p,'SeqUnit']);return 1}if(x==false)return 0;c=[];return fin(c,p,'SeqUnit',_SeqUnit(c),a)}
 function Sequence(a){var x,c,p=pos;if(x=tbl[p]['Sequence']){pos=x[1];a.push([p,'Sequence']);return 1}if(x==false)return 0;c=[];return fin(c,p,'Sequence',_Sequence(c),a)}
 function IdentChar(a){var x,c,p=pos;if(x=tbl[p]['IdentChar']){pos=x[1];a.push([p,'IdentChar']);return 1}if(x==false)return 0;c=[];return fin(c,p,'IdentChar',_IdentChar(c),a)}
 function IdentStartChar(a){var x,c,p=pos;if(x=tbl[p]['IdentStartChar']){pos=x[1];a.push([p,'IdentStartChar']);return 1}if(x==false)return 0;c=[];return fin(c,p,'IdentStartChar',_IdentStartChar(c),a)}
 function OrdChoice(a){var x,c,p=pos;if(x=tbl[p]['OrdChoice']){pos=x[1];a.push([p,'OrdChoice']);return 1}if(x==false)return 0;c=[];return fin(c,p,'OrdChoice',_OrdChoice(c),a)}
 function S(a){var x,c,p=pos;if(x=tbl[p]['S']){pos=x[1];a.push([p,'S']);return 1}if(x==false)return 0;c=[];return fin(c,p,'S',_S(c),a)}
 function SpaceAtom(a){var x,c,p=pos;if(x=tbl[p]['SpaceAtom']){pos=x[1];a.push([p,'SpaceAtom']);return 1}if(x==false)return 0;c=[];return fin(c,p,'SpaceAtom',_SpaceAtom(c),a)}
 function LB(a){var x,c,p=pos;if(x=tbl[p]['LB']){pos=x[1];a.push([p,'LB']);return 1}if(x==false)return 0;c=[];return fin(c,p,'LB',_LB(c),a)}
 function NonTerminal(a){var x,c,p=pos;if(x=tbl[p]['NonTerminal']){pos=x[1];a.push([p,'NonTerminal']);return 1}if(x==false)return 0;c=[];return fin(c,p,'NonTerminal',_NonTerminal(c),a)}
 function Comment(a){var x,c,p=pos;if(x=tbl[p]['Comment']){pos=x[1];a.push([p,'Comment']);return 1}if(x==false)return 0;c=[];return fin(c,p,'Comment',_Comment(c),a)}
 function Rule(a){var x,c,p=pos;if(x=tbl[p]['Rule']){pos=x[1];a.push([p,'Rule']);return 1}if(x==false)return 0;c=[];return fin(c,p,'Rule',_Rule(c),a)}
 function RuleSet(a){var x,c,p=pos;if(x=tbl[p]['RuleSet']){pos=x[1];a.push([p,'RuleSet']);return 1}if(x==false)return 0;c=[];return fin(c,p,'RuleSet',_RuleSet(c),a)}
 function PosLookahead(a){var x,c,p=pos;if(x=tbl[p]['PosLookahead']){pos=x[1];a.push([p,'PosLookahead']);return 1}if(x==false)return 0;c=[];return fin(c,p,'PosLookahead',_PosLookahead(c),a)}
 function NegLookahead(a){var x,c,p=pos;if(x=tbl[p]['NegLookahead']){pos=x[1];a.push([p,'NegLookahead']);return 1}if(x==false)return 0;c=[];return fin(c,p,'NegLookahead',_NegLookahead(c),a)}
 var _PropSpec=o(BinaryUnicodeProperty,q(UnicodeProperty,o(sl_0,sl_1),PropVal),q(ScriptOrCatPropVal,r(0,0,q(sl_2,ScriptOrCatPropVal))))
 var _BinaryUnicodeProperty=UnicodeProperty
 var _UnicodeProperty=r(1,0,cs_0)
 var _PropVal=r(1,0,cs_1)
 var _ScriptOrCatPropVal=r(1,0,cs_2)
 var _UPlusCodePoint=q(sl_3,r(4,6,HEXDIG))
 var _PositiveSpec=q(sl_4,PropSpec,sl_5)
 var _NegativeSpec=q(sl_6,PropSpec,sl_7)
 var _CodePoint=o(UPlusCodePoint,CodePointLit)
 var _CodePointLit=cs_3
 var _CodePointFrom=CodePoint
 var _CodePointTo=CodePoint
 var _CodePointRange=q(CodePointFrom,sl_8,CodePointTo)
 var _UnicodePropSpec=o(PositiveSpec,NegativeSpec)
 var _CodePointExpr=o(UnicodePropSpec,CodePointRange,CodePoint)
 var _CharSetUnion=r(1,0,q(CodePointExpr,r(0,1,S)))
 var _CharSetIntersection=q(CharSetUnion,r(0,0,q(r(0,1,S),sl_9,r(0,1,S),CharSetUnion)))
 var _HEXDIG=cs_4
 var _CharSetDifference=q(CharSetIntersection,r(0,0,q(r(0,1,S),cs_5,r(0,1,S),CharSetIntersection)))
 var _CharEscape=o(q(cs_6,r(4,4,HEXDIG)),q(cs_7,cs_8))
 var _CharSetExpr=q(CharSetDifference,r(0,1,S))
 var _StrLit=q(cs_9,r(0,0,o(CharEscape,cs_10)),cs_11)
 var _CharSet=o(NegCharSet,PosCharSet)
 var _PosCharSet=q(sl_10,r(0,1,S),o(CharSetExpr,e),sl_11)
 var _NegCharSet=q(sl_12,r(0,1,S),o(CharSetExpr,e),sl_13)
 var _Empty=sl_14
 var _AtomicExpr=o(Empty,CharSet,NonTerminal,StrLit)
 var _ParenthExpr=q(sl_15,OrdChoice,sl_16)
 var _Replicand=o(ParenthExpr,AtomicExpr)
 var _N=r(0,0,cs_12)
 var _M=r(0,0,cs_13)
 var _Optional=q(Replicand,sl_17)
 var _MNRep=q(Replicand,sl_18,M,r(0,1,q(sl_19,N)),sl_20)
 var _PosRep=q(Replicand,sl_21)
 var _AnyRep=q(Replicand,sl_22)
 var _SeqUnit=o(AnyRep,PosRep,MNRep,Optional,ParenthExpr,PosLookahead,NegLookahead,AtomicExpr)
 var _Sequence=r(1,0,q(SeqUnit,r(0,1,S)))
 var _IdentChar=cs_14
 var _IdentStartChar=cs_15
 var _OrdChoice=q(r(0,1,S),Sequence,r(0,1,S),r(0,0,q(sl_23,r(0,1,S),Sequence,r(0,1,S))))
 var _S=r(1,0,SpaceAtom)
 var _SpaceAtom=o(sl_24,q(LB,sl_25))
 var _LB=o(q(cs_16,cs_17),cs_18)
 var _NonTerminal=q(IdentStartChar,r(0,0,IdentChar))
 var _Comment=q(sl_26,r(0,0,cs_19))
 var _Rule=q(NonTerminal,S,sl_27,S,OrdChoice)
 var _RuleSet=o(q(o(Comment,Rule),r(0,0,q(r(1,0,LB),o(Comment,Rule)))),e)
 var _PosLookahead=q(sl_28,OrdChoice,sl_29)
 var _NegLookahead=q(sl_30,OrdChoice,sl_31)
 function cs_0(){var c,x;if(pos==l)return false;c=g();x=c<65?c<33?c<32?0:1:c<45?0:c<46?1:0:c<96?c<91?1:c<95?0:1:c<97?0:c<123?1:0;if(x){pos++;return true}return false}
 function cs_1(){var c,x;if(pos==l)return false;c=g();x=c<65?c<33?c<32?0:1:c<45?0:c<46?1:0:c<96?c<91?1:c<95?0:1:c<97?0:c<123?1:0;if(x){pos++;return true}return false}
 function cs_2(){var c,x;if(pos==l)return false;c=g();x=c<65?c<33?c<32?0:1:c<45?0:c<46?1:0:c<96?c<91?1:c<95?0:1:c<97?0:c<123?1:0;if(x){pos++;return true}return false}
 function cs_3(){var c,x;if(pos==l)return false;c=g();x=c<6159?c<94?c<32?c<0?0:1:c<33?0:c<93?1:0:c<5760?c<160?1:c<161?0:1:c<5761?0:c<6158?1:0:c<8287?c<8203?c<8192?1:0:c<8239?1:c<8240?0:1:c<8723?c<8288?0:c<8722?1:0:c<12288?1:c<12289?0:1;if(x){pos++;return true}return false}
 function cs_4(){var c,x;if(pos==l)return false;c=g();x=c<58?c<48?0:1:c<65?0:c<71?1:0;if(x){pos++;return true}return false}
 function cs_5(){var c,x;if(pos==l)return false;c=g();x=c<8722?0:c<8723?1:0;if(x){pos++;return true}return false}
 function cs_6(){var c,x;if(pos==l)return false;c=g();x=c<92?0:c<93?1:0;if(x){pos++;return true}return false}
 function cs_7(){var c,x;if(pos==l)return false;c=g();x=c<92?0:c<93?1:0;if(x){pos++;return true}return false}
 function cs_8(){var c,x;if(pos==l)return false;c=g();x=c<114?c<103?c<102?0:1:c<110?0:c<111?1:0:c<117?c<115?1:c<116?0:1:c<118?0:c<119?1:0;if(x){pos++;return true}return false}
 function cs_9(){var c,x;if(pos==l)return false;c=g();x=c<34?0:c<35?1:0;if(x){pos++;return true}return false}
 function cs_10(){var c,x;if(pos==l)return false;c=g();x=c<35?c<0?0:c<34?1:0:c<92?1:c<93?0:1;if(x){pos++;return true}return false}
 function cs_11(){var c,x;if(pos==l)return false;c=g();x=c<34?0:c<35?1:0;if(x){pos++;return true}return false}
 function cs_12(){var c,x;if(pos==l)return false;c=g();x=c<48?0:c<58?1:0;if(x){pos++;return true}return false}
 function cs_13(){var c,x;if(pos==l)return false;c=g();x=c<48?0:c<58?1:0;if(x){pos++;return true}return false}
 function cs_14(){var c,x;if(pos==l)return false;c=g();x=c<91?c<58?c<48?0:1:c<65?0:1:c<96?c<95?0:1:c<97?0:c<123?1:0;if(x){pos++;return true}return false}
 function cs_15(){var c,x;if(pos==l)return false;c=g();x=c<65?0:c<91?1:0;if(x){pos++;return true}return false}
 function cs_16(){var c,x;if(pos==l)return false;c=g();x=c<13?0:c<14?1:0;if(x){pos++;return true}return false}
 function cs_17(){var c,x;if(pos==l)return false;c=g();x=c<10?0:c<11?1:0;if(x){pos++;return true}return false}
 function cs_18(){var c,x;if(pos==l)return false;c=g();x=c<11?c<10?0:1:c<13?0:c<14?1:0;if(x){pos++;return true}return false}
 function cs_19(){var c,x;if(pos==l)return false;c=g();x=c<11?c<0?0:c<10?1:0:c<13?1:c<14?0:1;if(x){pos++;return true}return false}
 function sl_0(){var p=pos;if(str.charCodeAt(p)==61){pos+=1;return true}return false}
 function sl_1(){var p=pos;if(str.charCodeAt(p)==8800){pos+=1;return true}return false}
 function sl_2(){var p=pos;if(str.charCodeAt(p)==124){pos+=1;return true}return false}
 function sl_3(){var p=pos;if(str.charCodeAt(p++)==85&&str.charCodeAt(p)==43){pos+=2;return true}return false}
 function sl_4(){var p=pos;if(str.charCodeAt(p++)==91&&str.charCodeAt(p)==58){pos+=2;return true}return false}
 function sl_5(){var p=pos;if(str.charCodeAt(p++)==58&&str.charCodeAt(p)==93){pos+=2;return true}return false}
 function sl_6(){var p=pos;if(str.charCodeAt(p++)==91&&str.charCodeAt(p++)==58&&str.charCodeAt(p)==94){pos+=3;return true}return false}
 function sl_7(){var p=pos;if(str.charCodeAt(p++)==58&&str.charCodeAt(p)==93){pos+=2;return true}return false}
 function sl_8(){var p=pos;if(str.charCodeAt(p)==45){pos+=1;return true}return false}
 function sl_9(){var p=pos;if(str.charCodeAt(p)==8745){pos+=1;return true}return false}
 function sl_10(){var p=pos;if(str.charCodeAt(p)==91){pos+=1;return true}return false}
 function sl_11(){var p=pos;if(str.charCodeAt(p)==93){pos+=1;return true}return false}
 function sl_12(){var p=pos;if(str.charCodeAt(p++)==91&&str.charCodeAt(p)==94){pos+=2;return true}return false}
 function sl_13(){var p=pos;if(str.charCodeAt(p)==93){pos+=1;return true}return false}
 function sl_14(){var p=pos;if(str.charCodeAt(p)==1013){pos+=1;return true}return false}
 function sl_15(){var p=pos;if(str.charCodeAt(p)==40){pos+=1;return true}return false}
 function sl_16(){var p=pos;if(str.charCodeAt(p)==41){pos+=1;return true}return false}
 function sl_17(){var p=pos;if(str.charCodeAt(p)==63){pos+=1;return true}return false}
 function sl_18(){var p=pos;if(str.charCodeAt(p)==123){pos+=1;return true}return false}
 function sl_19(){var p=pos;if(str.charCodeAt(p)==44){pos+=1;return true}return false}
 function sl_20(){var p=pos;if(str.charCodeAt(p)==125){pos+=1;return true}return false}
 function sl_21(){var p=pos;if(str.charCodeAt(p)==43){pos+=1;return true}return false}
 function sl_22(){var p=pos;if(str.charCodeAt(p)==42){pos+=1;return true}return false}
 function sl_23(){var p=pos;if(str.charCodeAt(p)==47){pos+=1;return true}return false}
 function sl_24(){var p=pos;if(str.charCodeAt(p)==32){pos+=1;return true}return false}
 function sl_25(){var p=pos;if(str.charCodeAt(p)==32){pos+=1;return true}return false}
 function sl_26(){var p=pos;if(str.charCodeAt(p)==59){pos+=1;return true}return false}
 function sl_27(){var p=pos;if(str.charCodeAt(p)==8592){pos+=1;return true}return false}
 function sl_28(){var p=pos;if(str.charCodeAt(p++)==38&&str.charCodeAt(p)==40){pos+=2;return true}return false}
 function sl_29(){var p=pos;if(str.charCodeAt(p)==41){pos+=1;return true}return false}
 function sl_30(){var p=pos;if(str.charCodeAt(p++)==33&&str.charCodeAt(p)==40){pos+=2;return true}return false}
 function sl_31(){var p=pos;if(str.charCodeAt(p)==41){pos+=1;return true}return false}
 function fin(c,p,n,r,a){if(r)a.push([p,n]);tbl[p][n]=r?[true,pos,c]:false;return r}
 function e(){return true}
 function o(){var args=arguments;return function(c){var i,l;for(i=0,l=args.length;i<l;i++)if(args[i](c))return true;return false}}
 function q(){var args=arguments;return function(c){var i,l,cp=pos,cl=c.length;for(i=0,l=args.length;i<l;i++)if(!args[i](c)){pos=cp;t(c,cl);return false}return true}}
 function r(m,n,f){return function(c){var i=0,cp=pos,cl=c.length;while(i<m){i++;if(!f(c)){pos=cp;t(c,cl);return false}}cl=c.length;while(i++<n||n==0)if(!f(c))return true;return true}}
 function n(f){return function(){var p=pos,x=f([]);pos=p;return !x}}
 function p(f){return function(){var p=pos,x=f([]);pos=p;return x}}
 function t(a,n){while(a.length>n)a.pop()}
 function g(){var c=str.charCodeAt(pos);return c}
 function b(p,n){var i,l,x=tbl[p][n],c=x[2],o={name:n,start:p,end:x[1],cn:[],_str:str};for(i=0,l=c.length;i<l;i++){o.cn.push(b(c[i][0],c[i][1]))}return o}
 return RuleSet([])&&pos==l?[true,b(0,'RuleSet')]:[false,tbl]}