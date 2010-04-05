function build_PEG_compiler(API_compiling,PEG_codegen_6_attr_js,PEG_codegen_6_js,parsePEG_js,re_js,lists_js,cset_prod_js,assert_js){
 return '/* PEG → JavaScript parser generator, with its dependencies.\n * See http://inimino.org/~inimino/blog/peg_v0.0.5\n * MIT Licensed\n */\n\n'
      + ';(function(exports){\n\n'
      + 'exports.generateParser=generateParser\n'
      + 'exports.generateParserThrowing=generateParserThrowing\n'
      + '\n'
      + API_compiling
      + '\n\n /* parsePEG.js */ \n\n'
      + parsePEG_js
      + '\n\n/* re.js */\n\n'
      + re_js
      + '\n\n/* lists.js */\n\n'
      + lists_js
      + '\n\n/* assert.js */\n\n'
      + assert_js
      + '\n\n/* CSET */\n\n'
      + cset_prod_js
      + '\nCSET.import(\'\',CSET)'
      + '\n\n/* PEG_codegen_6_attr.js */ \n\n'
      + PEG_codegen_6_attr_js
      + '\n\n/* PEG_codegen_6.js */ \n\n'
      + PEG_codegen_6_js
      + '\n})(typeof exports==\'undefined\'?this:exports);\n'}

/* remaining dependencies:
 */