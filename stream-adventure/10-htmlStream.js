var trumpet = require('trumpet'),
	through = require('through'),
	tr = trumpet(),
	stream = tr.select('.loud').createStream()
	
stream.pipe(through(function(buff) {
	this.queue(buff.toString().toUpperCase())
})).pipe(stream)

process.stdin.pipe(tr).pipe(process.stdout)
