{cfunc:'build_PEG_compiler',ciset:'build',outfn:'PanPG_generator.js',outct:'text/javascript'

//,cfunc:'build_support',ciset:'support',outfn:'PanPG_util.js',outct:'text/javascript'

,cfunc:'build_es5',ciset:'es5',outfn:'ES5.js',outct:'text/javascript'

,isets:
 {build:['file(../API_compiling.js)'
        ,'file(../PEG_codegen_6_attr.js)'
        ,'file(../PEG_codegen_6.js)'
        ,'file(../parsePEG.js)'
        ,'file(../re.js)'
        ,'file(../../3box/lists.js)'
        ,'file(../cset_prod.js)'
        ,'file(../../3box/assert.js)'
        ]
 ,support:['file(../API_support.js)']
 ,es5:['file(../ES5_v6_default.js)']
 }

,'const':
 {}
}