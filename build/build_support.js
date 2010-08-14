function build_support(support){var requires,exports,comment

 requires=[]

 exports=['showTree','treeWalker']

 comment= '/* Utility functions on PanPG parse trees.\n'
        + ' * PanPG_util as of PanPG version '+current_version+'\n'
        + ' * built on '+(new Date).toUTCString()+'\n'
        + ' * '+reference_url+'\n'
        + ' * MIT Licensed\n */\n\n'

 return comment + build_module('PanPG_util',requires,exports,support)}