require.paths.unshift('.');
require.paths.unshift('build');

js_ast= require('js_ast').create_ast;
js_pp = require('js_pp');
sys = require('sys');

sys.print(JSON.stringify(js_ast("['abc','d\'ef','\"xyz\",\"XYZ\"']")));


