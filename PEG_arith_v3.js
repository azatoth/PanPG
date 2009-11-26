function p_arith_Expr(str){
 var s=new State(str)
 function Expr(s,p){var c=s.pre('Expr',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Expr(s,c))}
 function Add(s,p){var c=s.pre('Add',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Add(s,c))}
 function Mult(s,p){var c=s.pre('Mult',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Mult(s,c))}
 function Num(s,p){var c=s.pre('Num',p);if(typeof c=='boolean')return c;return s.fin(c,p,_Num(s,c))}
 function S(s,p){var c=s.pre('S',p);if(typeof c=='boolean')return c;return s.fin(c,p,_S(s,c))}
 var _Expr=Add
 var _Add=seq(Mult,rep(0,0,seq(rep(0,1,S),re(/^\+/),rep(0,1,S),Mult)))
 var _Mult=seq(Num,rep(0,0,seq(rep(0,1,S),re(/^\*/),rep(0,1,S),Num)))
 var _Num=ordChoice(re(/^0/),seq(re(/^[1-9]/),rep(0,0,re(/^[0-9]/))))
 var _S=rep(1,0,re(/^[ ]/))
 if(Expr(s) && s.pos==str.length) return [true, buildTree(s)]
 return [false, s]
}