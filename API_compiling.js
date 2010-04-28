function generateParser(peg,opts){var parse_result,named_res
 parse_result=parsePEG(peg)
 if(!parse_result[0])return parse_result
 named_res=v6_named_res(parse_result)
 try{return [1,codegen_v6(opts||{},named_res)]}
 catch(e){return [0,e]}}

function generateParserThrowing(peg,opts){var x
 x=generateParser(peg,opts)
 if(!x[0])throw new Error(x[1])
 return x[1]}

function patchPEG(original,patch){}