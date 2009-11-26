function codegen_v4(start,prefix,f1s,named_res){var ctx
 ctx={csets:[],strlits:[]}
 return ['function '+prefix+start+'(str){'
 , 'var s=new State(str)'
 ]
 .concat(f1s)
 .concat(named_res.map(named_re_to_function(ctx)))
 .concat(ctx.csets)
 .concat(ctx.strlits)
 .join('\n ')
 +'\n return '+start+'(s)?[true,buildTree(s),s]:[false,s]'
 +'}' }

function named_re_to_function(ctx){return function(named_re){
 return 'var _'+named_re[0]+'='+re_to_function(ctx)(named_re[1])}}