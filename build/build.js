function build_PEG_compiler(API_compiling,PEG_codegen_5,PEG_codegen_5_js,PEG_codegen_6_js,TAL_match_js,PEG_v5,re_js,lists_js,cset_prod_js,assert_js){var tree,talProg
 tree=PTNodeTALDict.fnParse(PEG_codegen_5)
 talProg=PTNodeTALDict.fnCompile(tree,{functionName:'PEG_codegen_5'})
 return '/* PEG → JavaScript parser generator, with its dependencies.\n * See http://inimino.org/~inimino/blog/peg_v0.0.5\n * MIT Licensed\n */\n\n'
      + ';(function(exports){\n\n'
      + 'exports.generateParser=generateParser\n'
     // + 'exports.generateParserThrowing=generateParserThrowing\n'
      + '\n'
      + API_compiling
      + '\n\n /* PEG_v5 */ \n\n'
      + PEG_v5
      + '\n\n/* generated code, do not edit */\n'
      + talProg
      + '\n\n/* TAL supporting code */\n\n'
       + TAL_match_js
      + '\n\n/* re.js */\n\n'
      + re_js
      + '\n\n/* lists.js */\n\n'
      + lists_js
      + '\n\n/* assert.js */\n\n'
      + assert_js
      + '\n\n/* CSET */\n\n'
      + cset_prod_js
      + '\n\n/* PEG_codegen_5.js */ \n\n'
      + PEG_codegen_5_js
      + '\n\n/* PEG_codegen_6.js */ \n\n'
      + PEG_codegen_6_js
      // + '\n\n/* PTNode.js (for showTree() only) */\n\n'
      // + PTNode_js
      + '\n})(typeof exports==\'undefined\'?this:exports);\n'}

// remaining dependencies:
