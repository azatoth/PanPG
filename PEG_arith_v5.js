function p_arith_v5_Expr(str){
 var tbl=[],pos=0,l=str.length+1;while(l--)tbl.push([]);l=str.length;
 function Expr(a){var c=[],p=pos;if(_Expr(c)){a.push([p,0]);tbl[p][0]=[,pos,c];return 1}return 0}
 function Add(a){var x,p=pos,c;if(x=tbl[p][1]){pos=x[1];a.push([p,1]);return 1}if(x==false){return 0}c=[];return fin(c,p,1,_Add(c),a)}
 function Mult(a){var x,p=pos,c;if(x=tbl[p][2]){pos=x[1];a.push([p,2]);return 1}if(x==false){return 0}c=[];return fin(c,p,2,_Mult(c),a)}
 function Num(a){var x,p=pos,c;if(x=tbl[p][3]){pos=x[1];a.push([p,3]);return 1}if(x==false){return 0}c=[];return fin(c,p,3,_Num(c),a)}
 function S(a){var x,p=pos,c;if(x=tbl[p][4]){pos=x[1];a.push([p,4]);return 1}if(x==false){return 0}c=[];return fin(c,p,4,_S(c),a)}
 var _Expr=Add
 var _Add=q(Mult,r(0,0,q(r(0,1,S),sl_0,r(0,1,S),Mult)))
 var _Mult=q(Num,r(0,0,q(r(0,1,S),sl_1,r(0,1,S),Num)))
 var _Num=o(sl_2,q(cs_0,r(0,0,cs_1)))
 var _S=r(1,0,cs_2)
 function cs_0(){var c,x;if(pos==l)return false;c=g(pos);x=c<49?0:c<58?1:0;if(x){pos++;return true}return false}
 function cs_1(){var c,x;if(pos==l)return false;c=g(pos);x=c<48?0:c<58?1:0;if(x){pos++;return true}return false}
 function cs_2(){var c,x;if(pos==l)return false;c=g(pos);x=c<32?0:c<33?1:0;if(x){pos++;return true}return false}
 function sl_0(){var p=pos;if(str.charCodeAt(p)==43){pos+=1;return true}return false}
 function sl_1(){var p=pos;if(str.charCodeAt(p)==42){pos+=1;return true}return false}
 function sl_2(){var p=pos;if(str.charCodeAt(p)==48){pos+=1;return true}return false}
 function fin(c,p,x,r,a){if(r)a.push([p,x]);tbl[p][x]=r?[true,pos,c]:false;return r}
 function e(){return true}
 function o(){var args=arguments;return function(c){var i,l;for(i=0,l=args.length;i<l;i++)if(args[i](c))return true;return false}}
 function q(){var args=arguments;return function(c){var i,l,cp=pos,cl=c.length;for(i=0,l=args.length;i<l;i++)if(!args[i](c)){pos=cp;t(c,cl);return false}return true}}
 function r(m,n,f){return function(c){var i=0,cp=pos,cl=c.length;while(i<m){i++;if(!f(c)){pos=cp;t(c,cl);return false}}cl=c.length;while(i++<n||n==0)if(!f(c))return true;return true}}
 function n(f){return function(){var p=pos,x=f([]);pos=p;return !x}}
 function p(f){return function(){var p=pos,x=f([]);pos=p;return x}}
 function t(a,n){if(a.length>n)a.splice(n)}
 function g(p){return str.charCodeAt(p)}
 function b(p,n){var x=tbl[p][n],c=[],a=[n,x[1]-p,c],y=x[2],i=0,l=y.length,z;for(;i<l;i++){z=y[i];if(z[0]>p)c.push([-1,z[0]-p]);c.push(b(z[0],z[1]));p=tbl[z[0]][z[1]][1]}if(p<x[1]&&c.count)c.push([-1,x[1]-p]);return a}
 return Expr([])&&pos==l?[true,b(0,0)]:[false,pos,tbl]}
p_arith_v5_Expr.names=['Expr','Add','Mult','Num','S'];