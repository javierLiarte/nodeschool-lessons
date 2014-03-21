var path = process.argv[2],
	extension = '.' + process.argv[3],
	fs = require('fs'),
	nodePath = require('path')

fs.readdir(path, function (err, list) {
	if (err) throw err
	list.forEach(function(item) {
		// started to implement before ending reading challenge
		// 		so didn't read about node's path
		/*
		var lastIndex = item.lastIndexOf(extension)
		if (lastIndex === -1) return
		if (lastIndex === (item.length - extension.length)) console.log(item)
		*/
		// Using node's path is much better :D
		if (nodePath.extname(item) === extension) console.log(item)
	})
})