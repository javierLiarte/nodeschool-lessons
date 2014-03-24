var through = require('through'),
	split = require('split'),
	odd = true

process.stdin
	.pipe(split())
	.pipe(through(function (line) {
		if (odd) line = line.toString().toLowerCase()
		else line = line.toString().toUpperCase()
		//console.dir(line)
		this.queue(line+'\n')
		odd ^= true
	}))
	.pipe(process.stdout)