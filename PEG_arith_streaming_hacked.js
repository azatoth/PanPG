p_arith_streaming_v6_Expr_hacked.names=[,'Expr','Add','Mult','Num','S'];
function p_arith_streaming_v6_Expr_hacked(out){var eof=false,s='',l=0,S=24576,S2,T,M,F,R,tbl=[],x,pos=0,offset=0,buf=[],bufs=[],states=[],posns=[],chr,prof=[];
for(var i=0;i<1024;i++)prof[i]=0;
T=[,28672,32768,77824,122880,139264,155648,8364,12460,40964,47106,49152,20661,43,44,65536,20661,43,12460,16556,86020,92162,94208,20661,43,45,110592,20661,43,16556,126976,46,135168,46,143360,47,151552,47,4268,163840,48]
M=[,41,41,41,41,41,41,41,36864,41,40964,60100,41,41,61440,73728,41,41,41,81920,41,86020,105156,41,41,106496,118784,41,41,41,41,131072,41,135168,41,147456,41,151552,159748,41,42]
F=[,42,42,42,42,42,42,42,42,42,41,42,53248,42,42,42,69632,42,42,42,42,41,42,98304,42,42,42,114688,42,42,42,42,42,41,42,42,42,41,42,42,41]
return function(m,x){switch(m){
case 'chunk':s+=x;l=s.length;mainloop();
break
case 'eof':eof=true;
mainloop();
break
default:throw new Error('unhandled message: '+m)}
out('profile',prof)}
function mainloop(){for(;;){
t_block:{
if(S&4/*pushpos*/)prof[0]++,posns.push(pos)
prof[1]++,S2=T[S>>>12]
prof[2]++,states.push(S)
prof[3]++,S=S2}
if(S<49&&S>42){prof[4]++,chr=s.charCodeAt(pos);prof[5]++;switch(S){
case 43:R=true;pos--;break
case 44:R=(chr<43?0:chr<44?1:0),true;break
case 45:R=(chr<42?0:chr<43?1:0),true;break
case 46:R=(chr<48?0:chr<58?1:0),true;break
case 47:R=(chr<32?0:chr<33?1:0),true;break
case 48:R=(chr<0?0:1),true;break}
if(R)pos++
else{
if(prof[6]++,isNaN(chr)){if(eof)R=false;else{R=undefined;prof[7]++,S=states.pop();return}}
else{R=false}}
prof[8]++,S=states.pop()}
while(R!=undefined){
prof[9]++
if(prof[10]++,S==24576){return}if(prof[11]++,R){
if(S&4/*pushpos*/)prof[12]++,posns.pop()
prof[13]++,S=M[S>>>12]}
else{
if(S&4/*pushpos*/)prof[14]++,pos=posns.pop()
prof[15]++,S=F[S>>>12]}
if(S==41){R=true;prof[16]++,S=states.pop()}else if(S==42){R=false;prof[17]++,S=states.pop()}else R=undefined;
}}}
function emit(){}}
