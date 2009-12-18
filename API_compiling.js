function generateParser(peg,opts){var pt
 peg=peg.replace(/^[\n\r]+|[\n\r]+$/g,'') // TODO: regenerate the PEG parser and fix this
 pt=p_PEG_v5_RuleSet(peg)
 if(!pt[0])return [false,"Parse error in PEG input"] // TODO: provide useful parse errors
 pt=pt[1]
 PEG_codegen_5(pt)
 try{return [true,pt.code_v5()(opts||{})]}
 catch(e){return [false,e.toString()]}}

function generateParserThrowing(peg,opts){var x
 x=generateParser(peg,opts)
 if(!x[0])throw new Error(x[1])
 return x[1]}