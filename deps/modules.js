function build_module(name,requires,exports,body){var ret=[]
 ret.push(';(function(exports){\n')
 requires.forEach(function(require){ret.push('var '+require+'=require(\''+require+'\')\n')})
 ret.push('\n')
 ret.push(body.replace(/\n+$/,''))
 ret.push('\n\n')
 exports.forEach(function(e){ret.push('exports.'+e+'='+e+'\n')}) // N.B. 'export' is reserved
 ret.push('\n')
 ret.push('})(typeof exports==\'object\'?exports:'+name+'={});\n')
 return ret.join('')}