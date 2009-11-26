function p_PEG_features_v5_S(str){
 var tbl=[],pos=0,l=str.length+1,c;while(l--)tbl.push({});l=str.length
 function S(a){var x,c,p=pos;if(x=tbl[p]['S']){pos=x[1];a.push([p,'S']);return 1}if(x==false)return 0;c=[];return fin(c,p,'S',_S(c),a)}
 function A(a){var x,c,p=pos;if(x=tbl[p]['A']){pos=x[1];a.push([p,'A']);return 1}if(x==false)return 0;c=[];return fin(c,p,'A',_A(c),a)}
 function B(a){var x,c,p=pos;if(x=tbl[p]['B']){pos=x[1];a.push([p,'B']);return 1}if(x==false)return 0;c=[];return fin(c,p,'B',_B(c),a)}
 function C(a){var x,c,p=pos;if(x=tbl[p]['C']){pos=x[1];a.push([p,'C']);return 1}if(x==false)return 0;c=[];return fin(c,p,'C',_C(c),a)}
 function D(a){var x,c,p=pos;if(x=tbl[p]['D']){pos=x[1];a.push([p,'D']);return 1}if(x==false)return 0;c=[];return fin(c,p,'D',_D(c),a)}
 function E(a){var x,c,p=pos;if(x=tbl[p]['E']){pos=x[1];a.push([p,'E']);return 1}if(x==false)return 0;c=[];return fin(c,p,'E',_E(c),a)}
 function F(a){var x,c,p=pos;if(x=tbl[p]['F']){pos=x[1];a.push([p,'F']);return 1}if(x==false)return 0;c=[];return fin(c,p,'F',_F(c),a)}
 var _S=o(q(A,B),r(1,1,C),q(D,r(0,0,E)),F)
 var _A=sl_0
 var _B=sl_1
 var _C=q(sl_2,n(cs_0))
 var _D=q(sl_3,n(sl_4),p(sl_5))
 var _E=sl_6
 var _F=cs_1
 function cs_0(){var c;if(pos==l)return false;c=str.charCodeAt(pos);if(c<0?0:1){pos++;return true}return false}
 function cs_1(){var c;if(pos==l)return false;c=str.charCodeAt(pos);if(c<0?0:1){pos++;return true}return false}
 function sl_0(){var p=pos;if(str.charCodeAt(p)==97){pos+=1;return true}return false}
 function sl_1(){var p=pos;if(str.charCodeAt(p)==98){pos+=1;return true}return false}
 function sl_2(){var p=pos;if(str.charCodeAt(p++)==97&&str.charCodeAt(p)==99){pos+=2;return true}return false}
 function sl_3(){var p=pos;if(str.charCodeAt(p)==97){pos+=1;return true}return false}
 function sl_4(){var p=pos;if(str.charCodeAt(p)==98){pos+=1;return true}return false}
 function sl_5(){var p=pos;if(str.charCodeAt(p)==99){pos+=1;return true}return false}
 function sl_6(){var p=pos;if(str.charCodeAt(p)==99){pos+=1;return true}return false}
 function fin(c,p,n,r,a){if(r)a.push([p,n]);tbl[p][n]=r?[true,pos,c]:false;return r}
 function e(){return true}
 function o(){var args=arguments;return function(c){var i,l;for(i=0,l=args.length;i<l;i++)if(args[i](c))return true;return false}}
 function q(){var args=arguments;return function(c){var i,l,cp=pos,cl=c.length;for(i=0,l=args.length;i<l;i++)if(!args[i](c)){pos=cp;t(c,cl);return false}return true}}
 function r(m,n,f){return function(c){var i=0,cp=pos,cl=c.length;while(i<m){i++;if(!f(c)){pos=cp;t(c,cl);return false}}cl=c.length;while(i++<n||n==0)if(!f(c))return true;return true}}
 function n(f){return function(){var p=pos,x=f([]);pos=p;return !x}}
 function p(f){return function(){var p=pos,x=f([]);pos=p;return x}}
 function t(a,n){while(a.length>n)a.pop()}
 function b(p,n){var i,l,x=tbl[p][n],c=x[2],o={name:n,start:p,end:x[1],cn:[],_str:str};for(i=0,l=c.length;i<l;i++){o.cn.push(b(c[i][0],c[i][1]))}return o}
 return S([])&&pos==l?[true,b(0,'S')]:[false,tbl]}