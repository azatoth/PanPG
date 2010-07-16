function raw_dfa(s){var pos=0,equiv

equiv=rle_dec([48,0,10,1,7,0,6,1,21,0,1,2,9,0,1,3,7,0,1,3,3,0,1,3,1,0,1,3,1,0,1,3,65417,0])
function rle_dec(a){var r=[],i,l,n,x,ll;for(i=0,l=a.length;i<l;i+=2){n=a[i];x=a[i+1];r.length=ll=r.length+n;for(;n;n--)r[ll-n]=x}return r}

function expand_dfa(builder){return function(dfa){var i,l,state,j,l2,all=[],t,ts
  for(i=0,l=dfa.length;i<l;i++){state=dfa[i]
   ts=[] // transitions
   for(j=0,l2=state.length;j<l2;j++){t=state[j]
    if(state[1]==l) ts.push(builder.match(t[0]))
    else ts.push(builder.transition(t[0],t[1]==undefined?j+1:t[1]))}
   all.push(builder.state(i,ts))}
  return builder.dfa(all)}}

expand_dfa=expand_dfa(
 {match:function(cls){return [cls,true]}
 ,transition:function(cls,sid){return [cls,sid]}
 ,state:function(sid,ts){return ts}
 ,dfa:function(ss){var i,l_ss,st,l_s,l_t,a,d=[],t,j,k,l
   for(i=0,l_ss=ss.length;i<l_ss;i++){st=ss[i]
    a=[]
    for(j=0,l_s=st.length;j<l_s;j++){t=st[j]
     for(k=0,l_t=t[0].length;k<l_t;k++){
      a[t[0][k]]=t[1]==true?l_ss:t[1]}}
    for(k=0,l=a.length;k<l;k++)if(a[k]==undefined)a[k]=l_ss+1
    d[i]=a}
   return function(){var st=0,eq,i=pos
    while(st<l_ss){
     eq=equiv[s.charCodeAt(i++)]
     st=d[st][eq]}
    if(st==l_ss){pos=i;return true}
    return false}}})

// if there is a DFA

var d_20 = expand_dfa([[[[2]]],[[[1]],[[3],5]],[[[1]]],[[[1]]],[[[1],5]]])

return d_20()

}