function p_Expr(s,p){var c=s.pre('Expr',p);if(typeof c=='boolean')return c;return s.fin(c,p,p_Add(s,c))}
function p_Add(s,p){var c=s.pre('Add',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_Mult,rep(0,0,seq(rep(0,1,p_S),strLit("+"),rep(0,1,p_S),p_Mult)))(s,c))}
function p_Mult(s,p){var c=s.pre('Mult',p);if(typeof c=='boolean')return c;return s.fin(c,p,seq(p_Num,rep(0,0,seq(rep(0,1,p_S),strLit("*"),rep(0,1,p_S),p_Num)))(s,c))}
function p_Num(s,p){var c=s.pre('Num',p);if(typeof c=='boolean')return c;return s.fin(c,p,ordChoice(strLit("0"),seq(re(/^[1-9]/),rep(0,0,re(/^[0-9]/))))(s,c))}
function p_S(s,p){var c=s.pre('S',p);if(typeof c=='boolean')return c;return s.fin(c,p,rep(1,0,re(/^[ ]/))(s,c))}