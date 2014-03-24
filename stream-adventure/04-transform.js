var through = require('through'),
	tr = through(function (buff) {
	this.queue(buff.toString().toUpperCase())
})
process.stdin.pipe(tr).pipe(process.stdout)