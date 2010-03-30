function test_streamHandler(){var dict,out=[],node,stack=[],parent,string,result,names
 string="1+2*3"
 out.push(string+'\n\n')
 result=p_arith_streaming_v6_default_flags_Expr(string)
 names=p_arith_streaming_v6_default_flags_Expr.names
 if(!result[0])return showResult(result)
 dict=
  {Expr_close:function(){out.push(node.cn[0])}
  ,Expr_open:function(){node={cn:[]}}
  ,Add_open:function(){stack.push(node);node={cn:[]}}
  ,Add_close:function(){
    parent=stack.pop()
    parent.cn.push(sum(node.cn))
    node=parent}
  ,Mult_open:function(){stack.push(node);node={cn:[]}}
  ,Mult_close:function(){
    parent=stack.pop()
    parent.cn.push(product(node.cn))
    node=parent}
  ,Num_close:function(start,end){
    node.cn.push(parseInt(string.slice(start,end),10))}
  }
 streamHandler(dict,names)(result[1])
 return out.join('')}