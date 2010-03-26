// both of these are in Unicode General Category Ll (lowercase letters) and should be valid IdentifierStart characters.
// Spidermonkey passes, but Firefox as of 3.5.8 fails on the first of these.

function ϵ(){return "ϵ"} // ϵ U+03F5 LUNATE EPSILON SYMBOL
function ε(){return "ε"} // ε U+03B5 GREEK SMALL LETTER EPSILON