function streaming_test(input){var output='',f,events=[],chunks
 f=p_arith_streaming_Expr(function(m,x,y){
  output+=pp(m)+'\n'+(x?pp(x)+'\n':'')
  if(m=='tree segment')events=events.concat(x)})
 chunks=['2','+2','*3']
 chunks=['2 ','+ 2 ','* 3']
 //f('chunk','78')
 //f('chunk','9')
 chunks.forEach(function(chunk){f('chunk',chunk)})
 f('eof')
 //return pp(chunks)+'\n\n'+output
 //return pp(treeFromEvents(events))
 //return pp(chunks)+'\n\n'+pp(events)
 return showTree(treeFromEvents(events),p_arith_streaming_Expr.names,chunks.join(''))
}

// see doc/incremental_parsing_2 for the explanation of this code

// Expr ← Add
//       0                                          + 0x00
// 
// Add ← (q Mult (r (q (o S ϵ) "+" (o S ϵ) Mult)))
//      0  1    2  3  4  5 6  7   8  9 A  B         + 0x10
// 
// Mult ← (q Num (r (q (o S ϵ) "*" (o S ϵ) Num)))
//       0  1   2  3  4  5 6  7   8  9 A  B         + 0x20
// 
// Num ← (q [0-9] (r [0-9]))
//      0  1     2  3                               + 0x30
// 
// S ← (q " " (r " "))
//    0  1   2  3                                   + 0x40

p_arith_streaming_Expr.names=['Expr','Add','Mult','Num','S']
function p_arith_streaming_Expr(out){var
 tbl=[[]],pos=0,l=0,s='',l2,c=[0],dbg_c=c,dbg_array=[],S=0,eof=0,eT,a=[],r,R,chr,f,nstrm=[],outbuf=[],cout // N.B. s = string, S = state, a = stack, r = result table entry, R = Boolean result, nstrm = indices of nostream exprs on stack (empty iff we are in streaming mode), outbuf = events emitted during streaming mode, cout = current bit of output (from the current expression for which we have a result)
 //     0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F
 ,T=[0x10,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 // 0x0_  (Expr)
    ,0x11,0x20,0x13,0x14,0x15,0x40,0x80,0x81,0x19,0x40,0x80,0x20,  -1,  -1,  -1,  -1 // 0x1_  (Add)
    ,0x21,0x30,0x23,0x24,0x25,0x40,0x80,0x82,0x29,0x40,0x80,0x30,  -1,  -1,  -1,  -1 // 0x2_  (Mult)
    ,0x31,0x83,0x33,0x83,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 // 0x3_  (Num)
    ,0x41,0x84,0x43,0x84,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1]// 0x4_  (S)
 ,M=[ 257,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 // 0x0_  (Expr)
    , 257,0x12, 257,0x13,0x17, 257, 257,0x18,0x1B, 257, 257, 257,  -1,  -1,  -1,  -1 // 0x1_  (Add)
    , 257,0x22, 257,0x23,0x27, 257, 257,0x28,0x2B, 257, 257, 257,  -1,  -1,  -1,  -1 // 0x2_  (Mult)
    , 257,0x32, 257,0x33,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 // 0x3_  (Num)
    , 257,0x42, 257,0x43,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1]// 0x4_  (S)
 ,F=[ 256,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 // 0x0_  (Expr)
    , 256, 256,  -1, 257, 256,0x16,  -1, 256, 256,0x1A,  -1, 256,  -1,  -1,  -1,  -1 // 0x1_  (Add)
    , 256, 256,  -1, 257, 256,0x26,  -1, 256, 256,0x2A,  -1, 256,  -1,  -1,  -1,  -1 // 0x2_  (Mult)
    , 256, 256,  -1, 257,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1 // 0x3_  (Num)
    , 256, 256,  -1, 257,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1]// 0x4_  (S)
 //     0123456789ABCDEF
 ,type="R               " // 0x0_ (Expr)
      +"qRrqoRLLoRLR    " // 0x1_ (Add)
      +"qRrqoRLLoRLR    " // 0x2_ (Mult)
      +"qLrL            " // 0x3_ (Num)
      +"qLrL            " // 0x4_ (S)
 // in actual generated parsers this can be stored more efficiently
 //     0123456789ABCDEF
 ,anon="0               " // Expr 0x00
      +"000000010000    " // Add  0x10
      +"000000010000    " // Mult 0x20
      +"0000            " // Num  0x20
      +"0000            " // S    0x40
 //         0123456789ABCDEF
 ,nostream="0               " // Expr 0x00
          +"00-11--00100    " // Add  0x10
          +"00-11--00100    " // Mult 0x20
          +"0000            " // Num  0x30
          +"0000            " // S    0x40
 return function p_arith_streaming_Expr_in(m,x,y,z){
  switch(m){
   case 'chunk':
    s+=x;l2=s.length+1;while(l2-->l)tbl[l2]=[];l=s.length
    mainloop();break
   case 'eof':
    eof=1;mainloop();break
   case 'clone': case 'stringify': default: throw new Error("unhandled message "+m)}
  function mainloop(){
   for(;;){
    if(S<0x80){
     eT=type[S];assert(typeof eT == 'string',1.1);assert(eT != " ",1.11)
     if(!nstrm.length&&c.length){
      out('tree segment',c)
      c=[]}
     switch(eT){
      case 'q':a.push([S,c,pos]);c=[];break
      case 'r':a.push([S,c]);c=[];break
      case 'o':a.push([S]);break
      case 'n':
      case 'p':a.push([S,c,pos]);c=[];break
      case 'R':
       assert(pos <= s.length+1,0.1)
       if(r=tbl[pos][S]){R=true;a.push([S,c,pos]);pos=r[1];c=r[2]}
       else if(r==false){a.push([S,c,pos]);R=false}
       else{a.push([S,c,pos]);c=[T[S]/0x10]}
       break
      case 'L':a.push([S,pos])}
     S=T[S]
     assert(nostream[S]!=' ','nostream value')
     if(nostream[S]=='1'){ // based on the expression we are entering (i.e. about to test)
      nstrm.push(a.length)}}
    else{
     chr=s.charCodeAt(pos)
     //dbg_array.push(S.toString(16)+' '+String.fromCharCode(chr))
     switch(S){
      case 0x80:R=true;break
      case 0x81:R=chr==43;break
      case 0x82:R=chr==42;break
      case 0x83:R=chr<58&&chr>47;break
      case 0x84:R=chr==32;break
      default:throw new Error("unknown S>=0x80 "+S+dbg_array)}
     if(R&&S!=0x80)pos++
     if(!R)
      if(isNaN(chr))
       if(eof)R=false
       else{
        R=undefined // this is probably not necessary
        out("ready"/*,dbg_array,a*/) // let the caller know we are waiting for more input
        return}
     assert(R || !isNaN(chr) || eof,1)
     assert(R===true || R===false,2)}
    while(R!=undefined){
     //out('dbg',a.length+' '+nstrm+' R:'+R+' S:'+S)
     if(a.length-1==nstrm[nstrm.length-1]){// this was an expression that caused us to be in no-streaming mode
      //assert(nostream[T[a[a.length-1][0]]]=='1',"test state for which we have a result is not streamable")
      assert(nostream[T[a[a.length-2][0]]]=='1',"test state for which we have a result is not streamable")
      nstrm.pop()
      //out('len',c.length)
      }
     f=a.pop() // f is the stack frame
     S=f[0]
     eT=type[S];assert(typeof eT == 'string',3.5,S);assert(eT != " ",4,S)
     assert(S===0 || a.length,5)
     switch(eT){
      case 'q':
       if(R){f[1].push.apply(f[1],c);S=M[S]}
       else{pos=f[2];S=F[S]}
       assert(a.length,6)
       c=f[1];break
      case 'r':
       assert(R===true,7)
       f[1].push.apply(f[1],c)
       c=f[1]
       assert(a.length,8)
       S=M[S];break
      case 'o':
       if(R)S=M[S]; else S=F[S];assert(a.length,9);break
      case 'n':
      case 'p':
       c=f[1]
       pos=f[2]
       assert(a.length,10)
       if(R)S=M[S];else S=F[S];break
      case 'R':
       //dbg_array.push([S.toString(16),R,a.length])
       assert(S===0 || a.length,11)
       dbg_S=S
       if(R){f[1].push.apply(f[1],c);f[1].push(-2,pos-f[2]);c=f[1];S=M[S]}
       else{c=f[1];pos=f[2];S=F[S]}
       if(!a.length){
        //assert(c===dbg_c,"top c array is the original")
        c.push(-2,pos)
        out('tree segment',c)
        return};break
      case 'L':
       if(anon[S]=='1'&&R) c.push(-1, pos-f[1])
       //if(anon[S]=='1'&&R){out('anon',a.length)}
       S=(R?M:F)[S]
       break
      default: assert(false,15,S)}
     if(!nstrm.length&&c.length){
      out('tree segment',c)
      // c=[] // XXX is this safe?
      c.splice(0,c.length)
      }
     R=S==256?false:S==257?true:undefined}
    assert(R==undefined,16)
    assert(S<0x100,17,S.toString(16))}}}}