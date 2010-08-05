parseJSON.names=['','JSON','Object','Array','String','Escape','UnicodeEscape','True','False','Null','Number','Minus','IntegralPart','FractionalPart','ExponentPart','S','_']
function parseJSON(out){var eof=false,s='',l=0,S=65536,T,M,F,D,R,tbl=[],x,pos=0,offset=0,buf=[],bufs=[],states=[],posns=[],c,equiv,ds,dp,failed=0,emp=0,emps=[];
equiv=rle_dec([9,0,2,1,2,0,1,1,18,0,1,2,1,3,1,4,8,3,1,5,1,6,1,7,1,8,1,9,1,10,9,11,1,12,6,3,4,13,1,14,1,13,20,3,1,15,1,16,1,17,3,3,1,18,1,19,2,13,1,20,1,21,5,3,1,22,1,3,1,23,3,3,1,24,1,25,1,26,1,27,5,3,1,28,1,3,1,29,55170,3,2048,30,8192,3])
function rle_dec(a){var r=[],i,l,n,x,ll;for(i=0,l=a.length;i<l;i+=2){n=a[i];x=a[i+1];r.length=ll=r.length+n;for(;n;n--)r[ll-n]=x}return r}
T=[,69632,143360,303104,208896,258048,274432,354822,375302,399878,417792,458752,462848,487424,507904,129542,557056,73728,64175,141,86016,10927,15023,19119,31407,35503,39599,43695,118784,64175,141,131072,,139264,,,154118,155648,19119,,6831,174598,176128,,19119,,6831,196608,64175,141,,212992,64175,141,,229376,233472,,23215,,249856,64175,141,,266240,,27311,,282624,,,,,141,,313862,315392,6831,326150,327680,,6831,339968,64175,141,,356352,,,,,376832,,,,,,401408,,,,,421888,47791,141,51887,438272,55983,141,450560,60079,141,,466944,,475136,,483328,,,495616,,503808,,512000,,,524288,528384,,,141,544768,,552960,,6831,565248,]
M=rle_dec([1,,16,139,1,81920,2,139,1,114688,11,139,1,135168,1,139,1,139264,1,147456,1,204800,1,139,1,159744,1,163840,1,167936,1,139,1,174598,1,180224,1,184320,1,188416,5,139,1,221184,2,139,1,225280,1,241664,1,229376,2,139,1,245760,3,139,1,262144,3,139,1,281094,1,139,1,286720,1,290816,1,294912,1,299008,1,139,1,307200,1,348160,1,139,1,319488,1,139,1,326150,1,331776,6,139,1,360448,1,364544,1,368640,2,139,1,380928,1,385024,1,389120,1,393216,2,139,1,405504,1,409600,1,413696,1,139,1,430080,2,139,1,434176,1,446464,9,139,1,479232,1,139,1,483328,1,494086,1,139,1,499712,1,139,1,503808,1,520192,2,139,1,543238,5,139,1,548864,1,139,1,552960,1,561152,1,139,1,140])
F=rle_dec([1,,17,140,1,77824,2,140,1,90112,1,94208,1,98304,1,102400,1,106496,1,110592,2,140,1,122880,4,140,1,139,2,140,1,192512,4,140,1,139,5,140,1,200704,3,140,1,217088,3,140,1,139,1,237568,3,140,1,253952,3,140,1,270336,10,140,1,335872,2,140,1,139,3,140,1,344064,19,140,1,425984,3,140,1,442368,2,140,1,454656,3,140,1,473606,3,140,1,139,4,140,1,139,1,140,1,516096,2,140,1,536576,1,532480,5,140,1,139,2,140,1,139])
D=[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,[[[[1,2]]]],,[[[[1,2]]]],[[[[28]]]],,,,[[[[12]]]],,,,[[[[6]]]],,[[[[12]]]],,,,,[[[[29]]]],,,,[[[[4]]]],,,[[[[2,3,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29]]]],,[[[[4]]]],,,,[[[[16]]]],,[[[[4,9,16,19,21,23,24,26]]]],,[[[[27]]]],,[[[[10,11,13,14,18,19,20,21]]]],[[[[10,11,13,14,18,19,20,21]]]],[[[[10,11,13,14,18,19,20,21]]]],[[[[10,11,13,14,18,19,20,21]]]],,[[[[15]]]],,,,,,[[[[6]]]],,,,,[[[[17]]]],,[[[[26]]]],[[[[24]]]],[[[[27]]]],[[[[20]]]],,[[[[21]]]],[[[[18]]]],[[[[22]]]],[[[[25]]]],[[[[20]]]],,[[[[23]]]],[[[[27]]]],[[[[22]]]],[[[[22]]]],,,,,,,,,,,[[[[7]]]],,[[[[10]]]],,[[[[11]]]],,[[[[10,11]]]],[[[[8]]]],,[[[[10,11]]]],,[[[[10,11]]]],,[[[[20]]]],[[[[14]]]],,,[[[[5]]]],[[[[7]]]],,,[[[[10,11]]]],,[[[[10,11]]]],,,[[[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]]]]].map(revive)
function revive(x){var i,l,state,j,l2,all=[],t,ts;for(i=0,l=x.length;i<l;i++){state=x[i];ts=[];for(j=0,l2=state.length;j<l2;j++){t=state[j];if(t[1]==l) ts.push([t[0],true]);else ts.push([t[0],t[1]==undefined?j+1:t[1]])}all.push(ts)}return dfa(all)
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
if(S&1024/*m_tossbuf*/)buf=bufs.pop()
if(S&512/*m_emitbuf*/)buf=bufs.pop().concat(buf)
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
