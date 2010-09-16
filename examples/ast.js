pp=pp_smart

// pp_smart outputs sharp variables (like Mozilla), (optionally) re-orders object properties so that the largest ones come at the end (which makes reading deeply nested objects much easier), and tries to produce much more compact output by compressing properties and array members onto the same line when possible up to some specified line length (by default 80 chars)

// x, n_rows, n_cols
function pp_smart(x,opts){var parents=[],refs=[,]
 opts=opts||{}
 default_('rows',Infinity)
 default_('cols',72)
 default_('show_f',function(f){return (''+f).replace(/\s+/g,' ').replace(/(.{32}).{16,}/,'$1…')})
 default_('reorder',true)
 default_('string_escape',false)
 default_('string_limit',64)
 default_('hide',[])
 parents=[]
 return go(x,"")
 function default_(k,v){if(opts[k]===undefined)opts[k]=v}
 function lines(s){return s.split('\n').length}
 function go(x,ss){var i,l,a=[],sub,cols,p,defer=[]
  if(x===undefined)return 'undefined'
  if(x===null)return 'null'
  switch(typeof x){
   case 'string':return pp_quote(x,opts).replace(/\n/g,'\n '+ss)
   case 'boolean':
   case 'number':return ''+x
   case 'function':return opts.show_f(x)}
  if(x.constructor==Date)return x.toString()
  cols=opts.cols-ss.length
  if((i=parents.lastIndexOf(x))>-1)refs.push(parents[i])
  if((i=refs.lastIndexOf(x))>-1)return '#'+i+'#'
  if(x.constructor==Array||Array.isArray&&Array.isArray(x)){
   parents.push(x)
   for(i=0,l=x.length;i<l;i++){
    sub=(go(x[i],' '+ss))
    if(a.length) sub=','+sub
    if(sub.indexOf('\n')>-1){
     if(a.length) a.push('\n'+ss)
     a.push(sub)}
    else{
     if(cols-sub.length < 0){a.push('\n'+ss);cols=opts.cols-ss.length}
     a.push(sub)
     cols-=sub.length}}
   parents.pop()
   return ((i=refs.lastIndexOf(x))>-1?'#'+i+'=':'')
        + '['+a.join('')+']'}
  parents.push(x)
  for(p in x) if(Object.prototype.hasOwnProperty.call(x,p)){
   if(opts.hide.indexOf(p)>-1)sub=p+':<hidden>'
   else sub=p+':'+go(x[p],(',:'+p).replace(/./g,' ')+ss)
   if(sub.indexOf('\n')>-1){
    if(opts.reorder)defer.push(sub)
    else{
     if(a.length)sub=','+sub
     if(a.length) a.push('\n'+ss)
     a.push(sub)}}
   else{
    if(a.length)sub=','+sub
    if(cols-sub.length<0 && a.length){a.push('\n'+ss);cols=opts.cols-ss.length}
    a.push(sub)
    cols-=sub.length}}
  defer.sort(function(a,b){var la=lines(a),lb=lines(b); return la==lb?0:la>lb?1:-1})
  for(i=0,l=defer.length;i<l;i++){
   if(a.length) a.push('\n'+ss+',')
   a.push(defer[i])}
  parents.pop()
  return ((i=refs.lastIndexOf(x))>-1?'#'+i+'=':'')
       + '{'+a.join('')+'}'}}

function pp_quote(s,opts){opts=opts||{}
 if(opts.string_escape) s=s.replace(/\\/g,'\\\\').replace(/\n/g,'\\n')
 if(opts.string_limit && s.length>opts.string_limit)s=s.slice(0,opts.string_limit)+'…'
 if(s.indexOf("'")==-1)return "'"+s+"'"
 return '"'+s.replace(/"/g,'\\"')+'"'}

var js_ast = require('../js_pp/js_ast');
var sys = require('sys');
var code = 'var i = 3;';

var result = js_ast.generate_ast(code);
sys.print(JSON.stringify(result));

