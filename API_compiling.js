function generateParser(peg,opts){var pt
 pt=parsePEG(peg)
 if(!pt[0])return pt
 PEG_codegen_5(pt)
 try{return [true,pt.code_v5()(opts||{})]}
 catch(e){return [false,e.toString()]}}

function generateParserThrowing(peg,opts){var x
 x=generateParser(peg,opts)
 if(!x[0])throw new Error(x[1])
 return x[1]}

// lower-level API functions

function parsePEG(peg){var pt
 peg=peg.replace(/^[\n\r]+|[\n\r]+$/g,'') // TODO: regenerate the PEG parser and fix this
 pt=p_PEG_v5_RuleSet(peg)
 if(!pt[0])return [false,{error:"Parse error in PEG input",at:pt[1][0].RuleSet[1],fail:pt[1]}] // TODO: provide useful parse errors
 return pt}

function patchPEG(original,patch){}