process.chdir(__dirname);
PanPG = require('../build/PanPG');
PanPG_util = require('../build/PanPG_util');

fs = require('fs');
sys = require('sys');

var grammar = 'Simple ← String / Integer\nString ← [a-z]+\nInteger ← [0-9]+';
var code = PanPG.generateParser(grammar);
eval(code);
var result = Simple('42');
sys.print(PanPG_util.showTree(result));
result = Simple('abc');
sys.print(PanPG_util.showTree(result));
