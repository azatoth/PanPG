// Characters outside the BMP which should nonetheless be acceptable as IdentifierStart characters
// Unfortunately this test fails in spidermonkey with "SyntaxError: illegal character" at the first occurrence

function 𝑎(𝑎){return 𝑎} // 𝑎 U+1D44E MATHEMATICAL ITALIC SMALL A, in General Category Ll
function 𝒻(){return "𝒻"} // 𝒻 U+1D4BB MATHEMATICAL SCRIPT SMALL F