function build_commonjs_module(js_pp){var exports,requires,locals,body
 requires=['ES5Parser','PanPG_util']
 exports=['format']
 locals='var treeWalker=PanPG_util.treeWalker\n  , showResult=PanPG_util.showResult\n\n'
 body=locals+js_pp
 return build_module('js_pp',requires,exports,body)}