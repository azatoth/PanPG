function _all(cn,attr){
 return(cn
  .filter(function(c){return !!c[attr]})
  .map(function(c){return c[attr]()}))}

function esh_tags(xxx,cn,elem,class,id,start,end){
 var cn_tags=_all(cn,'tags'),ret=[]
 cn_tags.forEach(function(x){ret=ret.concat(x)})
 if(elem){
  ret.unshift([start,'<'+elem+(class?' class='+class:'')+(id?' id='+id:'')+'>'])
  ret.push([end,'</'+elem+'>'])}
 return ret}

//ugly hack 'til we have a better TMProg language
function esh_empty(){return ''}

//more ugly hacks follow
function esh_code(){return 'code'}
function esh_es5(){return 'ECMAScript'}
function esh_span(){return 'span'}
function esh_div(){return 'div'}
function esh_fundecl_class(){return 'fundef'}
function esh_fundecl_id(xxx,name){return 'fundecl_'+name}
function esh_structural(){return 'struct'}
function esh_funbody_class(){return 'funbod'}
function esh_literal(){return 'lit'}
function esh_varstmt(){return 'varstmt'}
function esh_retstmt(){return 'retstmt'}