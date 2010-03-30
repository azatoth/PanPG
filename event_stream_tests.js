function test_nodeHandler(){var dict,out=[],res,names,parser,s
 s="1+2*3"
 out.push(s+'\n\n')
 parser=p_arith_streaming_v6_default_flags_Expr
 names=parser.names
 res=parser(s)
 assert(res[0],'parse succeeded')
 dict=
  {Expr:function(_,cn){out.push('result: '+cn[0])}
  ,Add:function(_,cn){return sum(cn)}
  ,Mult:function(_,cn){return product(cn)}
  ,Num:function(m){return parseInt(m.text(),10)}
  }
 nodeHandler(dict,names)(res[1],s)
 return out.join('')}