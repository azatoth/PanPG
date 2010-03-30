function streamHandler(dict,names){var p,open_cb=[],close_cb=[],index,anon,fail,pos=0,pos_stack=[],rule_stack=[],name,open
 for(p in dict) if(dict.hasOwnProperty(p)){
  if(p=='anonymous'){anon=dict[p];continue}
  if(p=='fail'){fail=dict[p];continue}
  if(p.slice(-5)=='_open'){name=p.slice(0,-5);open=true}
  else if(p.slice(-6)=='_close'){name=p.slice(0,-6);open=false}
  else err('Unknown callback type: '+p+' (allowed callbacks include *_open, *_close, "anonymous", or "fail")')
  index=names.indexOf(name)
  if(index==-1) err('rule not found in rule names: '+name)
  ;(open?open_cb:close_cb)[index]=dict[p]}
 return function(events){var i,l,x
  for(i=0,l=events.length;i<l;i++){x=events[i]
   if(x>0){ // named rule open
    if(open_cb[x])open_cb[x](pos)
    pos_stack.push(pos)
    rule_stack.push(x)}
   else if(x==-1){ // anonymous node
    i++
    if(i==l)err('incomplete anonymous node')
    if(anon)anon(pos,pos+events[i])
    pos+=events[i]}
   else if(x==-2){ // named_rule_close
    i++
    if(i==l)err('incomplete rule close')
    pos=pos_stack.pop() // pop the start position
    x=rule_stack.pop() // pop the rule which is being closed
    if(close_cb[x])close_cb[x](pos,pos+events[i])
    pos+=events[i]}
   else err('invalid event stream: saw '+x+' at position '+i)}}
 function err(s){
  throw new Error('streamHandler: '+s)}}