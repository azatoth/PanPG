var optparse = require('./optparse');

build = require("./build_module")
fs = require('fs');
path = require('path');

var options = {
	'output': undefined,
	'version': "0.0.1",
	'package': "",
	'reference_url': "http://boshi.inimino.org/3box/PanPG/about.html",
	'license': "MIT Licensed",
	'exports': [],
	'requires': [],
	'includes': []
}
var switches = [
    ['-o', '--output FILE', 'output filename'],
    ['-v', '--version TEXT', 'version if package'],
    ['-p', '--package NAME', 'package name'],
    ['-d', '--description TEXT', 'package description'],
    ['-R', '--reference_url URL', 'reference url'],
    ['-l', '--license TEXT', 'license'],
    ['-e', '--export MEMBER', 'exported member'],
    ['-r', '--require MODULE', 'module to require'],
    ['-i', '--include FILE', 'file to include']
];
var parser = new optparse.OptionParser(switches);


parser.on('output', function(opt, value) {options.output = value;});
parser.on('version', function(opt, value) {options.version = value;});
parser.on('package', function(opt, value) {options.package = value;});
parser.on('description', function(opt, value) {options.description = value;});
parser.on('reference_url', function(opt, value) {options.reference_url = value;});
parser.on('license', function(opt, value) {options.license = value;});
parser.on('export', function(opt, value) {options.exports.push(value);});
parser.on('require', function(opt, value) {options.requires.push(value);});
parser.on('include', function(opt, value) {options.includes.push(value);});

var rest = parser.parse(process.argv.slice(2));

var comment= '\/\* '+options.package + " " +options.version+'\n' +
	' * ' + options.description + '.\n' +
	' * built on '+(new Date).toUTCString()+'\n' +
	' * See '+options.reference_url+'\n' +
	' * ' + options.license + '\n */\n\n';

var body = options.includes.map(function( name ) {
		return "/* " + path.basename(name) + " */\n\n" + fs.readFileSync(name, 'utf-8') + "\n\n";
	}).join("\n");

var result = comment + build.build_module(options.package,options.requires,options.exports,body);

fs.writeFileSync( options.output, result, 'utf-8' );
