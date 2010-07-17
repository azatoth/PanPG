/*

{JSON:{S:1,re:[2,[[5,'Digit']]],name:'JSON',direct_deps:['Digit']
      ,all_csets:[]
      ,expr:{id:'JSON+0',type:2,S:undefined,T:undefined,M:undefined
            ,F:undefined,flags:undefined,toplevel:true,flag_n:0
            ,subexprs:[{id:'JSON+1',type:5,S:undefined,T:undefined
                       ,M:undefined,F:undefined,flags:undefined
                       ,ref:'Digit',flag_n:0,subexprs:[]}]}}
,Digit:{S:2,re:[2,[[0,[48,58]]]],name:'Digit',direct_deps:[]
       ,all_csets:[[48,58]]
       ,expr:{id:'Digit+0',type:2,S:undefined,T:undefined,M:undefined
             ,F:undefined,flags:undefined,toplevel:true,flag_n:0
             ,subexprs:[{id:'Digit+1',type:0,S:undefined,T:undefined
                        ,M:undefined,F:undefined,flags:undefined
                        ,cset:[48,58],flag_n:0,subexprs:[]}]}}
,_:{S:4,name:'_',all_csets:[[0]]
   ,expr:{id:'_+0',type:2,S:undefined,T:undefined,M:undefined,F:undefined
         ,flags:undefined,toplevel:true,flag_n:0
         ,subexprs:[{id:'_+1',type:5,S:undefined,T:undefined,M:undefined
                    ,F:undefined,flags:undefined,ref:'JSON',flag_n:0
                    ,subexprs:[]}
                   ,{id:'_+2',type:6,S:undefined,T:undefined,M:undefined
                    ,F:undefined,flags:undefined,flag_n:0
                    ,subexprs:[{id:'_+3',type:0,S:undefined,T:undefined
                               ,M:undefined,F:undefined,flags:undefined
                               ,cset:[0],flag_n:0,subexprs:[]}]}]}}}



CSET
Clone
DFA_bench_equiv
Fx
_CSET
addEventListener
cUC
createPureWorker
cset_output
cset_unicode_categories
dispatchEvent
log
names
navigator
onerror
onmessage
postMessage
re_shortnames
removeEventListener
self

{all_csets:[{key:'cset_48,58',cset:[48,58],equivs:[],id:0}
           ,{key:'cset_0',cset:[0],equivs:[],id:1}]}

{cset_cache:{cset_48,58:{key:'cset_48,58',cset:[48,58],equivs:[],id:0}
            ,cset_0:{key:'cset_0',cset:[0],equivs:[],id:1}}}

[48,0,10,1,65478,0]

{type:'transition',transition:[[[48,58],{type:'match'}]]}

{key:'[m]'}

{key:'[1→[m]]'}

[{type:'transition',transition:[[[48,58],{type:'match'}]]}]

['[1→[m]]']

[]

{type:'transition',transition:[[[0],{type:'match'}]]}

{key:'[m]'}

{key:'[0,1→[m]]'}

[{type:'transition',transition:[[[0],{type:'match'}]]}]

['[0,1→[m]]']

[]

{JSON:{S:1,re:[2,[[5,'Digit']]],name:'JSON',direct_deps:['Digit']
      ,all_csets:[],known_regular:[true]
      ,expr:{id:'JSON+0',type:2,S:1,T:20480,M:10,F:11,toplevel:true
            ,flag_n:2735,anon_consume:false,can_emit_named:true
            ,_dfa:'reached',S_flags:6831,S_flags_:'1101010101111'
            ,flags:{cache:true,t_bufferout:true,pushpos:true
                   ,t_emitstate:true,m_emitstate:false,m_emitclose:true
                   ,m_emitanon:false,m_emitlength:true,m_resetpos:false
                   ,m_emitbuf:true,m_tossbuf:false,f_tossbuf:true}
            ,subexprs:[{id:'JSON+1',type:5,S:5,T:10927,M:10,F:11
                       ,ref:'Digit',flag_n:0,subexprs:[]
                       ,can_emit_named:true,_dfa:'reached',S_flags:20480
                       ,S_flags_:'101000000000000'
                       ,flags:{cache:false,t_bufferout:false
                              ,pushpos:false,t_emitstate:false
                              ,m_emitstate:false,m_emitclose:false
                              ,m_emitanon:false,m_emitlength:false
                              ,m_resetpos:false,m_emitbuf:false
                              ,m_tossbuf:false,f_tossbuf:false}}]}}
,_:{S:4,name:'_',all_csets:[[0]],known_regular:[true]
   ,expr:{id:'_+0',type:2,S:4,T:28672,M:10,F:11,toplevel:true,flag_n:0
         ,_dfa:'reached',S_flags:16384,S_flags_:'100000000000000'
         ,flags:{cache:false,t_bufferout:false,pushpos:false
                ,t_emitstate:false,m_emitstate:false,m_emitclose:false
                ,m_emitanon:false,m_emitlength:false,m_resetpos:false
                ,m_tossbuf:false,f_tossbuf:false}
         ,subexprs:[{id:'_+1',type:5,S:7,T:6831,M:32768,F:11
                    ,flags:undefined,ref:'JSON',flag_n:0,subexprs:[]
                    ,_dfa:'reached',S_flags:28672
                    ,S_flags_:'111000000000000'}
                   ,{id:'_+2',type:6,S:8,T:36864,M:10,F:11
                    ,flags:undefined,flag_n:0,_dfa:'reached'
                    ,S_flags:32768,S_flags_:'1000000000000000'
                    ,subexprs:[{id:'_+3',type:0,S:9,T:undefined,M:11,F:10
                               ,flags:undefined,cset:[0],flag_n:0
                               ,subexprs:[],_dfa:'reached',S_flags:36864
                               ,S_flags_:'1001000000000000'
                               ,dfa:{type:'transition'
                                    ,transition:[[[0],{type:'match'}]]}}]}]}}
,Digit:{S:2,re:[2,[[0,[48,58]]]],name:'Digit',direct_deps:[]
       ,all_csets:[[48,58]],known_regular:[true]
       ,expr:{id:'Digit+0',type:2,S:2,T:24576,M:10,F:11,toplevel:true
             ,flag_n:2735,anon_consume:true,can_emit_named:false
             ,_dfa:'reached',S_flags:10927,S_flags_:'10101010101111'
             ,flags:{cache:true,t_bufferout:true,pushpos:true
                    ,t_emitstate:true,m_emitstate:false,m_emitclose:true
                    ,m_emitanon:false,m_emitlength:true,m_resetpos:false
                    ,m_emitbuf:true,m_tossbuf:false,f_tossbuf:true}
             ,subexprs:[{id:'Digit+1',type:0,S:6,T:undefined,M:10,F:11
                        ,cset:[48,58],flag_n:0,subexprs:[]
                        ,anon_consume:true,_dfa:'reached',S_flags:24576
                        ,S_flags_:'110000000000000'
                        ,dfa:{type:'transition'
                             ,transition:[[[48,58],{type:'match'}]]}
                        ,flags:{cache:false,t_bufferout:false
                               ,pushpos:false,t_emitstate:false
                               ,m_emitstate:false,m_emitclose:false
                               ,m_emitanon:false,m_emitlength:false
                               ,m_resetpos:false,m_emitbuf:false
                               ,m_tossbuf:false,f_tossbuf:false}}]}}}
opts.equiv_classes
{equiv_class_1:{id:0,key:'equiv_class_1',member_cset_ids:[1]}
,equiv_class_0,1:{id:1,key:'equiv_class_0,1',member_cset_ids:[0,1]}}

opts.all_csets
[{key:'cset_48,58',cset:[48,58],equivs:[1],id:0}
,{key:'cset_0',cset:[0],equivs:[0,1],id:1}]

opts.cset_cache
{cset_48,58:{key:'cset_48,58',cset:[48,58],equivs:[1],id:0}
,cset_0:{key:'cset_0',cset:[0],equivs:[0,1],id:1}}

[undefined,undefined,undefined,undefined,undefined,undefined
,{type:'transition',transition:[[[48,58],{type:'match'}]]},undefined
,undefined,{type:'transition',transition:[[[0],{type:'match'}]]}]

*/

parseJSON.legend="JSON ← (JSON+0 seq (JSON+1 ref Digit))\nDigit ← (Digit+0 seq (Digit+1 cset 30-39))\n_ ← (_+0 seq (_+1 ref JSON) (_+2 neg (_+3 cset 0-10ffff)))";
parseJSON.names=['','JSON','Digit','','_']
function parseJSON(out){var eof=false,s='',l=0,S=16384,T,M,F,D,R,tbl=[],x,pos=0,offset=0,buf=[],bufs=[],states=[],posns=[],c,equiv,ds,dp,failed=0,S_map=['','JSON+0','Digit+0','','_+0','JSON+1','Digit+1','_+1','_+2','_+3'];
function dbg(msg){out(msg,'S:'+(S_map[S>>>12]||'unknown state'+S>>>12)+' pos:'+pos+' '+s.charAt(pos)+' R:'+R+' stack:'+states.map(function(s){return s>>>12})+' posns:'+posns+' bufs:'+bufs.map(function(b){return '['+b+']'})+' buf:'+buf)}
equiv=rle_dec([48,0,10,1,65478,0])
function rle_dec(a){var r=[],i,l,n,x,ll;for(i=0,l=a.length;i<l;i+=2){n=a[i];x=a[i+1];r.length=ll=r.length+n;for(;n;n--)r[ll-n]=x}return r}
T=[,20480,24576,,28672,10927,,6831,36864,]
M=[,10,10,,10,10,10,32768,10,11]
F=[,11,11,,11,11,11,11,11,10]
D=[,,,,,,[[[[1]]]],,,[[[[0,1]]]]].map(revive)
function revive(x){var i,l,state,j,l2,all=[],t,ts;for(i=0,l=x.length;i<l;i++){state=x[i];ts=[];for(j=0,l2=state.length;j<l2;j++){t=state[j];if(t[1]==l) ts.push([t[0],true]);else ts.push([t[0],t[1]==undefined?j+1:t[1]])}all.push(ts)}return dfa(all)
 function dfa(ss){var i,l_ss,st,l_s,t,l_t,a,d=[],j,k,l;for(i=0,l_ss=ss.length;i<l_ss;i++){st=ss[i];a=[];for(j=0,l_s=st.length;j<l_s;j++){t=st[j];for(k=0,l_t=t[0].length;k<l_t;k++){a[t[0][k]]=t[1]==true?l_ss:t[1]}}for(j=0,l=a.length;j<l;j++)if(a[j]==undefined)a[j]=l_ss+1;d[i]=a}
  return function _dfa(st,i){var eq,pr;while(st<l_ss){eq=equiv[s.charCodeAt(i++)];st=d[pr=st][eq]}if(eq==undefined&&i>=s.length){ds=pr;dp=i-1;return}ds=0;dp=undefined;if(st==l_ss){pos=i;return true}return false}}}
if(typeof out=='string'){s=out;out=[];x=parseJSON(function(m,x,y){if(m=='fail')out=[false,x,y,s];if(m=='tree segment')out=out.concat(x)});x('chunk',s);x('eof');return out[0]===false?out:[true,{names:parseJSON.names,tree:out,input:s}]}
return function(m,x){if(failed){out('fail',pos,'parse already failed');return}
switch(m){
case 'chunk':s+=x;l=s.length;while(tbl.length<l+1)tbl.push([]);mainloop();break
case 'eof':eof=true;mainloop();break
default:throw new Error('unhandled message: '+m)}}
function mainloop(){for(;;){dbg("main")
if(S>14||S<12)t_block:{
assert(typeof S=="number","S")
assert((S>>>12)<=14,"S in range: "+S)
assert(R==undefined,'result is unknown (R:'+R+',S:'+(S>>>12)+')')
if(S&4/*pushpos*/)posns.push(pos)
if(S&2/*t_bufferout*/){bufs.push(buf);buf=[]}
if(S&1/*cache*/&&(x=tbl[pos-offset][S])!=undefined){if(x){R=true;pos=x[0];buf=x[1]}else{R=false}dbg("cache hit")
break t_block}
if(S&8/*t_emitstate*/){buf.push(S>>>12)}
// call DFA
if(D[S>>>12]){R=D[S>>>12](ds||0,dp||pos);if(R==undefined){if(eof){R=false}else{out('ready');return}}}
else{states.push(S);assert(T[S>>>12],'T');S=T[S>>>12]}}
while(R!=undefined){dbg("result")
if(S==16384){(R?emit:fail)();return}if(R){
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
assert(M[S>>>12],'M')
S=M[S>>>12]}
else{
if(S&1/*cache*/)tbl[posns[posns.length-1]][S]=false
if(S&4/*pushpos*/)pos=posns.pop()
if(S&2048/*f_tossbuf*/)buf=bufs.pop()
assert(F[S>>>12],'F')
S=F[S>>>12]}
if(S==10){R=true;S=states.pop()}else if(S==11){R=false;S=states.pop()}else R=undefined;dbg("res_end")}}}
function emit(){var x=bufs.length?bufs[0]:buf;if(x.length){out('tree segment',x);if(bufs.length)bufs[0]=[];else buf=[]}}
function fail(s){out('fail',pos,s);failed=1}
function assert(x,msg){if(!x)throw new Error('assertion failed'+(msg?': '+msg:''))}}
