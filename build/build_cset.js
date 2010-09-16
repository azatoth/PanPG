cset_up=require('./cset_unicode_properties');
fs = require('fs');
var output = process.argv[2];

var cset = fs.readFileSync('src/cset.js', 'utf-8');
cset += '(CSET={})';
cset = cset.replace(/var cset_unicode_categories=\{\};?/,'var cset_unicode_categories=\n'+cset_up.unicodeCategories()+';');
cset += ';';

fs.writeFileSync(output, cset);
