arith_stream.names=['Expr','Add','Mult','Num','S']

function arith_stream(out){var eof,s,l,S,T,M,F,tbl,x,pos,offset,R,buf,bufs,states,positions,chr
 eof=false
 s=''
 l=0
 S=5
 tbl=[[]]
 pos=0
 offset=0
 buf=[]
 bufs=[]
 states=[]
 positions=[]

 T=[33,34,38,55,57 // 0-4 in the case of each top-level rule, to test we simply proceed to test the first sub-expression.
   ,32 // 5 in the case of the shadow start rule, we begin by testing the actual start rule
   ,0,0,0,0,0,0,0,0,0,0 // 6-15 just filling the gap, these will never be used
   ,48 // 16 (a negative lookahead) proceeds to test its subexpression 48
   ,18,19,35,36 // 17-20 (Addn) these similarly just move to the subexpression
   ,22,23,39,40 // 21-24 (Mult)
   ,56,58 // 25-26 (Nmbr and S)
   ,0,0,0,0,0 // 27-31 filling the gap
   ,0,1,2,4,4,2 // 32-37 these are named rule expressions; to test them we move to the state corresponding to that rule
   ,3,4,4,3 // 38-41 more named rule expressions
   ,0,0,0,0,0,0 // 42-47 filling the gap
   ,64 // 48 this is a primitive expression (48 [^]), which has a corresponding primitive test
   ,65 // 49 this is ϵ which always succeeds consuming no input
   ,66,65 // 50-51 the rest of the primitive expressions in the Addn rule
   ,65,67,65 // 52-54 Mult rule
   ,68,68,69,69] // Nmbr and S
 M=[80,80,80,80,80 // 0-4 when a named rule succeeds, the success simply propagates up to whatever called it.
   ,-1 // 5 when the shadow start rule succeeds, we are done, so the state value returned here should not matter
   ,0,0,0,0,0,0,0,0,0,0 // 6-15
   ,80 // 16 if 16 succeeds, the enclosing expression (5 s ...) succeeds as well
   ,80,18,50,37 // 17-20 Addn, note that if 18 (the repetition sub-expression) succeeds, it loops back
   ,80,22,53,41 // 21-24 Mult
   ,80,80 // 25-26 repetition expressions in Num and S
   ,0,0,0,0,0 // 27-31
   ,16,80 // 32-33
   ,17,80,80,80 // 34-37 Addn
   ,21,80,80,80 // 38-41 Mult
   ,0,0,0,0,0,0 // 42-47
   ,81 // 48 if (48 [^]) succeeds, the negative lookahead (16 n (48 [^])) fails
   ,80,20,80 // 49-51 Addn when (49 ϵ) succeeds, the containing ordered choice expression succeeds
   ,80,24,80 // 52-54 Mult
   ,25,56,26,58] // 55-58 Nmbr and S
 F=[81,81,81,81,81 // 0-4
   ,81 // 5 the shadow start state fails just like any other (by reporting the error)
   ,0,0,0,0,0,0,0,0,0,0 // 6-15
   ,81 // 16
   ,-2,80,-3,-4 // 17-20 Addn, note that r can never fail, and neither can ordered choice ending with ϵ
   ,-7,80,-6,-5 // 21-24 Mult
   ,-8,-9 // 25-26 Nmbr and S
   ,0,0,0,0,0 // 27-31
   ,81,81 // 32-33
   ,81,49,51,81 // 34-37 Addn
   ,81,52,54,81 // 38-41 Mult
   ,0,0,0,0,0,0 // 42-47
   ,80 // 48 if (48 [^]) fails, the containing negative lookahead expression succeeds
   ,-10,81,-11 // 49-51 Addn
   ,-13,81,-12 // 52-54 Mult
   ,81,80,81,80] // 55-58 Nmbr and S

var
//                       1         2         3         4         5
//             01234567890123456789012345678901234567890123456789012345678
 t_lookup    ="000010----------00000000000-----0000000000------00000000000"
,t_pushpos   ="111110----------10100010000-----0000000000------00100100000"
,t_emitstate ="111100----------00000000000-----0000000000------00000000000"
,m_popstate  ="111111----------11111111111-----1111111111------11111111111"
,m_emitstate ="000010----------00000000000-----0000000000------00000000000"
,m_emitclose ="111110----------00000000000-----0000000000------00000000000"
,m_emitanon  ="000000----------00000000000-----0000000000------00100100000"
,m_emitlength="111110----------00000000000-----0000000000------00100100000"
,m_cache     ="000010----------00000000000-----0000000000------00000000000"
,m_cacheall  ="000000----------00000000000-----0000000000------00000000000"
,m_resetpos  ="000000----------00000000000-----0000000000------00000000000"
,m_poppos    ="111110----------10100010000-----0000000000------00100100000"
,m_emitbuf   ="000000----------00000000000-----0000000000------00100100000"
,m_tossbuf   ="000000----------00000000000-----0000000000------00000000000"
,f_popstate  ="111111----------11111111111-----1111111111------11111111111"
,f_cache     ="000010----------00000000000-----0000000000------00000000000"
,f_resetpos  ="111110----------10100010000-----0000000000------00100100000"
,f_poppos    ="111110----------10100010000-----0000000000------00100100000"
,f_tossbuf   ="000000----------00010001000-----0000000000------00100100000"

 function tpushpos(S){return t_pushpos[S]=='1'}
 function temitstate(S){return }
 function memitstate(S){return S==4}
 function memitclose(S){return S<5}
 function memitanon(S){return m_emitanon[S]=='1'}
 function memitlength(S){return m_emitlength[S]=='1'} function mresetpos(S){return m_resetpos[S]=='1'}
 function mpoppos(S){return m_poppos[S]=='1'} function memitbuf(S){return m_emitbuf[S]=='1'}
 function mtossbuf(S){return m_tossbuf[S]=='1'}
 function mcache(S){return S==4}
 function fresetpos(S){return f_resetpos[S]=='1'}
 function fpoppos(S){return f_poppos[S]=='1'}
 function ftossbuf(S){return f_tossbuf[S]=='1'}

 return function(m,x){
  switch(m){
   case 'chunk':
    // with a chunk message, we append the chunk to the string, store the new length, and start the main loop
    s+=x
    l=s.length
    while(tbl.length < l+1) tbl.push([])
    mainloop()
    break
   case 'eof':
    // on an eof message, we set the eof flag and start the main loop
    eof=true
    mainloop()
    break
   case 'clone':
   case 'stringify':
   default: throw new Error('unhandled')}}

 function mainloop(){
  for(;;){
   t_block:{
    if(S==4&&((x=tbl[pos-offset][S])!=undefined)){if(x){R=true;pos=x[0]}else{R=false}break t_block}
    states[states.length]=S
    if(S==19||S==23){bufs.push(buf);buf=[]}
    if(tpushpos(S)) positions.push(pos)
    if(S<4) buf.push(S)
    S=T[S]}
   if(S&64){ // if we are in a primitive test state (64-69 in this grammar)
    chr=s.charCodeAt(pos)
    switch(S){
     case 64:R=chr<0xD800&&chr>0xDFFF;break
     case 65:R=true;pos--;break
     case 66:R=chr==0x2B;break
     case 67:R=chr==0x2A;break
     case 68:R=chr<0x3A&&chr>0x2F;break // '0'-'9' == 0x30-0x39
     case 69:R=chr==0x20;break}
    if(R)pos++
    else{
     if(isNaN(chr)){
      if(eof) R=false
      else{
       emit()
       R=undefined
       S=states.pop()
       emit()
       out('ready')
       return}}
     else{
      if(chr>=0xD800&&chr<=0xDFFF)throw new Error('surrogate characters not yet handled here')
      else R=false}}
    S=states.pop()}
   while(R!==undefined){
    if(S==5){emit();return}
    if(R){
     if(memitstate(S)) buf.push(S)
     if(memitclose(S)) buf.push(-2)
     if(memitanon(S)) buf.push(-1)
     if(memitlength(S)) buf.push(pos-positions[positions.length-1])
     if(mcache(S)) tbl[positions[positions.length-1]][S]=[pos]
     if(mresetpos(S)) pos=positions[positions.length-1]
     if(mpoppos(S)) positions.pop()
     if(memitbuf(S)) buf=bufs.pop().concat(buf)
     if(mtossbuf(S)) buf=bufs.pop()
     if(!bufs.length&&buf.length>64)emit()
     S=M[S]}
    else{
     if(S==4) tbl[positions[positions.length-1]][S]=false
     if(fresetpos(S)) pos=positions[positions.length-1]
     if(fpoppos(S)) positions.pop()
     if(ftossbuf(S)) buf=bufs.pop()
     S=F[S]}
    if(S==80){R=true;S=states.pop()}
    else if(S==81){R=false;S=states.pop()}
    else R=undefined}}}
 function emit(){var x
  x=bufs.length?bufs[0]:buf
  if(x.length){
   out('tree segment',x)
   if(bufs.length)bufs[0]=[]; else buf=[]}}}