/* These are browser tests more than code tests.  We determine what combinations of UTF-16 characters are supported in strings and regexes. */

function cset_re_tests(){
 var c1='￮' //U+FFEE, one of the last printable characters in the BMP
   , c2='A' //U+0041 LATIN CAPITAL LETTER A
   , c3='𐏑' //U+103D1 OLD PERSIAN NUMBER ONE
   , c4='𐏃' //U+103C3 OLD PERSIAN SIGN HA
   , c5='𐏕' //U+103D5 OLD PERSIAN NUMBER HUNDRED
   , c6='\uDC00' //U+DC00 start of low surrogate range
   , c7='\uD801' //U+D801 a high surrogate
   , re1=/￮/
   , re2=/A/
   , re3=/𐏑/
   , recc1=/[￮]/
   , recc2=/[A]/
   , recc3=/[𐏑]/
   , recc3_alt=/\uD800\uDFD1/
   , re_old_persian=/\uD800[\uDFA0-\uDFDF]/
      //Old Persian is U+103A0 – U+103DF
   , re_full=/[\u0000-\ud7ff\udc00-\uffff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udbff]/ //any single Unicode character as one or two UTF-16 code units, including high or low surrogates appearing individually
 return pp(
  [c1
  ,c2
  ,c3
  ].map(function(c) c+' '+c.length))
 +'\n\n'+pp(
  [re1.exec(c1)
  ,re2.exec(c2)
  ,re3.exec(c3)
  ])
 +'\n\n'+pp(
  [recc1.exec(c1)
  ,recc2.exec(c2)
  ,recc3.exec(c3)
  ,recc3.exec(c3)[0].length
  ,recc3.exec(c3)[0].charCodeAt(0).toString(16)
  ,recc3.exec(c3.slice(1))[0].charCodeAt(0).toString(16)
  ,recc3.exec('\uDFD1')[0].charCodeAt(0).toString(16)])
 +'\n\n'+pp(
  [recc3_alt.exec(c3)
  ,recc3_alt.exec('\uDFD1')])
 +'\n\n'+pp(
  [re_old_persian.exec(c3)
  ,re_old_persian.exec(c4)
  ,re_old_persian.exec(c5)
  ,re_old_persian.exec('\uD800')])
 +'\n\n'+pp(
  [re_full.exec(c1)
  ,re_full.exec(c2)
  ,re_full.exec(c3)
  ,re_full.exec(c4)
  ,re_full.exec(c5)
  ,re_full.exec(c6)
  ,re_full.exec(c7)])}

/* So we see the expected results according to ECMA-262. */