var curryN = require('./currying')

function add (a,b) {
	return a + b
}

console.log('adding 1 to 2: '+add(1,2))

//var curryN = curry.curryN()

var inc = curryN(add)
console.log('adding 1 to 2: '+inc(2)