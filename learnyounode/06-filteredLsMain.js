var path = process.argv[2],
	extension = process.argv[3],
	myModule = require('./06-filteredLsModule')

myModule(path,extension, function(err, data) {
	if (err) return console.error(err)
	data.forEach(function(item) {
		console.log(item)
	})
})