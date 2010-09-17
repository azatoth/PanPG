require.paths.unshift('.');
require.paths.unshift('../build');

js_ast= require('js_ast').generate_ast;
js_pp = require('js_pp');
sys = require('sys');

sys.print(js_pp.format({},"1+2*3-4%5^5|2 || 56"));


