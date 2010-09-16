process.chdir(__dirname);
PanPG = require('../build/PanPG');
PanPG_util=require('../build/PanPG_util');

fs = require('fs');
sys = require('sys');

click.start = new Date();
click.last = new Date();

function click(msg) {
	var total = (new Date(0));
	var date = (new Date(0));
	total.setUTCMilliseconds( (new Date()) - click.start );
	date.setUTCMilliseconds( (new Date()) - click.last );
	sys.print( "[" + total.getUTCMinutes() +
			"m" + Number( total.getUTCSeconds() + "." + total.getUTCMilliseconds() ).toFixed(3) +
			"s] " +
			msg +
			" (" +
			date.getUTCMinutes() + 'm' +
			Number( date.getUTCSeconds() + '.' + date.getUTCMilliseconds() ).toFixed(3) + 
			"s)\n"
	);
	click.last = new Date();
}
var grammar = fs.readFileSync('../grammars/ECMAScript_5.peg', 'utf-8');
click("read base grammar");
var streamable = fs.readFileSync('../grammars/ECMAScript_5_streamable.peg', 'utf-8');
click("read streaming grammar");
var result = PanPG.generateParser( grammar, {start:'Program', fname: 'parseES5', patches:[streamable]}, {} );
click("generated parser");
eval(result);
click("executed parser");
var jquery = fs.readFileSync('jquery.js', 'utf-8');
click("read jquery.js");
var r = parseES5(jquery);
click("parsed jQuery");
