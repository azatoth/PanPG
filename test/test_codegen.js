var nodeunit = require('nodeunit'),
testCase = nodeunit.testCase,
Script = process.binding('evals').Script,
sbox = nodeunit.utils.sandbox;

var r = 0;
module.exports = testCase({
    setUp: function () {
        var sandbox = {
            require: require,
            process: process,
            __dirname: __dirname,
            __filename: __filename,
            module: module,
            global: global
        }

        Script.runInNewContext('PanPG = require(\'../build/PanPG\')',sandbox);
        this.generateParser = function(grammar, opts){
            opts = opts || {};
            opts.fname = 'parser';
            opts.asserts=true
            var parser = sandbox.PanPG.generateParser(grammar, opts);
            Script.runInNewContext(parser,sandbox);
            return sandbox.parser;
        };

        // set up
    },
    tearDown: function () {
        // clean up
    },
    'test parse \'True ← "true"\'': function (test) {
        var parser = this.generateParser('True ← "true"');
        test.ok(parser('true')[0], 'parsed ok');
        test.done();
    },
    'test parse \'S ← "a"\'': function (test) {
        var parser = this.generateParser('S ← "a"');
        test.ok(parser('a')[0], 'parsed ok');
        test.done();

    },
    'test with elide SpaceAtom': function (test) {
        var grammar = 'RS ← R LB R\n'+
        'R  ← [ A-Z ]+ S?\n'+
        'LB ← [U+000A]\n'+
        'S  ← SpaceAtom+\n'+
        'SpaceAtom ← " " / LB " "';
        var input = 'S \nS';
        var tree = [1,2,-1,1,4,-2,1,-2,2,3,-2,1,2,-2,1,-2,4];
        var options = {elide:['SpaceAtom']};

        var parser = this.generateParser(grammar,options);
        test.deepEqual(parser(input)[1].tree,tree, 'tree matches');
        test.done();
    },
    'test with elide S, SpaceAtom, and LB': function (test) {
        var grammar = 'X ← Y LB+ Y\n'+
        'Y ← [A-Z] S?\n'+
        'S ← SpaceAtom+\n'+
        'SpaceAtom ← " " / LB " "\n'+
        'LB ← [U+000A]';
        var input = 'S \nS';
        var tree = [1,2,-2,2,-1,1,2,-2,1,-2,4];
        var options = {elide:['S','SpaceAtom','LB']};

        var parser = this.generateParser(grammar,options);
        test.deepEqual(parser(input)[1].tree,tree, 'tree matches');
        test.done();
    },
    'test bug with single identifier name "f"': function (test) {
        var grammar = 'S ← !(Keyword) "f"\n'+
        'Keyword ← "fi" / "fo" / "fu" / "if" / "ins" / "in"';
        var input = 'f';
        var tree = [1,-2,1];
        var options = {};

        var parser = this.generateParser(grammar,options);
        test.deepEqual(parser(input)[1].tree,tree, 'tree matches');
        test.done();
    }
});

