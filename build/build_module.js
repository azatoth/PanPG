exports.build_module = function(name, requires, exports, body) {
	var ret = [];
	ret.push(';(function(exports){\n');
	requires.forEach(function(require) {
		var target = require;
		var index = require.indexOf(':');
		if( index != -1 ) {
			target = require.substring( index + 1 );
			require = require.substring( 0, index );
		}
		ret.push('var ' + target + '=require(\'' + require + '\')\n');
	})
	ret.push('\n');
	ret.push(body.replace(/\n+$/, ''));
	ret.push('\n\n');
	exports.forEach(function(export) {
		var target = export;
		var index = export.indexOf(':');
		if( index != -1 ) {
			target = export.substring( index + 1);
			export = export.substring( 0, index );
		}
		ret.push('exports.' + target + '=' + export + '\n');
	})
	ret.push('\n');
	ret.push('})(typeof exports==\'object\'?exports:' + name + '={});\n');
	return ret.join('\n');
};
