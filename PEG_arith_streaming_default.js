p_arith_streaming_v6_default_flags_Expr.names=['','Expr','Add','Mult','Num','S','_'];
function p_arith_streaming_v6_default_flags_Expr(out){var eof=false,s='',l=0,S=24576,T,M,F,R,tbl=[],x,pos=0,offset=0,buf=[],bufs=[],states=[],posns=[],c;
T=[,28672,32768,77824,125446,141830,155648,10927,15023,43526,45056,49152,23215,43,44,65536,23215,43,15023,19119,88582,90112,94208,23215,43,45,110592,23215,43,19119,126976,46,135168,46,143360,47,151552,47,6831,163840,48]
M=[,41,41,41,41,41,41,41,36864,41,43526,57540,41,41,61440,73728,41,41,41,81920,41,88582,102596,41,41,106496,118784,41,41,41,41,131072,41,135168,41,147456,41,151552,159744,41,42]
F=[,42,42,42,42,42,42,42,42,42,41,42,53248,42,42,42,69632,42,42,42,42,41,42,98304,42,42,42,114688,42,42,42,42,42,41,42,42,42,41,42,42,41]
if(typeof out=='string'){s=out;out=[];x=p_arith_streaming_v6_default_flags_Expr(function(m,x,y){if(m=='fail')out=[false,x,y];if(m=='tree segment')out=out.concat(x)});x('chunk',s);x('eof');return out[0]===false?out:[true,out]}
return function(m,x){switch(m){
case 'chunk':s+=x;l=s.length;while(tbl.length<l+1)tbl.push([]);mainloop();break
case 'eof':eof=true;mainloop();break
default:throw new Error('unhandled message: '+m)}}
function mainloop(){for(;;){
if(S>48||S<43)t_block:{
if(S&4/*pushpos*/)posns.push(pos)
if(S&2/*t_bufferout*/){bufs.push(buf);buf=[]}
if(S&1/*cache*/&&(x=tbl[pos-offset][S])!=undefined){if(x){R=true;pos=x[0];buf=x[1]}else{R=false}break t_block}
if(S&8/*t_emitstate*/){buf.push(S>>>12)}
states.push(S)
S=T[S>>>12]}
if(S<49&&S>42){
if(S==43)R=true
else{
c=s.charCodeAt(pos);if(isNaN(c)){if(eof)R=false;else{emit();R=undefined;out('ready');return}}
else switch(S){
case 44:R=c<43?0:c<44?1:0;break
case 45:R=c<42?0:c<43?1:0;break
case 46:R=c<48?0:c<58?1:0;break
case 47:R=c<32?0:c<33?1:0;break
case 48:R=c<0?0:c<55296?1:c<57344?0:c<65536?1:0;break}
if(R)pos++
else if(c>=0xD800&&c<=0xDFFF){if(c<0xDB80){if(pos+1==l){if(eof)return fail('unmatched surrogate at EOF');else{emit();R=undefined;out('ready');return}}else{c=(c&0x3FF)<<10 | s.charCodeAt(pos+1)&0x3FF | 0x10000
switch(S){case 48:R=c<65536?0:c<1114112?1:0;break
default:R=false}
if(R)pos+=2
}}else return fail('UTF-16 decoding error: unmatched low surrogate')}}
S=states.pop()}
while(R!=undefined){
if(S==24576){(R?emit:fail)();return}if(R){
if(S&1/*cache*/){tbl[posns[posns.length-1]][S]=[pos,buf];buf=buf.slice()}
if(S&16/*m_emitstate*/)buf.push(S>>>12)
if(S&32/*m_emitclose*/)buf.push(-2)
if(S&64/*m_emitanon*/)buf.push(-1)
if(S&128/*m_emitlength*/)buf.push(pos-posns[posns.length-1])
if(S&256/*m_resetpos*/)pos=posns[posns.length-1]
if(S&4/*pushpos*/)posns.pop()
if(S&1024/*m_tossbuf*/)buf=bufs.pop()
if(S&512/*m_emitbuf*/)buf=bufs.pop().concat(buf)
if(!bufs.length&&buf.length>64)emit()
S=M[S>>>12]}
else{
if(S&1/*cache*/)tbl[posns[posns.length-1]][S]=false
if(S&4/*pushpos*/)pos=posns.pop()
if(S&2048/*f_tossbuf*/)buf=bufs.pop()
S=F[S>>>12]}
if(S==41){R=true;S=states.pop()}else if(S==42){R=false;S=states.pop()}else R=undefined;
}}}
function emit(){var x=bufs.length?bufs[0]:buf;if(x.length){out('tree segment',x);if(bufs.length)bufs[0]=[];else buf=[]}}
function fail(s){out('fail',pos,s)}}
