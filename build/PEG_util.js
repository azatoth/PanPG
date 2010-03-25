/* Useful functions on PEG parse trees. */

// display a successful parse result
function showTree(t,names,str){
 return f(t,0)
 function f(n,p){var ret,i,l,sub
  if(n[0]==-1)ret = 'anonymous '+p+'-'+(p+n[1])
  else ret = names[n[0]]+' '+p+'-'+(p+n[1]) // construct label
  if(str)
   if(n[1]>16) ret += ' "'+str.slice(p,p+16).replace(/\n/g,'\\n')+'…"'
   else ret += ' "'+str.slice(p,p+n[1]).replace(/\n/g,'\\n')+'"'
  if(n[2])for(i=0,l=n[2].length;i<l;i++){ // append children
   ret += '\n' + f(n[2][i],p)
   p += n[2][i][1]}
  return ret.replace(/\n/g,'\n ')}} // indent

// dump a parse fail result in a slightly more human-friendly format
// see also http://gist.github.com/312863
function rawFailDump(fail,names){var ret=[],i,rules,j
 for(i=0;i<fail.length;i++){
  ret.push('pos: '+i)
  rules=fail[i]
  for(j=0;j<rules.length;j++){
   if(rules[j]==undefined)continue
   ret.push(' '+names[j]+': '+rules[j])}}
 return ret.join('\n')}

// construct a parse result, suitable for use with showTree, from a complete array of events from a streaming parser.
// XXX needs to be more robust in the face of invalid event streams (e.g. from broken parsers or from JavaScript engine bugs)
function treeFromEvents(a){var pos,i,ret
 pos=i=0
 ret=f(0,0)
 return ret
 function f(start){var rule,len,cn=[]
  rule=a[i];i++
  if(rule==-1){
   len=a[i];i++
   assert(len!=-1,1)
   pos+=len
   return [-1,len,[]]}
  while(a[i]!=-2){
   cn.push(f(pos))}
  i++
  len=a[i];i++
  if(!cn.length)pos+=len
  return [rule,pos-start,cn]}}