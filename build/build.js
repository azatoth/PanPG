function build_PEG_compiler(API_compiling,PEG_codegen_5,PEG_codegen_5_js,TAL_match_js,PEG_v5,re_js,lists_js,cset_prod_js,PTNode_js){var tree,talProg
 tree=PTNodeTALDict.fnParse(PEG_codegen_5)
 talProg=PTNodeTALDict.fnCompile(tree,{functionName:'PEG_codegen_5'})
 return '/* PEG → JavaScript parser generator, with its dependencies.\n * See http://inimino.org/~inimino/blog/peg_first_release */\n\n'
      + ';(function(){\n\n'
      + '/* exports */\n'
      + 'this.generateParser=generateParser\n'
      + 'this.generateParserThrowing=generateParserThrowing\n'
      + 'this.showTree=showTree\n'
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
      + '\n\n/* CSET */\n\n'
      + cset_prod_js
      + '\n\n /* PEG_codegen_5.js */ \n\n'
      + PEG_codegen_5_js
      // + '\n\nCSET[\'import\'](\'\',CSET)\n\n'
      // + '\n\nCSET.import(\'\',CSET)\n\n' // safari is buggy here
      + '\n\n/* PTNode.js (for showTree() only) */\n\n'
      + PTNode_js
      + '\n})();\n'}

// remaining dependencies:
// p_PEG_v5_RuleSet (parser) comes from ../PEG_v5.js
// PEG_codegen_5 this is the compiled TAL program
// codegen_v5 and the rest of PEG_codegen_5.js
// re_union, from ../re.js
// foldl1, from ../../3box/lists.js
// CSET, used by PEG_codegen_5, from ../cset_prod.js
// showTree, not actually a requirement but nice to have, from ../PTNode.js, though we really don't want most of the rest of that file
// something to tie it all together with options, etc

// The showTree function is useful even after a parser is already generated, so it should be in a separate file.