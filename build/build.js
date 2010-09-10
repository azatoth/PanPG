var reference_url='http://boshi.inimino.org/3box/PanPG/about.html'
  , current_version='0.0.7'

function build_compiler
 (API_compiling
 ,API_debugging
 ,API_support
 ,PEG_codegen_6_attr_js
 ,PEG_codegen_6_js
 ,             _tree_attribution
 ,             _dfa_generation
 ,             _dfa_output
 ,             _character_equivalence_classes
 ,             _rle
 ,             _expression_flags
 ,parsePEG_js
 ,re_js
 ,lists_js
 ,cset_prod_js
 ,assert_js
 )
 {var comment,requires,exports,body

 comment= '/* PanPG '+current_version+'\n'
        + ' * PEG → JavaScript parser generator, with its dependencies.\n'
        + ' * built on '+(new Date).toUTCString()+'\n'
        + ' * See '+reference_url+'\n'
        + ' * MIT Licensed\n */\n\n'

 exports=
  ['generateParser','explain']

 requires=[]

 body = API_compiling +'\n'
      + API_debugging +'\n'
      + API_support
      + '\n\n /* parsePEG.js */ \n\n'
      + parsePEG_js
      + '\n\n/* re.js */\n\n'
      + re_js
      + '\n\n/* lists.js */\n\n'
      + lists_js
      + '\n\n/* assert.js */\n\n'
      + assert_js
      + '\n\n/* CSET */\n\n'
      + ugly_hack(cset_prod_js)
      + '\n\n/* PEG_codegen_6_attr.js */ \n\n'
      + PEG_codegen_6_attr_js
      + '\n\n/* PEG_codegen_6.js */ \n\n'
      + PEG_codegen_6_js +'\n\n'
      + _tree_attribution+'\n\n'
      + _dfa_generation+'\n\n'
      + _dfa_output+'\n\n'
      + _character_equivalence_classes+'\n\n'
      + _rle+'\n\n'
      + _expression_flags+'\n\n'

 return comment + build_module('PanPG',requires,exports,body)}

// one module is included directly in another here, with the 'typeof exports' test this doesn't work well, so we use an ugly hack.  A better solution will be to have some dependency system fold the required module in.

function ugly_hack(cset){var test=0,ret
 ret = cset.replace(/typeof exports=='object'\?exports:CSET={}/,function(){test=1;return 'CSET={}'})
 if(!test)throw new Error('the ugly hack broke')
 return ret}
