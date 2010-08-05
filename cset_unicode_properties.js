/* We include all properties mentioned in the ECMA-262 grammar.

ECMA-262 specifies Unicode 3.0 or later versions at implementation discretion.

I guess strings can be used as lists of 16-bit words with arbitrary values.  Given that csets are write-once anyway, an alternative representation as strings rather than arrays might be interesting.  Certainly slower, since strings are not optimized for random access, but as a representation in source code (as in Unicode property tables) it might save some bytes.  Probably not worth the cost of decoding into a list, though.

*/

;(function(){

/* We implement a stateful constructor abstraction for the sequential construction of a cset from a set of increasing codepoints or ranges of codepoints. */

/* A partially constructed cset (pcset) consists of an array which will become a cset, an open state (true when the length of the array is odd), and the most recent (i.e. highest) codepoint added. */

function start(){return [[],false,undefined]}

/* push pushes a new codepoint onto the pcset.  The pcset is always in the open state after a call to push(). */

function push(p,c){
 if(p[1]){
  if(p[2]+1 != c)p[0].push(p[2]+1,c)
  p[2]=c}
 else{
  p[0].push(c)
  p[1]=true
  p[2]=c}}

/* upTo extends the pcset from the most recently inserted codepoint up to the given codepoint, inclusive.  The pcset is left in an open state.  The pcset must be in an open state when upTo is called. */

function upTo(p,c){
 p[2]=c}

/* close closes a pcset which may (or may not) be in the open state, and returns the final cset. */

function close(p){
 if(p[1] && p[2] !== 0x10FFFF)p[0].push(p[2]+1)
 return p[0]}

cset_output=function(){var cat,cats={},
 UnicodeData=getFile('UNIDATA/UnicodeData.txt')
 UnicodeData.split('\n').forEach(function(l){var cp,
  fields=l.split(';');if(fields.length<15)return
  cp=parseInt(fields[0],16);cat=fields[2]
  if(/<.*, Last>/.test(fields[1])){upTo(cats[cat],cp);return}
  if(! (cat in cats)) cats[cat]=start()
  push(cats[cat],cp)})
 for(cat in cats) cats[cat] = close(cats[cat])
 return 'var cset_unicode_categories=\n'+cset_cat_js(cats)+';'}

function cset_cat_js(o){var p,r=[]
 function tohex(n){return (n>9?'0x':'')+n.toString(16).toUpperCase()}
 for(p in o)r.push(p+':['+o[p].map(tohex).join()+']')
 return '{'+r.join('\n,')+'\n}'}

})();