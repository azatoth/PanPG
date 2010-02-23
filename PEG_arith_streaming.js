p_arith_streaming_v6_Expr.names=[,'Expr','Add','Mult','Num','S'];
function p_arith_streaming_v6_Expr(out){var eof=false,s='',l=0,S=24576,T,M,F,R,tbl=[],x,pos=0,offset=0,buf=[],bufs=[],states=[],posns=[],chr;
T=[,28672,32768,77824,122880,139264,155648,8364,12460,40964,47106,49152,20661,43,44,65536,20661,43,12460,16556,86020,92162,94208,20661,43,45,110592,20661,43,16556,126976,46,135168,46,143360,47,151552,47,4268,163840,48]
M=[,41,41,41,41,41,41,41,36864,41,40964,60100,41,41,61440,73728,41,41,41,81920,41,86020,105156,41,41,106496,118784,41,41,41,41,131072,41,135168,41,147456,41,151552,159748,41,42]
F=[,42,42,42,42,42,42,42,42,42,41,42,53248,42,42,42,69632,42,42,42,42,41,42,98304,42,42,42,114688,42,42,42,42,42,41,42,42,42,41,42,42,41]
return function(m,x){switch(m){
case 'chunk':s+=x;l=s.length;while(tbl.length<l+1)tbl.push([]);mainloop();break
case 'eof':eof=true;mainloop();break
default:throw new Error('unhandled message: '+m)}}
function mainloop(){for(;;){
t_block:{
if(S&4/*pushpos*/)posns.push(pos)
if(S&1/*cache*/&&(x=tbl[pos-offset][S])!=undefined){if(x){R=true;pos=x[0]}else{R=false};break t_block}
if(S&2/*t_bufferout*/){bufs.push(buf);buf=[]}
if(S&8/*t_emitstate*/){buf.push(S>>>12)}
states.push(S)
S=T[S>>>12]}
if(S<49&&S>42){chr=s.charCodeAt(pos);switch(S){
case 43:R=true;pos--;break
case 44:R=chr<43?0:chr<44?1:0;break
case 45:R=chr<42?0:chr<43?1:0;break
case 46:R=chr<48?0:chr<58?1:0;break
case 47:R=chr<32?0:chr<33?1:0;break
case 48:R=chr<0?0:1;break}
if(R)pos++
else{
if(isNaN(chr)){if(eof)R=false;else{emit();R=undefined;S=states.pop();out('ready');return}}
else{if(chr>=0xD800&&chr<=0xDFFF)throw new Error('surrogate characters not yet handled here');else R=false}}
S=states.pop()}
while(R!=undefined){
if(S==24576){emit();return}if(R){
if(S&16/*m_emitstate*/)buf.push(S>>>12)
if(S&32/*m_emitclose*/)buf.push(-2)
if(S&64/*m_emitanon*/)buf.push(-1)
if(S&128/*m_emitlength*/)buf.push(pos-posns[posns.length-1])
if(S&1/*cache*/)tbl[posns[posns.length-1]][S]=[pos,buf]
if(S&256/*m_resetpos*/)pos=posns[posns.length-1]
if(S&4/*pushpos*/)posns.pop()
if(S&512/*m_emitbuf*/)buf=bufs.pop().concat(buf)
if(S&1024/*m_tossbuf*/)buf=bufs.pop()
if(!bufs.length&&buf.length>64)emit()
S=M[S>>>12]}
else{
if(S&1/*cache*/)tbl[posns[posns.length-1]][S]=false
if(S&4/*pushpos*/)pos=posns.pop()
if(S&2048/*f_tossbuf*/)buf=bufs.pop()
S=F[S>>>12]}
if(S==41){R=true;S=states.pop()}else if(S==42){R=false;S=states.pop()}else R=undefined;
}}}
function emit(){var x=bufs.length?bufs[0]:buf;if(x.length){out('tree segment',x);if(bufs.length)bufs[0]=[];else buf=[]}}}
