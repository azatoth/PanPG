p_ES5_v6_default_identifier.names=['','IdentifierName','IdentifierPart','IdentifierStart','Letter','RS','UnicodeEscapeSequence','HexDigit','_'];
function p_ES5_v6_default_identifier(out){var eof=false,s='',l=0,S=32768,T,M,F,R,tbl=[],x,pos=0,offset=0,buf=[],bufs=[],states=[],posns=[],chr;
T=[,36864,118784,49152,77824,81920,86208,114688,131072,15023,45056,10927,53248,19119,38,39,69632,23215,27311,40,41,42,94208,31407,31407,31407,31407,37,43,122880,15023,44,6831,139264,45]
M=[,35,35,35,35,35,35,35,35,40960,35,45056,35,35,35,35,35,73728,35,35,35,92678,35,98304,102400,106496,110592,35,35,35,35,35,135168,35,36]
F=[,36,36,36,36,36,36,36,36,36,36,35,36,57536,61632,68102,36,36,36,36,36,36,36,36,36,36,36,36,36,36,127168,36,36,36,35]
return function(m,x){switch(m){
case 'chunk':s+=x;l=s.length;while(tbl.length<l+1)tbl.push([]);mainloop();break
case 'eof':eof=true;mainloop();break
default:throw new Error('unhandled message: '+m)}}
function mainloop(){for(;;){
if(S>45||S<37)t_block:{
if(S&4/*pushpos*/)posns.push(pos)
if(S&2/*t_bufferout*/){bufs.push(buf);buf=[]}
if(S&1/*cache*/&&(x=tbl[pos-offset][S])!=undefined){if(x){R=true;pos=x[0];buf=x[1]}else{R=false}break t_block}
if(S&8/*t_emitstate*/){buf.push(S>>>12)}
states.push(S)
S=T[S>>>12]}
if(S<46&&S>36){
if(S==37)R=true
else{
chr=s.charCodeAt(pos);if(isNaN(chr)){if(eof)R=false;else{emit();R=undefined;out('ready');return}}
else switch(S){
case 38:R=chr<36?0:chr<37?1:0;break
case 39:R=chr<95?0:chr<96?1:0;break
case 40:R=chr<97?0:chr<123?1:0;break
case 41:R=chr<92?0:chr<93?1:0;break
case 42:R=chr<117?0:chr<118?1:0;break
case 43:R=chr<48?0:chr<58?1:chr<65?0:chr<71?1:chr<97?0:chr<103?1:0;break
case 44:R=chr<48?0:chr<58?1:chr<95?0:chr<96?1:chr<768?0:chr<880?1:chr<1155?0:chr<1160?1:chr<1425?0:chr<1470?1:chr<1471?0:chr<1472?1:chr<1473?0:chr<1475?1:chr<1476?0:chr<1478?1:chr<1479?0:chr<1480?1:chr<1552?0:chr<1563?1:chr<1611?0:chr<1631?1:chr<1632?0:chr<1642?1:chr<1648?0:chr<1649?1:chr<1750?0:chr<1757?1:chr<1759?0:chr<1765?1:chr<1767?0:chr<1769?1:chr<1770?0:chr<1774?1:chr<1776?0:chr<1786?1:chr<1809?0:chr<1810?1:chr<1840?0:chr<1867?1:chr<1958?0:chr<1969?1:chr<1984?0:chr<1994?1:chr<2027?0:chr<2036?1:chr<2305?0:chr<2308?1:chr<2364?0:chr<2365?1:chr<2366?0:chr<2382?1:chr<2385?0:chr<2389?1:chr<2402?0:chr<2404?1:chr<2406?0:chr<2416?1:chr<2433?0:chr<2436?1:chr<2492?0:chr<2493?1:chr<2494?0:chr<2501?1:chr<2503?0:chr<2505?1:chr<2507?0:chr<2510?1:chr<2519?0:chr<2520?1:chr<2530?0:chr<2532?1:chr<2534?0:chr<2544?1:chr<2561?0:chr<2564?1:chr<2620?0:chr<2621?1:chr<2622?0:chr<2627?1:chr<2631?0:chr<2633?1:chr<2635?0:chr<2638?1:chr<2641?0:chr<2642?1:chr<2662?0:chr<2674?1:chr<2677?0:chr<2678?1:chr<2689?0:chr<2692?1:chr<2748?0:chr<2749?1:chr<2750?0:chr<2758?1:chr<2759?0:chr<2762?1:chr<2763?0:chr<2766?1:chr<2786?0:chr<2788?1:chr<2790?0:chr<2800?1:chr<2817?0:chr<2820?1:chr<2876?0:chr<2877?1:chr<2878?0:chr<2885?1:chr<2887?0:chr<2889?1:chr<2891?0:chr<2894?1:chr<2902?0:chr<2904?1:chr<2914?0:chr<2916?1:chr<2918?0:chr<2928?1:chr<2946?0:chr<2947?1:chr<3006?0:chr<3011?1:chr<3014?0:chr<3017?1:chr<3018?0:chr<3022?1:chr<3031?0:chr<3032?1:chr<3046?0:chr<3056?1:chr<3073?0:chr<3076?1:chr<3134?0:chr<3141?1:chr<3142?0:chr<3145?1:chr<3146?0:chr<3150?1:chr<3157?0:chr<3159?1:chr<3170?0:chr<3172?1:chr<3174?0:chr<3184?1:chr<3202?0:chr<3204?1:chr<3260?0:chr<3261?1:chr<3262?0:chr<3269?1:chr<3270?0:chr<3273?1:chr<3274?0:chr<3278?1:chr<3285?0:chr<3287?1:chr<3298?0:chr<3300?1:chr<3302?0:chr<3312?1:chr<3330?0:chr<3332?1:chr<3390?0:chr<3397?1:chr<3398?0:chr<3401?1:chr<3402?0:chr<3406?1:chr<3415?0:chr<3416?1:chr<3426?0:chr<3428?1:chr<3430?0:chr<3440?1:chr<3458?0:chr<3460?1:chr<3530?0:chr<3531?1:chr<3535?0:chr<3541?1:chr<3542?0:chr<3543?1:chr<3544?0:chr<3552?1:chr<3570?0:chr<3572?1:chr<3633?0:chr<3634?1:chr<3636?0:chr<3643?1:chr<3655?0:chr<3663?1:chr<3664?0:chr<3674?1:chr<3761?0:chr<3762?1:chr<3764?0:chr<3770?1:chr<3771?0:chr<3773?1:chr<3784?0:chr<3790?1:chr<3792?0:chr<3802?1:chr<3864?0:chr<3866?1:chr<3872?0:chr<3882?1:chr<3893?0:chr<3894?1:chr<3895?0:chr<3896?1:chr<3897?0:chr<3898?1:chr<3902?0:chr<3904?1:chr<3953?0:chr<3973?1:chr<3974?0:chr<3976?1:chr<3984?0:chr<3992?1:chr<3993?0:chr<4029?1:chr<4038?0:chr<4039?1:chr<4139?0:chr<4159?1:chr<4160?0:chr<4170?1:chr<4182?0:chr<4186?1:chr<4190?0:chr<4193?1:chr<4194?0:chr<4197?1:chr<4199?0:chr<4206?1:chr<4209?0:chr<4213?1:chr<4226?0:chr<4238?1:chr<4239?0:chr<4250?1:chr<4959?0:chr<4960?1:chr<5906?0:chr<5909?1:chr<5938?0:chr<5941?1:chr<5970?0:chr<5972?1:chr<6002?0:chr<6004?1:chr<6070?0:chr<6100?1:chr<6109?0:chr<6110?1:chr<6112?0:chr<6122?1:chr<6155?0:chr<6158?1:chr<6160?0:chr<6170?1:chr<6313?0:chr<6314?1:chr<6432?0:chr<6444?1:chr<6448?0:chr<6460?1:chr<6470?0:chr<6480?1:chr<6576?0:chr<6593?1:chr<6600?0:chr<6602?1:chr<6608?0:chr<6618?1:chr<6679?0:chr<6684?1:chr<6912?0:chr<6917?1:chr<6964?0:chr<6981?1:chr<6992?0:chr<7002?1:chr<7019?0:chr<7028?1:chr<7040?0:chr<7043?1:chr<7073?0:chr<7083?1:chr<7088?0:chr<7098?1:chr<7204?0:chr<7224?1:chr<7232?0:chr<7242?1:chr<7248?0:chr<7258?1:chr<7616?0:chr<7655?1:chr<7678?0:chr<7680?1:chr<8255?0:chr<8257?1:chr<8276?0:chr<8277?1:chr<8400?0:chr<8413?1:chr<8417?0:chr<8418?1:chr<8421?0:chr<8433?1:chr<11744?0:chr<11776?1:chr<12330?0:chr<12336?1:chr<12441?0:chr<12443?1:chr<42528?0:chr<42538?1:chr<42607?0:chr<42608?1:chr<42620?0:chr<42622?1:chr<43010?0:chr<43011?1:chr<43014?0:chr<43015?1:chr<43019?0:chr<43020?1:chr<43043?0:chr<43048?1:chr<43136?0:chr<43138?1:chr<43188?0:chr<43205?1:chr<43216?0:chr<43226?1:chr<43264?0:chr<43274?1:chr<43302?0:chr<43310?1:chr<43335?0:chr<43348?1:chr<43561?0:chr<43575?1:chr<43587?0:chr<43588?1:chr<43596?0:chr<43598?1:chr<43600?0:chr<43610?1:chr<64286?0:chr<64287?1:chr<65024?0:chr<65040?1:chr<65056?0:chr<65063?1:chr<65075?0:chr<65077?1:chr<65101?0:chr<65104?1:chr<65296?0:chr<65306?1:chr<65343?0:chr<65344?1:chr<66045?0:chr<66046?1:chr<66720?0:chr<66730?1:chr<68097?0:chr<68100?1:chr<68101?0:chr<68103?1:chr<68108?0:chr<68112?1:chr<68152?0:chr<68155?1:chr<68159?0:chr<68160?1:chr<119141?0:chr<119146?1:chr<119149?0:chr<119155?1:chr<119163?0:chr<119171?1:chr<119173?0:chr<119180?1:chr<119210?0:chr<119214?1:chr<119362?0:chr<119365?1:chr<120782?0:chr<120832?1:chr<917760?0:chr<918000?1:0;break
case 45:R=chr<0?0:1;break}
if(R)pos++
if(chr>=0xD800&&chr<=0xDFFF)throw new Error('surrogate characters not yet handled here');}
S=states.pop()}
while(R!=undefined){
if(S==32768){(R?emit:fail)();return}if(R){
if(S&16/*m_emitstate*/)buf.push(S>>>12)
if(S&32/*m_emitclose*/)buf.push(-2)
if(S&64/*m_emitanon*/)buf.push(-1)
if(S&128/*m_emitlength*/)buf.push(pos-posns[posns.length-1])
if(S&1/*cache*/)tbl[posns[posns.length-1]][S]=[pos,buf]
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
if(S==35){R=true;S=states.pop()}else if(S==36){R=false;S=states.pop()}else R=undefined;
}}}
function emit(){var x=bufs.length?bufs[0]:buf;if(x.length){out('tree segment',x);if(bufs.length)bufs[0]=[];else buf=[]}}
function fail(){out('fail',pos)}}
