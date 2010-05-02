function generateParser(peg,opts){var parse_result,named_res,i,l,patch,pr,nr
 opts=opts||{}
 parse_result=parsePEG(peg)
 if(!parse_result[0])return parse_result
 named_res=v6_named_res(parse_result)
 if(opts.patches)
  for(i=0,l=opts.patches.length;i<l;i++){patch=opts.patches[i]
   pr=parsePEG(patch)
   if(!pr[0])return pr
   nr=v6_named_res(pr)
   named_res=apply_patch(named_res,nr)}
 try{return [1,codegen_v6(opts||{},named_res)]}
 catch(e){return [0,e]}
 function apply_patch(nr1,nr2){var o={},i,l,name,rule,ret=[]
  for(i=0,l=nr1.length;i<l;i++){
   name=nr1[i][0]
   ret[i]=nr1[i]
   o[name]=i}
  for(i=0,l=nr2.length;i<l;i++){
   name=nr2[i][0]
   // if it was already there, replace it
   if(o.hasOwnProperty(name)) ret[o[name]]=nr2[i]
   // otherwise add it at the end
   else ret.push(nr2[i])}
  return ret}}

function generateParserThrowing(peg,opts){var x
 x=generateParser(peg,opts)
 if(!x[0])throw new Error(x[1])
 return x[1]}
