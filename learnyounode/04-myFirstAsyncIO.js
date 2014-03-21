var filePath = process.argv[2],
	fs = require('fs')


fs.readFile(filePath, function(err, data) {
	if (err) throw err
	var lines = data.toString().split("\n").length - 1
	console.log(lines)
} )