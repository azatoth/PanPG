function p_arith_v4_Expr(str){
 var s=new State(str)
 function Expr(s,p){var c=s.pre('Expr',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Expr(s,c))}
 function Add(s,p){var c=s.pre('Add',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Add(s,c))}
 function Mult(s,p){var c=s.pre('Mult',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Mult(s,c))}
 function Num(s,p){var c=s.pre('Num',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Num(s,c))}
 function S(s,p){var c=s.pre('S',p);if(typeof c=='boolean')return c;return s.fin(c,p,_S(s,c))}
 _Expr=Add
 _Add=seq(Mult,rep(0,0,seq(rep(0,1,S),sl_0,rep(0,1,S),Mult)))
 _Mult=seq(Num,rep(0,0,seq(rep(0,1,S),sl_1,rep(0,1,S),Num)))
 _Num=ordChoice(sl_2,seq(cs_0,rep(0,0,cs_1)))
 _S=rep(1,0,cs_2)
 function cs_0(s){var c;c=s._str.charCodeAt(s.pos);if(c<49?0:c<58?1:0){s.adv(1);return true}return false}
 function cs_1(s){var c;c=s._str.charCodeAt(s.pos);if(c<48?0:c<58?1:0){s.adv(1);return true}return false}
 function cs_2(s){var c;c=s._str.charCodeAt(s.pos);if(c<32?0:c<33?1:0){s.adv(1);return true}return false}
 function sl_0(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==43){s.adv(1);return true}return false}
 function sl_1(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==42){s.adv(1);return true}return false}
 function sl_2(s){var p=s.pos,t=s._str;if(t.charCodeAt(p)==48){s.adv(1);return true}return false}
 return Expr(s)?[true,buildTree(s)]:[false,s]}