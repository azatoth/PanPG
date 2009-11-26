function scratch(){

 //return

 //return pp(partial[2][0][65])

 /*
 //return pp(partial[3]['DebuggerStatement'])
 var z=partial[3]['DebuggerStatement']
 var zz=z.toSource()
 z=eval(zz)
 z[1][0][1][1][1][1][0][1][0][1]=[65,91]
 z[1][0][1][1][1][1][1][1]=[48,58]
 z[1][2][1][0][1][0][3][3][1][0][1]=[9,10,11,13]
 //return pp(z[1][2][1][0][1][0][3][3][1][0][1]=[9,10,11,13]
 return pp(re_serialize(z))
 var za=re_from_str('"a"')
   , zb=re_union([re_from_cset(cset_fromString('b'))
                 ,re_from_str('"c"')])
 zz=re_sequence([za,zb])// assert a(b|c)
 return pp(re_serialize(zz))
 return pp(zz)
 return pp(z)
 /* TODO: create re tests */

 var x=getFile('cset.js'),y=p_ES5_Program
 //var x=getFile('scratch_buffer_2'),y=p_ES5_Program
 //var x=getFile('scratch.js'),y=p_ES5_Program
 //x=getFile('scratch_buffer_2')
 //x="a=f();",y=p_ES5_Statement
 //x="a=b",y=p_ES5_AssignmentExpr
 //x="function createParserContext(peg,prefix){var ret\n\
 // ,n2_body=cached.cache['_n2'].txt\n\
 // ,n2_ast=parseTMProg(n2_body)\n\
 // ,peg_tree=tree(p_PEG_RuleSet,peg)\n\
 // if(peg_tree[0]==false) return \"no parse\"\n\
 // ret=applyTMProg(n2_ast,\"{prefix:'\"+prefix+\"'}\",peg_tree[1],peg,'match_code')\n\
 // return ret}",y=p_ES5_Program
 //x="f(a,0+1,b);",y=p_ES5_Program
 //x="(a,0+1,b)",y=p_ES5_Arguments
 //x="{if(0){}else{}}",y=p_ES5_Block
 //x="function empty(){return true}",y=p_ES5_Program
 //x="State.prototype.fin=function(a,p,result){\n this.tbl[a[1]][a[0]]=\n  result?\n   p?[true,this.pos,p]\n    :[true,this.pos]\n  :false\n return result}",y=p_ES5_Statement
 //x="switch(s){case '': break}",y=p_ES5_Program
 //x="switch(s[i]){\ncase '[':\n i=n\n break}",y=p_ES5_Program
 //return x.length

 //x="function test(p_,str){\n var s=new State(str)\n return (p_(s) && s.str()=='')}";y=p_ES5_FunctionDeclaration

 //x="return (p_(s) && s.str()=='');";y=p_ES5_ReturnStatement

 //return uneval(x)
 var s=new State(x)
 y(s)
 //return explainParseFailure([false,s])
 var n=0
 var ret=s.log.get()
 //var ret=pp(s)
 return x.length
 +'\n'+ ret.slice(n*4096,(n+4)*4096)
 return showTree(buildTree(s))

 if(!y[0])return pp(explainParseFailure(y))
 return x
 /**/

 var n=3,k=32768
 return partial[4].slice(n*k,(n+1)*k)

 return pp(partial[3]['Identifier']).slice(0,32768)

 return partial[4].replace(/\(\?!.*?\)/g,'(?!…)').slice(0,32768)

 //return pp(partial[3]['DebuggerStatement'])
 var x=166,p
 for(p in partial[3])if(!x--)return pp([p,partial[3][p]])
 return dir(partial[3])}

/*function scratch(){

 var x=getFile('API.js')

 return pp(showTree(tree(p_ES_test_tokenize,x)[1]))

 //return dir(it2[0])

 return re_serialize(it2[0].IdentifierName)
 return pp(it2[2].Token)

 return re_serialize(it2[0].Token)
 return re_serialize(it2[0].DecimalIntegerLiteral)
 return re_serialize(it2[0].DecimalDigits)
 return re_serialize(it2[0].InputElementDiv)

 return pp(it2[0])

  var nl='\n\n'
 ,re=it['DecimalDigits']
  re=it['ExponentPart']
  re=it['Comment']
  re=it['CharacterEscapeSequence']
 //return dir(it)
 return pp(re)
  +nl+  pp(re_simplify(re))
  +nl+  log.get()
  +nl+  re_serialize(re_simplify(re))}/**/