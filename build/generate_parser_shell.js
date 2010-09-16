var optparse = require('./optparse');
var generate_parser = require('./generate_parser');

var options = {
	'output': undefined,
	'start': undefined,
	'fname': undefined,
	'commonjs': false,
	'patches': []
}

var switches = [
    ['-o', '--output FILE', 'the javascript file to write the parser to'],
    ['-s', '--startrule NAME', 'which rule to start with'],
    ['-f', '--fname NAME', 'name of the function to return'],
    ['-c', '--commonjs', 'export commonjs enabled code'],
    ['-i', '--input FILE', 'the main input grammar file'],
    ['-p', '--patch FILE', 'apply this grammar as patch'],
];

var parser = new optparse.OptionParser(switches);


parser.on('output', function(opt, value) {
		options.output = value;
});
parser.on('startrule', function(opt, value) {
		options.start = value;
});
parser.on('fname', function(opt, value) {
		options.fname = value;
});
parser.on('commonjs', function(opt, value) {
		options.commonjs = true;
});

parser.on('patch', function(opt, value) {
		options.patches.push(value);
});
parser.on('input', function(opt, value) {
		options.grammar = value;
});

var rest = parser.parse(process.argv.slice(2));

generate_parser.generate( options );
