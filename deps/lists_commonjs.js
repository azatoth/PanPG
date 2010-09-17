(function(exports) {
	exports.foldl1 = function(f, a) {
		var x, i, l
		x = a[0]
		for (i = 1, l = a.length; i < l; i++) x = f(x, a[i])
		return x
	},

	exports.foldl = function(f, a, x) {
		var i, l
		for (i = 0, l = a.length; i < l; i++) x = f(x, a[i])
		return x
	},

	// [[a]] → [a]
	exports.concat = function(as) {
		var i, l, a = []
		for (i = 0, l = as.length; i < l; i++)
		a.push.apply(a, as[i])
		return a
	},

	exports.uniq = function(a) {
		return a.filter(function(e, i, a) {
			return ! i || e !== a[i - 1]
		})
	},

	exports.max = function(a) {
		return exports.foldl(f, a, - Infinity)
		function f(a, b) {
			return Math.max(a, b)
		}
	},

	exports.min = function(a) {
		return exports.foldl(f, a, Infinity)
		function f(a, b) {
			return Math.min(a, b)
		}
	},

	exports.sum = function(a) {
		return exports.foldl(f, a, 0)
		function f(a, b) {
			return a + b
		}
	},

	exports.product = function(a) {
		return exports.foldl(f, a, 1)
		function f(a, b) {
			return a * b
		}
	},

	// String → Object → a
	exports.access = function(prop) {
		return function(o) {
			return o[prop]
		}
	},

	/* [[name,value]] → Object */
	exports.objectFromList = function(a) {
		var o = {}
		a.forEach(function(e) {
			o[e[0]] = e[1]
		})
		return o
	},

	/* [a], [b] → [[a,b]] */
	exports.zip = function(a, b) {
		var r = [],
		i,
		l
		l = Math.min(a.length, b.length)
		for (i = 0; i < l; i++) r.push([a[i], b[i]])
		return r
	},

	/* [a] → a */
	exports.last = function(a) {
		return a[a.length - 1]
	},

	exports.fst = function(a) {
		return a[0]
	},
	exports.snd = function(a) {
		return a[1]
	}
})(typeof exports == 'object' ? exports: lists = {});

