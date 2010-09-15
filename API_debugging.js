function checkTrace(msgs){var i,l,m
 ,msg,S,pos,R,stack,posns,bufs,buf // regex captures
 ,calls=[],callstack=[],call,notes=[],prev_state,parser_is_resuming
 for(i=0,l=msgs.length;i<l;i++){
  if(m=/^(\w+)\sS:(\S+) pos:(\d+) R:(\S+) stack:((?:,?\d+)*) posns:(\S*) bufs:(\S*) buf:(.*)/.exec(msgs[i])){
   msg=m[1],S=m[2],pos=m[3],R=m[4],stack=m[5],posns=m[6],bufs=m[7],buf=m[8]
   if(msg=='main'){
    if(parser_is_resuming){
         calls.push({resuming:true})}
    else{
         call={depth:callstack.length,expr:S,start:pos,main_stack:stack
              ,main_posns:posns}
         calls.push(call)
         if(!parser_is_resuming)callstack.push(call)}}
   if(msg=='result'){
        call=callstack.pop()
        if(!call){calls.push({error:'empty stack'});continue}
        call.result=R
        call.end=pos
        if(S != call.expr) call.expr = 'XXX:' + call.expr + '!=' + S
        call.result_stack=stack
        call.result_posns=posns}
   if(msg=='test'){
        if(parser_is_resuming){
         if(!equal_states(msgs[i],prev_state)){
          calls.push({error:'parser resumed in a different state'
                            +msgs[i]+' '+prev_state})}}
        prev_state=msgs[i]
        if(!call){calls.push({error:'test without main'});continue}
        call.test_posns=posns
        parser_is_resuming=false}}
  if(m=/^ready/.exec(msgs[i])){
   // after requesting a chunk a parser should resume in the same state
   parser_is_resuming=true}}
 return calls.map(show).join('\n')
 function equal_states(a,b){
  return a.replace(/ . R/,'  R')
          .replace(/dp:\S*/,'')
      == b.replace(/dp:\S*/,'')}
 function show(call){var indent
  if(call.error)return 'ERROR: '+call.error
  if(call.resuming)return '────────┤chunk├────────'
  indent=Array(call.depth+1).join(' ').replace(/.../g,'  ↓')
  if(call.result==undefined)return indent + call.expr + ' [-]'
  return indent
       + call.expr
       + ' '+call.start+'→'+call.end+''
       + ' '+(call.stack_before==call.stack_after?''
               :'XXX:changed stack '+call.stack_before+'→'+call.stack_after)
       + (call.test_posns? // won't exist if it was cached
          (call.test_posns==call.result_posns?'':' XXX: changed position stack')
          :'')
       + (call.result=='false'?' [x]':'')}}

// TODO: this could be in a third file API_debugging since it is not necessary for compiling and is not exactly part of the support API (which should not depend on the compiler).

function explain(grammar,opts,input){var either_error_parser,parser,trace,streaming_parser,tree
 // generate a parser
 opts=extend({},opts)
 opts.dfa=true // XXX added during testing because parsers currently don't work otherwise (at least the tested JSON parser)
 opts.fname='trace_test'
 opts.trace=true
 //opts.debug=true
 //opts.asserts=true
 either_error_parser=memoized(grammar)
 if(!either_error_parser[0])return'Cannot generate parser: '+either_error_parser[1]
 //return either_error_parser
 //return(either_error_parser[1]+'\n;'+opts.fname)
 parser=eval(either_error_parser[1]+'\n;'+opts.fname)

 // parse the input
 trace=[],tree=[]
 streaming_parser=parser(message_handler)
 function message_handler(m,x,y){
  trace.push(m+'\t'+x+(y?' '+y:''))
  if(m=='tree segment')tree=tree.concat(x)}
 streaming_parser('chunk',input)
 streaming_parser('eof')

 // explain the result
 return [input
        ,'input length '+input.length
        ,showTree({tree:tree,input:input,names:parser.names})
        ,checkTrace(trace)
        ,trace.join('\n')
        ].join('\n\n')

 // helpers
 function memoized(grammar){var cache // XXX should test opts too
  cache = explain.cache = explain.cache || {}
  return cache[grammar] = cache[grammar] || generateParser(grammar,opts)}
 function extend(a,b){for(var p in b)a[p]=b[p];return a}}
