var PanPG = require('./PanPG');
var fs = require('fs');
/**
 * @params options - hash
 *  - output : output file to write parser to
 *  - grammar : grammar file
 *  - patches : patch files
 *  - fname : function name
 *  - startrule : rule to start the parser on
 *  - commonjs : make parser commonjs compatible
 */
exports.generate = function( options ) {
	var grammar = fs.readFileSync(options.grammar, 'utf-8');
	var output = options.output;
	delete options.grammar;
	delete options.output;
	options.patches = options.patches.map( 
		function(o) { 
			return fs.readFileSync( o, 'utf-8' ) 
		} 
	);
	var result = PanPG.generateParser( grammar, options );
	result = result.replace( /[, ]+\]/, ']'); // should be fixed imo
	fs.writeFileSync( output, result, 'utf-8' );
}
