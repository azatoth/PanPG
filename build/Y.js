var Y,Z,fac

// Y = λf. (λx. f (x x)) (λx. f (x x))

Y = function(f){return function(x){return f(x(x))} (function(x){return f(x(x))})}

// note that in JavaScript, Y will never terminate, regardless of its argument.  However, η-expansion gives:
// Z = λf. (λx. f (λy. x x y)) (λx. f (λy. x x y))

Z = function(f){return function(x){return f(function(y){return x(x)(y)})} (function(x){return f(function(y){return x(x)(y)})})}

// testing

fac = function(f){return function(n){return n==0 ? 1 : n*f(n-1)}}

Z(fac)(7) // 7! = 5040