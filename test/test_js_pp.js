var js_pp = require('js_pp').format;
var testCase = require('nodeunit').testCase;

function range(low, high, step) {
	// http://kevin.vanzonneveld.net
	// +   original by: Waldo Malqui Silva
	// *     example 1: range ( 0, 12 );
	// *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	// *     example 2: range( 0, 100, 10 );
	// *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
	// *     example 3: range( 'a', 'i' );
	// *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
	// *     example 4: range( 'c', 'a' );
	// *     returns 4: ['c', 'b', 'a']
	var matrix = [];
	var inival, endval, plus;
	var walker = step || 1;
	var chars = false;

	if (!isNaN(low) && ! isNaN(high)) {
		inival = low;
		endval = high;
	} else if (typeof low === 'string' && typeof high === 'string') {
		chars = true;
		walker = Math.floor(walker);
		inival = low.charCodeAt(0);
		endval = high.charCodeAt(0);
	} else {
		inival = (isNaN(low) ? 0: low);
		endval = (isNaN(high) ? 0: high);
	}

	plus = ((inival > endval) ? false: true);
	if (plus) {
		while (inival <= endval) {
			matrix.push(((chars) ? String.fromCharCode(inival) : inival));
			inival += walker;
		}
	} else {
		while (inival >= endval) {
			matrix.push(((chars) ? String.fromCharCode(inival) : inival));
			inival -= walker;
		}
	}

	return matrix;
}

module.exports = testCase({
	setUp: function() {
		this.options = {
			semicolons: 'all',
			indentation: 2,
			newline_before_closing_brace: false,
			space_around_operators: true,
			space_inside_parens: false,
			space_inside_if_test_parens: false,
			space_before_if_test: false,
			space_after_single_line_if_test: true,
			string_quote_style: 'shorter-or-double'
		}
		// set up
	},
	tearDown: function() {
		// clean up
	},
	'test format single numbers': function(test) {
		var r = range(0, 9);
		test.equals(js_pp(this.options, r.join(';')), r.join(';\n') + ';');
		test.done();
	},
	'test all single letter identifier': function(test) {
		var r = range('a', 'z');
		test.equals(js_pp(this.options, r.join(';')), r.join(';\n') + ';');
		test.done();
	},
	'test addition': function(test) {
		var r = range(0, 9).concat(range('a', 'z'));
		test.equals(js_pp(this.options, r.join('+')), r.join(' + ') + ';');
		test.done();
	},
	'test subtraction': function(test) {
		var r = range(0, 9).concat(range('a', 'z'));
		test.equals(js_pp(this.options, r.join('-')), r.join(' - ') + ';');
		test.done();
	},
	'test multiplication': function(test) {
		var r = range(0, 9).concat(range('a', 'z'));
		test.equals(js_pp(this.options, r.join('*')), r.join(' * ') + ';');
		test.done();
	},
	'test division': function(test) {
		var r = range(0, 9).concat(range('a', 'z'));
		test.equals(js_pp(this.options, r.join('/')), r.join(' / ') + ';');
		test.done();
	},
	'test modulus': function(test) {
		var r = range(0, 9).concat(range('a', 'z'));
		test.equals(js_pp(this.options, r.join('%')), r.join(' % ') + ';');
		test.done();
	},
	'test all artimetics (+-*/%)': function(test) {
		var r1 = range(0, 9).concat(range('a', 'z'));
		var r2 = ['+', '-', '*', '/', '%'];
		var idx1 = idx2 = 0,
		code = [];
		while (idx1 < r1.length) {
			code.push(r1[idx1]);
			code.push(r2[idx2]);
			idx1++;
			idx2 = (idx2 + 1) % r2.length;
		}
		code.pop();
		test.equals(js_pp(this.options, code.join('')), code.join(' ') + ';');
		test.done();
	},
	'test string': function(test) {
		test.equals(js_pp(this.options, '\'""\''), '\'""\';');
		test.done();
	},
	'test array': function(test) {
		test.equals(js_pp(this.options, '[]'), '[];');
		test.equals(js_pp(this.options, '[a]'), '[a];');
		test.equals(js_pp(this.options, '[a,b]'), '[a,b];');
		test.done();
	},
	'test call function': function(test) {
		test.equals(js_pp(this.options, 'foo()'), 'foo();');
		test.done();
	},
	'test "intresting cases"': function(test) {
		test.equals(js_pp(this.options, '3 * (1 + 2)'), '3 * (1 + 2);', 'arithmetic precedence');
		test.equals(js_pp(this.options, 'if(x) foo();'), 'if(x) foo();', 'if statement');
        test.equals(js_pp(this.options,'1+2%3*4-5+6/7*8'),'1 + 2 % 3 * 4 - 5 + 6 / 7 * 8;','precedence');
        test.equals(js_pp(this.options,'(1+2)*3'),'(1 + 2) * 3;');
        test.equals(js_pp(this.options,'1*(2+3)'),'1 * (2 + 3);');
		test.equals(js_pp(this.options, "['abc','d\\'ef','\"xyz\",\"XYZ\"']"), '["abc","d\'ef",\'"xyz","XYZ"\'];');
		test.equals(js_pp(this.options, 'if(x) moderately_long_sub_expression(argument,argument_2)'), 'if(x) moderately_long_sub_expression(argument, argument_2);');
		test.equals(js_pp(this.options, '3 - 2 - 1'), '3 - 2 - 1;');
		test.equals(js_pp(this.options, 'if(x){foo()}'), 'if(x){\n foo();\n}');
		test.done();
	},
	'test number format': function(test) {
		this.options.number_radix_preference = 10;
		test.equals(js_pp(this.options, '10'), '10;');
		test.equals(js_pp(this.options, '255'), '255;');
		test.equals(js_pp(this.options, '256'), '256;');
		test.equals(js_pp(this.options, '1024'), '1024;');

		this.options.number_radix_preference = 16;
		test.equals(js_pp(this.options, '10'), '0xa;');
		test.equals(js_pp(this.options, '255'), '0xff;');
		test.equals(js_pp(this.options, '256'), '0x100;');
		test.equals(js_pp(this.options, '1024'), '0x400;');
		test.done();
    },
    'test regexp': function(test) {
        test.equals(js_pp(this.options, '/a(b.*?)/'), '/a(b.*?)/;');
        test.equals(js_pp(this.options, '/a(b.*?)/g'), '/a(b.*?)/g;');
        test.equals(js_pp(this.options, '/a(b.*?)/mg'), '/a(b.*?)/mg;');
        test.done();
    },
    'test if-statement': function(test) {
        test.equals(js_pp(this.options, 'if(true);'), 'if(true) ;');
        test.equals(js_pp(this.options, 'if(true){};'), 'if(true){\n}\n;');
        test.equals(js_pp(this.options, 'if(true){return};'), 'if(true){\n return;\n}\n;');
        test.done();
    },
    'test for-statement': function(test) {
		this.options.number_radix_preference = 10;
        test.equals(js_pp(this.options, 'for(;;){};'), 'for (;;) {\n}\n;');
        test.equals(js_pp(this.options, 'for(i=0;;){};'), 'for (i = 0;;) {\n}\n;');
        test.equals(js_pp(this.options, 'for(var i=0;;){};'), 'for (var i=0;;) {\n}\n;');
        test.equals(js_pp(this.options, 'for(var i=0;i<10;++i){};'), 'for (var i=0; i < 10; ++i) {\n}\n;');
        //test.equals(js_pp(this.options, 'for(i=0;;){};'), ';');
        //test.equals(js_pp(this.options, 'for(var i=0;;){};'), ';');
        //test.equals(js_pp(this.options, 'for(var i in {}){};'), ';');
        test.done();
    },    
    
});

