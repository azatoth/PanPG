function test_nodeHandler(){var dict,out=[],result,names,parser,s
 s="1+2*3"
 out.push(s+'\n\n')
 parser=p_arith_streaming_v6_default_flags_Expr
 names=parser.names
 result=parser(s)
 assert(result[0],'parse succeeded')
return showResult(result,names,s)
 dict=
  {Expr:function(_,cn){out.push('result: '+cn[0])}
  ,Add:function(_,cn){return sum(cn)}
  ,Mult:function(_,cn){return product(cn)}
  ,Num:function(m){return parseInt(m.text(),10)}
  }
 nodeHandler(dict,names)(result,s)
 return out.join('')}