function _all(cn,attr){
 return(cn
  .filter(function(c){return !!c[attr]})
  .map(function(c){return c[attr]()}))}

function ruleset_cg(opts,cn){
 return _all(cn,'match_code').join('\n\n')}

function rule_cg(opts,name,code){
 return "function "+opts.prefix+name+"(s,p){var c=s.pre('"+name+"',p);if(typeof c=='boolean')return c;return s.fin(c,p,"+code+"(s,c))}"}

function ordchoice_cg(opts,cn){var
 all=_all(cn,'match_code')
 if(all.length==1)return all[0]
 return "ordChoice("+all.join(',')+")"}

function sequence_cg(opts,cn){var
 all=_all(cn,'match_code')
 if(all.length==1)return all[0]
 return "seq("+all.join(',')+")"}

function nonterminal_cg(opts,m){
 return opts.prefix+m}

function anyrep_cg(opts,code){
 return "rep(0,0,"+code+")"}

function posrep_cg(opts,code){
 return "rep(1,0,"+code+")"}

function mnrep_cg(opts,m,n,code){
 return "rep("+m+","+n+","+code+")"}

function optional_cg(opts,code){
 return "rep(0,1,"+code+")"}

function empty_cg(opts){
 return "empty"}

function strlit_cg(opts,m){
 return "strLit("+m+")"}

function _wrap_re(re){
 return "re(/^"+re+"/)"}

function poscharset_cg(opts,cset){
 return _wrap_re(cset_toREcclass(cset))}

function negcharset_cg(opts,cset){
 return _wrap_re(cset_toREcclass(cset_invert(cset)))}

function charsetdifference_cg(opts,cn){var
 all=_all(cn,'cset')
 ,cset=all[0]
 log(cset)
 all.slice(1).forEach(function(cset2){
  cset=cset_difference(cset,cset2)})
 return log(cset)}

function charsetintersection_cg(opts,cn){var
 all=_all(cn,'cset')
 if(all.length!=1) throw Error('charsetintersection unimplemented')
 return all[0]}

function charsetunion_cg(opts,cn){var cset=cset_empty()
 _all(cn,'cset').forEach(function(cset2){
  cset=cset_union(cset,cset2)})
 return log(cset)}

function codepointrange_cg(opts,from,to){
 return cset_range(from,to)}

function upluscodepoint_cg(opts,match){
 return log('upluscodepoint'),log(cset_fromInt(parseInt(match.slice(2),16)))}

function codepointlit_cg(opts,match){
 return log(cset_fromChar(match))}

function upluscodepoint_cg_cp(opts,match){
 return cpoint_fromInt(parseInt(match.slice(2),16))}

function codepointlit_cg_cp(opts,match){
 return cpoint_fromChar(match)}

function negativespec_cg(opts,match){
 return log(cset_invert(cset_fromPropSpec(match)))}

function positivespec_cg(opts,match){
 return cset_fromPropSpec(match)}