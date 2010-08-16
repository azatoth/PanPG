parseJSON.names=['','JSON','Object','Array','String','Escape','UnicodeEscape','True','False','Null','Number','Minus','IntegralPart','FractionalPart','ExponentPart','S','_']
function parseJSON(out){var eof=false,s='',l=0,S=65536,T,M,F,D,R,tbl=[],x,pos=0,offset=0,buf=[],bufs=[],states=[],posns=[],c,equiv,ds,dp,failed=0,emp=0,emps=[];
equiv=rle_dec([9,0,2,1,2,0,1,1,18,0,1,2,1,3,1,4,8,3,1,5,1,6,1,7,1,8,1,9,1,10,9,11,1,12,6,3,4,13,1,14,1,13,20,3,1,15,1,16,1,17,3,3,1,18,1,19,2,13,1,20,1,21,5,3,1,22,1,3,1,23,3,3,1,24,1,25,1,26,1,27,5,3,1,28,1,3,1,29,55170,3,2048,30,8192,3])
function rle_dec(a){var r=[],i,l,n,x,ll;for(i=0,l=a.length;i<l;i+=2){n=a[i];x=a[i+1];r.length=ll=r.length+n;for(;n;n--)r[ll-n]=x}return r}
T=[,69632,376832,126976,442368,491520,507904,539654,195590,220166,237568,372736,348160,327680,278528,179206,557056,73728,64687,141,86016,11439,15535,19631,31919,36015,40111,44207,118784,64687,141,,138246,139264,7343,150534,151552,,7343,163840,64687,141,,180224,,188416,,196608,,,,,,221184,,,,,241664,48303,141,52399,258048,56495,141,270336,60591,141,282624,,,294912,299008,,,141,315392,,323584,,,335872,,344064,,352256,,360448,,368640,,,,388102,389120,19631,,7343,408582,409600,,19631,,7343,430080,64687,141,,446464,64687,141,,462848,466944,,23727,,483328,64687,141,,499712,,27823,,516096,,,,,141,540672,,,,,7343,565248,]
M=rle_dec([1,,16,139,1,81920,2,139,1,114688,10,139,1,131072,1,172032,1,139,1,143360,1,139,1,150534,1,155648,6,139,1,184320,1,139,1,188416,1,139,1,200704,1,204800,1,208896,1,212992,2,139,1,225280,1,229376,1,233472,1,139,1,249856,2,139,1,253952,1,266240,5,139,1,290816,2,139,1,314374,5,139,1,319488,1,139,1,323584,1,334854,1,139,1,339968,1,139,1,344064,3,139,1,364544,1,139,1,368640,1,139,1,380928,1,438272,1,139,1,393216,1,397312,1,401408,1,139,1,408582,1,413696,1,417792,1,421888,5,139,1,454656,2,139,1,458752,1,475136,1,462848,2,139,1,479232,3,139,1,495616,3,139,1,515078,1,139,1,520192,1,524288,1,528384,1,532480,2,139,1,544768,1,548864,1,552960,1,139,1,561152,1,139,1,140])
F=rle_dec([1,,17,140,1,77824,2,140,1,90112,1,94208,1,98304,1,102400,1,106496,1,110592,2,140,1,122880,3,140,1,159744,2,140,1,139,3,140,1,167936,5,140,1,139,12,140,1,245760,3,140,1,262144,2,140,1,274432,2,140,1,286720,2,140,1,307200,1,303104,5,140,1,139,4,140,1,139,1,140,1,359430,3,140,1,139,3,140,1,425984,4,140,1,139,5,140,1,434176,3,140,1,450560,3,140,1,139,1,471040,3,140,1,487424,3,140,1,503808,15,140,1,139])
D=function(a,i,l,b){for(i=0,l=a.length,b=[];i<l;i++)b[i]=revive(a[i]);return b}([,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,[[[[15]]]],,,,,,[[[[6]]]],,,,,[[[[17]]]],,[[[[1,2]]]],,[[[[1,2]]]],,[[[[21]]]],[[[[18]]]],[[[[22]]]],[[[[25]]]],[[[[20]]]],,[[[[23]]]],[[[[27]]]],[[[[22]]]],[[[[22]]]],,,,,,,,,,,,[[[[20]]]],[[[[14]]]],,,[[[[5]]]],[[[[7]]]],,,[[[[10,11]]]],,[[[[10,11]]]],[[[[8]]]],,[[[[10,11]]]],,[[[[10,11]]]],,[[[[10]]]],,[[[[11]]]],,[[[[10,11]]]],[[[[7]]]],[[[[28]]]],,,,[[[[12]]]],,,,[[[[6]]]],,[[[[12]]]],,,,,[[[[29]]]],,,,[[[[4]]]],,,[[[[2,3,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29]]]],,[[[[4]]]],,,,[[[[16]]]],,[[[[4,9,16,19,21,23,24,26]]]],,[[[[27]]]],,[[[[10,11,13,14,18,19,20,21]]]],[[[[10,11,13,14,18,19,20,21]]]],[[[[10,11,13,14,18,19,20,21]]]],[[[[10,11,13,14,18,19,20,21]]]],,,[[[[26]]]],[[[[24]]]],[[[[27]]]],[[[[20]]]],,,[[[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]]]]])
function revive(x){var i,l,state,j,l2,all=[],t,ts;if(!x)return;for(i=0,l=x.length;i<l;i++){state=x[i];ts=[];for(j=0,l2=state.length;j<l2;j++){t=state[j];if(t[1]==l) ts.push([t[0],true]);else ts.push([t[0],t[1]==undefined?j+1:t[1]])}all.push(ts)}return dfa(all)
 function dfa(ss){var i,l_ss,st,l_s,t,l_t,a,d=[],j,k,l;for(i=0,l_ss=ss.length;i<l_ss;i++){st=ss[i];a=[];for(j=0,l_s=st.length;j<l_s;j++){t=st[j];for(k=0,l_t=t[0].length;k<l_t;k++){a[t[0][k]]=t[1]==true?l_ss:t[1]}}for(j=0,l=a.length;j<l;j++)if(a[j]==undefined)a[j]=l_ss+1;d[i]=a}
  return function _dfa(st,i){var eq,pr;while(st<l_ss){eq=equiv[s.charCodeAt(i++)];st=d[pr=st][eq]}if(eq==undefined&&i>=s.length){ds=pr;dp=i-1;return}ds=0;dp=undefined;if(st==l_ss){pos=i;return true}return false}}}
if(typeof out=='string'){s=out;out=[];x=parseJSON(function(m,x,y){if(m=='fail')out=[false,x,y,s];if(m=='tree segment')out=out.concat(x)});x('chunk',s);x('eof');return out[0]===false?out:[true,{names:parseJSON.names,tree:out,input:s}]}
return function(m,x){if(failed){out('fail',pos,'parse already failed');return}
switch(m){
case 'chunk':s+=x;l=s.length;while(tbl.length<l+1)tbl.push([]);mainloop();break
case 'eof':eof=true;mainloop();break
default:throw new Error('unhandled message: '+m)}}
//mainloop
function mainloop(){for(;;){
if(dp==undefined&&(S>170||S<141))t_block:{
if(S&4/*pushpos*/)posns.push(pos)
if(S&2/*t_bufferout*/){bufs.push(buf);buf=[]}
if(S&8/*t_emitstate*/){if(emp<pos)buf.push(-1,pos-emp);emps.push(emp);emp=pos;buf.push(S>>>12)}if(S&1/*cache*/&&(x=tbl[pos-offset][S])!=undefined){if(x){R=true;pos=x[0];buf=x[1];emp=x[2]}else{R=false};break t_block}
}if(R==undefined){
// call DFA
if(D[S>>>12]){R=D[S>>>12](ds||0,dp||pos);if(R==undefined){if(eof){dp=undefined;R=false}else{out('ready');return}}}
else{states.push(S);S=T[S>>>12]}
if(S==141){R=true;S=states.pop()}}
while(R!=undefined){
if(S==65536){(R?emit:fail)();return}if(R){
if(S&1/*cache*/){tbl[posns[posns.length-1]][S]=[pos,buf,emp];buf=buf.slice()}
if(S&8/*t_emitstate*/){if(pos!=emp&&emp!=posns[posns.length-1]){buf.push(-1,pos-emp)}emp=emps.pop()}if(S&16/*m_emitstate*/)buf.push(S>>>12)
if(S&32/*m_emitclose*/)buf.push(-2)
if(S&128/*m_emitlength*/)buf.push(pos-posns[posns.length-1])
if(S&8/*t_emitstate*/){emp=pos}if(S&256/*m_resetpos*/)pos=posns[posns.length-1]
if(S&4/*pushpos*/)posns.pop()
if(S&512/*m_tossbuf*/)buf=bufs.pop()
if(S&1024/*m_emitbuf*/)buf=bufs.pop().concat(buf)
if(!bufs.length&&buf.length>64)emit()
S=M[S>>>12]}
else{
if(S&1/*cache*/)tbl[posns[posns.length-1]][S]=false
if(S&4/*pushpos*/)pos=posns.pop()
if(S&2048/*f_tossbuf*/)buf=bufs.pop()
if(S&8/*t_emitstate*/){emp=emps.pop()}
S=F[S>>>12]}
if(S==139){R=true;S=states.pop()}else if(S==140){R=false;S=states.pop()}else R=undefined;}}}
function emit(){var x=bufs.length?bufs[0]:buf;if(x.length){out('tree segment',x);if(bufs.length)bufs[0]=[];else buf=[]}}
function fail(s){out('fail',pos,s);failed=1}}
