function p_PEG_features_v4_S(str){
 var s=new State(str)
 function S(s,p){var c=s.pre('S',p);if(typeof c=='boolean')return c;return s.fin(c,p,_S(s,c))}
 function A(s,p){var c=s.pre('A',p);if(typeof c=='boolean')return c;return s.fin(c,p,_A(s,c))}
 function B(s,p){var c=s.pre('B',p);if(typeof c=='boolean')return c;return s.fin(c,p,_B(s,c))}
 function C(s,p){var c=s.pre('C',p);if(typeof c=='boolean')return c;return s.fin(c,p,_C(s,c))}
 var _S=ordChoice(seq(A,B),C)
 var _A=sl_0
 var _B=sl_1
 var _C=sl_2
 function sl_0(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==97){s.adv(1);return true}return false}
 function sl_1(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==98){s.adv(1);return true}return false}
 function sl_2(s){var p=s.pos,t=s._str;if(t.charCodeAt(p++)==97&&t.charCodeAt(p)==99){s.adv(2);return true}return false}
 return S(s)?[true,buildTree(s)]:[false,s]}