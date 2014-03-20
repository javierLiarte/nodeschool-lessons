var filePath = process.argv[2],
	fs = require('fs'),
	fileBuffer = fs.readFileSync(filePath)

var lines = fileBuffer.toString().split("\n").length - 1
console.log(lines)