function walkTree(dict,names){var p,any,anon,fail,index,cb={},stack=[],frame,pos=0,warnings=[]
 for(p in dict) if(dict.hasOwnProperty(p)){
  if(p=='any'){any=dict[p];continue}
  if(p=='anon'){anon=dict[p];continue}
  if(p=='fail'){fail=dict[p];continue}
  index=names.indexOf(p)
  if(index==-1) err('rule not found in rule names: '+p)
  cb[index]=dict[p]}
 return function(result,str){var i,l,x,retval,events
  if(!result[0]){
   if(fail) fail(result[1],result[2])
   return}
  events=result[1]
  for(i=0,l=events.length;i<l;i++){x=events[i]
   if(x>0){ // named rule start
    stack.push(frame)
    frame={index:x,start:pos}
    if(cb[x]) frame.cn=[]}
   else if(x==-1){ // anonymous node
    i++
    if(i==l)err('incomplete anonymous node')
    if(anon)anon({start:pos,end:pos+events[i]})
    pos+=events[i]}
   else if(x==-2){ // node close
    i++
    if(i==l)err('incomplete rule close')
    pos=frame.start+events[i]
    x=frame.index
    if(cb[x])
     try{retval=cb[x](m(frame.start,pos),frame.cn)}
     catch(e){err('exception in '+names[x]+': '+e.toString())}
    frame=stack.pop() // the parent node
    if(cb[x] && retval!==undefined)
     if(frame.cn)frame.cn.push(retval)
     else warnings.push('ignored return value of '+names[x]+' in '+names[frame.index])}
   else err('invalid event stream: saw '+x+' at position '+i)}
  return warnings
  function m(s,e){
   return {start:s
          ,end:e
          ,text:function(){return str.slice(s,e)}}}}
 function err(s){
  throw new Error('streamHandler: '+s)}}
