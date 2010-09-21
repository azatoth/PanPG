var js_pp = require('js_pp').format;
var testCase = require('nodeunit').testCase;

function range ( low, high, step ) {
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
    var chars  = false;

    if ( !isNaN( low ) && !isNaN( high ) ) {
        inival = low;
        endval = high;
    } else if ( isNaN( low ) && isNaN( high ) ) {
        chars = true;
        inival = low.charCodeAt( 0 );
        endval = high.charCodeAt( 0 );
    } else {
        inival = ( isNaN( low ) ? 0 : low );
        endval = ( isNaN( high ) ? 0 : high );
    }

    plus = ( ( inival > endval ) ? false : true );
    if ( plus ) {
        while ( inival <= endval ) {
            matrix.push( ( ( chars ) ? String.fromCharCode( inival ) : inival ) );
            inival += walker;
        }
    } else {
        while ( inival >= endval ) {
            matrix.push( ( ( chars ) ? String.fromCharCode( inival ) : inival ) );
            inival -= walker;
        }
    }

    return matrix;
}

module.exports = testCase({
    setUp: function () {
		this.options = {
			"semicolons": "all",
			"indentation": 2,
			"newline_before_closing_brace": true,
			"space_after_comma": true,
			"space_around_operators": true,
			"space_inside_parens": false,
			"number_radix": 10,
			"object_literal_comma_first": false,
			"blank_before_function": true,
			"space_inside_if_test_parens": false,
			"space_before_if_test": true,
			"space_after_single_line_if_test": true,
			"control_statement_braces": "preserve",
			"control_statement_empty": "empty-statement",
			"string_linebreak_style": "backslash-n",
			"string_charset": "utf-8"
		}
		// set up
    },
    tearDown: function () {
        // clean up
    },
	testLiteral: function (test) {
		for( var i = 0; i <= 9; ++i ){
			test.equals(js_pp(this.options,String(i)), i+';');
		}
        test.done();
    },
	testSingleLetterIdentifier: function (test) {
		var r = range( 'a', 'z' );
		for( var i in r ){
			if( r[i] == 'v' ) {
				continue;
			}

			test.equals(js_pp(this.options,r[i]), r[i]+';');
		}
        test.done();
    },	
	testAddition: function (test) {
		test.equals(js_pp(this.options,"a+b"), 'a + b;');
        test.done();
	},
	testSubtraction: function (test) {
		test.equals(js_pp(this.options,"a-b"), 'a - b;');
        test.done();
	},
	testMultiplication: function (test) {
		test.equals(js_pp(this.options,"a*b"), 'a * b;');
        test.done();
	},
	testDivision: function (test) {
		test.equals(js_pp(this.options,"a/b"), 'a / b;');
        test.done();
	},
	testModulus: function (test) {
		test.equals(js_pp(this.options,"a%b"), 'a % b;');
        test.done();
	},
	testArtimetics: function (test) {
		test.equals(js_pp(this.options,"a+b-c*d/e%g"), 'a * b - c + d / e % f;');
        test.done();
	}
});

