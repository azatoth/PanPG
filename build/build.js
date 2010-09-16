build = require("./build_module")
fs = require('fs');
path = require('path');

var output = process.argv[2];

var reference_url = 'http://boshi.inimino.org/3box/PanPG/about.html', current_version = '0.0.7x';

var exports = ['generateParser','explain'];

var requires = [];

var comment= '\/\* PanPG '+current_version+'\n' +
	' * PEG → JavaScript parser generator, with its dependencies.\n' +
	' * built on '+(new Date).toUTCString()+'\n' +
	' * See '+reference_url+'\n' +
	' * MIT Licensed\n */\n\n';

var includes = [
	'src/contrib/util.js',
	'src/API_compiling.js',
	'src/API_debugging.js',
	'src/API_support.js',
	'build/parsePEG.js',
	'src/re.js',
	'src/contrib/lists.js',
	'src/contrib/assert.js',
	'build/cset.js',
	'src/codegen_6_attr.js',
	'src/codegen_6.js',
	'src/codegen_6_tree_attribution.js',
	'src/codegen_6_dfa_generation.js',
	'src/codegen_6_dfa_output.js',
	'src/codegen_6_character_equivalence_classes.js',
	'src/codegen_6_run_length_encoding.js',
	'src/codegen_6_expression_flags.js'
];

var body = includes.map(function( name ) {
		return "/* " + path.basename(name) + " */\n\n" + fs.readFileSync(name, 'utf-8') + "\n\n";
	}).join("\n");

var result = comment + build.build_module('PanPG',requires,exports,body);

fs.writeFileSync( output, result, 'utf-8' );
