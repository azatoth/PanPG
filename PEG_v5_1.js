function p_PEG_v5_1_RuleSet(str){
 var tbl=[],pos=0,l=str.length+1,c,d
 while(l--)tbl.push({})
 d={PropSpec:f('PropSpec',o(u('BinaryUnicodeProperty'),q(u('UnicodeProperty'),o(sl_0,sl_1),u('PropVal')),q(u('ScriptOrCatPropVal'),r(0,0,q(sl_2,u('ScriptOrCatPropVal'))))))
   ,BinaryUnicodeProperty:f('BinaryUnicodeProperty',u('UnicodeProperty'))
   ,UnicodeProperty:f('UnicodeProperty',r(1,0,cs_0))
   ,PropVal:f('PropVal',r(1,0,cs_1))
   ,ScriptOrCatPropVal:f('ScriptOrCatPropVal',r(1,0,cs_2))
   ,UPlusCodePoint:f('UPlusCodePoint',q(sl_3,r(4,6,u('HEXDIG'))))
   ,PositiveSpec:f('PositiveSpec',q(sl_4,u('PropSpec'),sl_5))
   ,NegativeSpec:f('NegativeSpec',q(sl_6,u('PropSpec'),sl_7))
   ,CodePoint:f('CodePoint',o(u('UPlusCodePoint'),u('CodePointLit')))
   ,CodePointLit:f('CodePointLit',cs_3)
   ,CodePointFrom:f('CodePointFrom',u('CodePoint'))
   ,CodePointTo:f('CodePointTo',u('CodePoint'))
   ,CodePointRange:f('CodePointRange',q(u('CodePointFrom'),sl_8,u('CodePointTo')))
   ,UnicodePropSpec:f('UnicodePropSpec',o(u('PositiveSpec'),u('NegativeSpec')))
   ,CodePointExpr:f('CodePointExpr',o(u('UnicodePropSpec'),u('CodePointRange'),u('CodePoint')))
   ,CharSetUnion:f('CharSetUnion',r(1,0,q(u('CodePointExpr'),r(0,1,u('S')))))
   ,CharSetIntersection:f('CharSetIntersection',q(u('CharSetUnion'),r(0,0,q(r(0,1,u('S')),sl_9,r(0,1,u('S')),u('CharSetUnion')))))
   ,HEXDIG:f('HEXDIG',cs_4)
   ,CharSetDifference:f('CharSetDifference',q(u('CharSetIntersection'),r(0,0,q(r(0,1,u('S')),cs_5,r(0,1,u('S')),u('CharSetIntersection')))))
   ,CharEscape:f('CharEscape',o(q(cs_6,r(4,4,u('HEXDIG'))),q(cs_7,cs_8)))
   ,CharSetExpr:f('CharSetExpr',q(u('CharSetDifference'),r(0,1,u('S'))))
   ,StrLit:f('StrLit',q(cs_9,r(0,0,o(u('CharEscape'),cs_10)),cs_11))
   ,CharSet:f('CharSet',o(u('NegCharSet'),u('PosCharSet')))
   ,PosCharSet:f('PosCharSet',q(sl_10,r(0,1,u('S')),o(u('CharSetExpr'),e),sl_11))
   ,NegCharSet:f('NegCharSet',q(sl_12,r(0,1,u('S')),o(u('CharSetExpr'),e),sl_13))
   ,Empty:f('Empty',sl_14)
   ,AtomicExpr:f('AtomicExpr',o(u('Empty'),u('CharSet'),u('NonTerminal'),u('StrLit')))
   ,ParenthExpr:f('ParenthExpr',q(sl_15,u('OrdChoice'),sl_16))
   ,Replicand:f('Replicand',o(u('ParenthExpr'),u('AtomicExpr')))
   ,N:f('N',r(0,0,cs_12))
   ,M:f('M',r(0,0,cs_13))
   ,Optional:f('Optional',q(u('Replicand'),sl_17))
   ,MNRep:f('MNRep',q(u('Replicand'),sl_18,u('M'),r(0,1,q(sl_19,u('N'))),sl_20))
   ,PosRep:f('PosRep',q(u('Replicand'),sl_21))
   ,AnyRep:f('AnyRep',q(u('Replicand'),sl_22))
   ,SeqUnit:f('SeqUnit',o(u('AnyRep'),u('PosRep'),u('MNRep'),u('Optional'),u('ParenthExpr'),u('PosLookahead'),u('NegLookahead'),u('AtomicExpr')))
   ,Sequence:f('Sequence',r(1,0,q(u('SeqUnit'),r(0,1,u('S')))))
   ,IdentChar:f('IdentChar',cs_14)
   ,IdentStartChar:f('IdentStartChar',cs_15)
   ,OrdChoice:f('OrdChoice',q(r(0,1,u('S')),u('Sequence'),r(0,1,u('S')),r(0,0,q(sl_23,r(0,1,u('S')),u('Sequence'),r(0,1,u('S'))))))
   ,S:f('S',r(1,0,u('SpaceAtom')))
   ,SpaceAtom:f('SpaceAtom',o(sl_24,q(u('LB'),sl_25)))
   ,LB:f('LB',o(q(cs_16,cs_17),cs_18))
   ,NonTerminal:f('NonTerminal',q(u('IdentStartChar'),r(0,0,u('IdentChar'))))
   ,Comment:f('Comment',q(sl_26,r(0,0,cs_19),u('LB')))
   ,Rule:f('Rule',q(u('NonTerminal'),u('S'),sl_27,u('S'),u('OrdChoice')))
   ,RuleSet:f('RuleSet',o(q(o(u('Comment'),u('Rule')),r(0,0,q(r(1,0,u('LB')),o(u('Comment'),u('Rule'))))),e))
   ,PosLookahead:f('PosLookahead',q(sl_28,u('OrdChoice'),sl_29))
   ,NegLookahead:f('NegLookahead',q(sl_30,u('OrdChoice'),sl_31))}
 function cs_0(){var c;c=str.charCodeAt(pos);if(c<32?0:c<33?1:c<45?0:c<46?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0){pos++;return true}return false}
 function cs_1(){var c;c=str.charCodeAt(pos);if(c<32?0:c<33?1:c<45?0:c<46?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0){pos++;return true}return false}
 function cs_2(){var c;c=str.charCodeAt(pos);if(c<32?0:c<33?1:c<45?0:c<46?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0){pos++;return true}return false}
 function cs_3(){var c;c=str.charCodeAt(pos);if(c<0?0:c<32?1:c<33?0:c<93?1:c<94?0:c<160?1:c<161?0:c<5760?1:c<5761?0:c<6158?1:c<6159?0:c<8192?1:c<8203?0:c<8239?1:c<8240?0:c<8287?1:c<8288?0:c<8722?1:c<8723?0:c<12288?1:c<12289?0:1){pos++;return true}return false}
 function cs_4(){var c;c=str.charCodeAt(pos);if(c<48?0:c<58?1:c<65?0:c<71?1:0){pos++;return true}return false}
 function cs_5(){var c;c=str.charCodeAt(pos);if(c<8722?0:c<8723?1:0){pos++;return true}return false}
 function cs_6(){var c;c=str.charCodeAt(pos);if(c<92?0:c<93?1:0){pos++;return true}return false}
 function cs_7(){var c;c=str.charCodeAt(pos);if(c<92?0:c<93?1:0){pos++;return true}return false}
 function cs_8(){var c;c=str.charCodeAt(pos);if(c<102?0:c<103?1:c<110?0:c<111?1:c<114?0:c<115?1:c<116?0:c<117?1:c<118?0:c<119?1:0){pos++;return true}return false}
 function cs_9(){var c;c=str.charCodeAt(pos);if(c<34?0:c<35?1:0){pos++;return true}return false}
 function cs_10(){var c;c=str.charCodeAt(pos);if(c<0?0:c<34?1:c<35?0:c<92?1:c<93?0:1){pos++;return true}return false}
 function cs_11(){var c;c=str.charCodeAt(pos);if(c<34?0:c<35?1:0){pos++;return true}return false}
 function cs_12(){var c;c=str.charCodeAt(pos);if(c<48?0:c<58?1:0){pos++;return true}return false}
 function cs_13(){var c;c=str.charCodeAt(pos);if(c<48?0:c<58?1:0){pos++;return true}return false}
 function cs_14(){var c;c=str.charCodeAt(pos);if(c<48?0:c<58?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0){pos++;return true}return false}
 function cs_15(){var c;c=str.charCodeAt(pos);if(c<65?0:c<91?1:0){pos++;return true}return false}
 function cs_16(){var c;c=str.charCodeAt(pos);if(c<13?0:c<14?1:0){pos++;return true}return false}
 function cs_17(){var c;c=str.charCodeAt(pos);if(c<10?0:c<11?1:0){pos++;return true}return false}
 function cs_18(){var c;c=str.charCodeAt(pos);if(c<10?0:c<11?1:c<13?0:c<14?1:0){pos++;return true}return false}
 function cs_19(){var c;c=str.charCodeAt(pos);if(c<0?0:c<10?1:c<11?0:c<13?1:c<14?0:1){pos++;return true}return false}
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
 function f(n,f){return function(a){var x,c,p=pos;if(x=tbl[p][n]){pos=x[1];a.push([p,n]);return 1}if(x==false)return x;c=[];if(typeof f=='string')f=d[f];return fin(c,p,n,f(c),a)}}
 function e(){return true}
 function o(){var args=arguments;return function(c){var i,l;for(i=0,l=args.length;i<l;i++)if(args[i](c))return true;return false}}
 function q(){var args=arguments;return function(c){var i,l,cp=pos,cl=c.length;for(i=0,l=args.length;i<l;i++)if(!args[i](c)){pos=cp;t(c,cl);return false}return true}}
 function r(m,n,f){return function(c){var i=0,cp=pos,cl=c.length;while(i<m){i++;if(!f(c)){pos=cp;t(c,cl);return false}}cl=c.length;while(i++<n||n==0)if(!f(c))return true;return true}}
 function n(f){return function(){var p=pos,x=f([]);pos=p;return !x}}
 function p(f){return function(){var p=pos,x=f([]);pos=p;return x}}
 function t(a,n){while(a.length>n)a.pop()}
 function u(n){return function(a){return d[n](a)}}
 function b(p,n){var i,l,x=tbl[p][n],c=x[2],o={name:n,start:p,end:x[1],cn:[],_str:str};for(i=0,l=c.length;i<l;i++){o.cn.push(b(c[i][0],c[i][1]))}return o}
 return d.RuleSet([])?[true,b(0,'RuleSet')]:[false,tbl]}