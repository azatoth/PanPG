function ECMAScript_highlighting(s){
 var prog=parseTMProg(getFile('ECMAScript_highlighting'))
   , pt=tree(p_ES5_Program,s)
   , ret=[]
   , tags
   , strpos=0
 if(!pt[0])return explainParseFailure(pt)
 tags=(applyTMProg(prog,"{}",pt[1],s,'tags'))
 tags.forEach(function([pos,str]){
       if(pos>strpos){
        ret.push(s.slice(strpos,pos))
        strpos=pos}
       ret.push(str)})
 return ret.join('')}