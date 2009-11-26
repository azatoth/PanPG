function ECMAScript_highlighting_tests(){
 var x,br='\n\n',pt,prog,y,z,strpos=0,ret=[],css
 //x=getFile('API.js'),
 //css=getFile('ECMAScript_highlighting.css')
 css="*{color:blue}"
 //x="function empty(){return true}"
 /*
 pt=tree(p_ES5_Program,x)
 prog=parseTMProg(getFile('ECMAScript_highlighting'))
 //return showTree(pt[1])
 y=applyTMProg(prog,"{}",pt[1],x,'tags')
 y.forEach(function([pos,str]){
    if(pos>strpos){
     ret.push(x.slice(strpos,pos))
     strpos=pos}
    ret.push(str)})
 window.x='<pre>'+ECMAScript_highlighting(x)+'</pre>'/**/
 showHTML(window.x,css);return
 return window.x
 return ECMAScript_highlighting(x)
 return x
   +br+ pp(y)
   +br+ ret.join('')
   //+br+ showTree(pt[1])
   //+br+ markTMProg(prog,pt[1])
   //+br+ pp(prog)
   //+br+ pp(y)
   //+br+ pp(applyTMProg(prog,"{}",pt[1],x,'tags'))
   //+br+ pp(y.elem())
   //+br+ pp(y.tags())
   +br+ ECMAScript_highlighting(x)
}