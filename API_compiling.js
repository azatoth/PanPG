function generateParser(peg,opts){var pt,named_res
 pt=parsePEG(peg)
 if(!pt[0])return pt
 named_res=v6_named_res(pt,parsePEG.names,peg)
 try{return [1,codegen_v6(opts||{},named_res)]}
 catch(e){return [0,e.toString()]}}

function generateParserThrowing(peg,opts){var x
 x=generateParser(peg,opts)
 if(!x[0])throw new Error(x[1])
 return x[1]}

function patchPEG(original,patch){}