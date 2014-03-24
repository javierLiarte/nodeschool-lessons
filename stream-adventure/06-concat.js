var concat = require('concat-stream')

process.stdin.pipe(concat(function (contents) {
	var result = contents.toString().split('').reverse().join('')
	// process.stdout.end(result) // This not validates!!
	console.log(result)
}))