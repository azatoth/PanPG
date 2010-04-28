// in the browser, dependencies need to be included on the page
// in a CommonJS environment we use require()



if(typeof require=='function'){



var ES5Parser=require('ES5_commonjs')
//  , PanPG=require('PanPG_util')

}

function format(s){var res,cbs,out,hide
 // parse the input
 res=ES5Parser.parse(s)

 // `res` is now a parse tree (or an error if the parse failed)
 //return pp(res)

 // next we process it with a post-order traversal with side-effecting callbacks

 cbs= // callbacks for each rule in the grammar (that we care about)

  // callbacks get two arguments: match object and children
  //   match object has a .text() method which gives you the actual match, sliced out of the input string
  //   children is the return values, if any, of the child nodes in the parse tree, if you didn't define callbacks that returned something on the child nodes then this will just be an empty array
  {Identifier:
    // to pretty-print an identifier we just print it
    function(m,cn){return m.text()}

  ,FunctionDeclaration:
    function(m,cn){return 'function '+cn[0]+'('+cn[1]+'){'+cn[2]+'}'}

  ,FormalParameterList:
    function(m,cn){return cn.join(', ')}

  ,FunctionBody:
    function(m,cn){
var s = ''
for (var i in cn) s += i+"\n"
return s
}

  ,Program:
    function(m,cn){out=cn.join('')}
  }

 // process it
 treeWalker(cbs,res)

 // regular output:
 //return out

 // there are some nodes in the parse tree we just don't care about...
 // so let's hide them
 hide=
  ['IdentifierStart'
  ,'IdentifierPart'
  ,'UnicodeLetter'
  ,'anonymous'
  ]

 // if you want to see everything:
 hide=[]

 // testing output:
 return 'input:\n'+s
      + '\n\noutput:\n'+pp(out) // pp() is a pretty printer for JS values
      + '\n\nparse tree:\n'+showResult(res,{hide:hide})}
