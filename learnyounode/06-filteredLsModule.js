var fs = require('fs'),
	nodePath = require('path')

module.exports = function (dirName, extension, callback) {
	var ext = '.'+extension

	fs.readdir(dirName, function(err,list) {
		if (err) return callback(err)

		list = list.filter(function(item,index) {
			return (nodePath.extname(item) === ext)
		})
		callback(null,list)
		
	})
}