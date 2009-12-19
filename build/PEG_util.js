/* Useful functions on PEG parse trees. */

function PTNode(name,start,end,str){
 this.name=name;this.start=start;this.end=end
 this.cn=[]
 this._str=str}

function showPTNode(n){
 return (n.name||n.idx)+' ('+n.start+'–'+n.end+')'}

function showPTNodeAttrs(n,force){var attrs=[],p,hidden
 hidden=
 ['name'
 ,'start'
 ,'end'
 ,'cn'
 ,'push'
 ,'children'
 ,'_str']
 for(p in n){
  if(hidden.indexOf(p)>-1)continue
  if(force.indexOf(p)!=-1)attrs.push('| '+p+' = '+_force(n[p]))
  else attrs.push('| '+p)}
 return [(n.name||n.idx)+' ('+n.start+'–'+n.end+')']
        .concat(attrs).join('\n')
 function _force(f){
  try{return f()}
  catch(e){return e.toString()}}}

function showPTNodeTreeAttrs(t,hide,force){
 return pp(f(t))
 function f(n){var x
  //if(!n.cn.length&&hide.indexOf(n.name)>-1)return false
  if(hide.indexOf(n.name)>-1)return false
  if(n.cn.length==1&&n.cn[0].end==n.end
  && showPTNodeAttrs(n,force).indexOf('\n')==-1){
   x=f(n.cn[0])
   x[0]=n.name+'→'+x[0]
   return x}
  return [showPTNodeAttrs(n,force)].concat(n.cn.map(f).filter(function(x){return !!x}))}}

PTNode.prototype.push=function(c){this.cn.push(c)}

PTNode.prototype.children=function(){return this.cn}

/* buildTree takes the result table from a successful parse and reconstructs the parse tree. */

/* A result table contains for each position in the input, for each parse rules that was tried at that position, an array having:
 [0] ≔ Boolean, true if the rule matched
 if [0] is true, the following are also set:
 [1] ≔ end position, the last character matched by this rule
 [2] ≔ parenting information:
 [2][0] ≔ the name of the rule which called this rule
 [2][1] ≔ the position in the source input of the parent rule
*/

function buildTree(s){var root,p,tbl=s.tbl,str=s._str

 //cleanup irrelevant parser artifacts
 tbl.forEach(function(col){
  delete col.str
  for(p in col)
   if(col[p]===false)
    delete col[p]})

 function populate(node){var
  rn=node.name,sp=node.start,ep=node.end
  ,ret=new PTNode(rn,sp,ep,str)
  tbl.slice(sp,ep).forEach(function(col,i){
   for(p in col){
    if(col[p][2][0]==rn
    && col[p][2][1]==sp)
     ret.push(populate(new PTNode(p,sp+i,col[p][1])))}})
  return ret}

 //root ≔ a parentless match at pos 0
 for(p in tbl[0])
  if (tbl[0][p].length==2){
   root=new PTNode(p,0,tbl[0][p][1])
   delete tbl[0][p]}
 
 return populate(root)}

// just dump everything in the fail result in a more human-friendly format
function rawFailDump(fail,names){var ret=[],i,rules,j
 for(i=0;i<fail.length;i++){
  ret.push('pos: '+i)
  rules=fail[i]
  for(j=0;j<rules.length;j++){
   if(rules[j]==undefined)continue
   ret.push(' '+names[j]+': '+rules[j])}}
 return ret.join('\n')
      + '\n\n'+pp(fail)}

function buildFailTree(s){var root,p,tbl=s.tbl,failpos
 //failpos=tbl[0].str.length-s.str().length
 failpos=s.pos
 tbl.forEach(function(col){
  delete col.str})
 for(p in tbl[0])
  if (tbl[0][p].length==2)
   root=p
 function rightmost(rn,sp,ep){var i,p,last=false
  i:for(i=ep;i--;)
   for(p in tbl[i])
    if(tbl[i][p][0]
    && tbl[i][p][2]
    && tbl[i][p][2][0]===rn
    && tbl[i][p][2][1]===sp)
     {last=[i,p,tbl[i][p][1]];break i}
  return [rn+' '+sp+'-'+ep]
   .concat(last?rightmost(last[1],last[0],last[2]):[])}
 return (
  ['parser failed at '+failpos
  ,pp(tbl[failpos])
  ,'root node was '+root
  ,'rightmost success chain was '+pp(rightmost(root,0,tbl[0][root][1]))
  ].join('\n\n'))}

function showTree(t,names){
 return f(t,0)
 function f(n,p){var ret,i,l
  if(n[0]==-1)return 'anonymous '+p+'-'+(p+n[1])
  ret = names[n[0]]+' '+p+'-'+(p+n[1]) // construct label
  for(i=0,l=n[2].length;i<l;i++){ // append children
   ret += '\n' + f(n[2][i],p)
   p += n[2][i][1]}
  return ret.replace(/\n/g,'\n ')}} // indent

function markNode(node){node.name='*** '+node.name;return node}

function nonBindingNodeMatch(m,n){var i,l,test
 if(m[0][0]&&(!n.name.match(RegExp('^('+m[0][0]+')$'))))return false
 return true}

function _get_match(node){
 return _get_match.string.substring(node.start,node.end)}

function _define(opts,op,rule){var attrName=op[1],ctx=[]
 function _ts(p){return '['+p.join(',')+']'}
 rule.bindings.forEach(function(b){
  ctx.push((b[0]||'root')+'=nodeAt(model.m,'+_ts(b[1])+')[2]')})
 ctx.push('children=node.children()')
 ctx.push('opts='+opts)
 return eval('(function(node,model){'+
  //'log(["_define",node.show(),"'+attrName+'",_get_match(node).split("\\n")[0].replace(/^(.{32}).*/,"$1…")]);'+
  'var '+ctx.join(',')+';'+
  'node.'+attrName+'=function(){var res='+op[2]
   +';node.'+attrName+'=function(r){return function(){return r}}(res);return res}})')
}