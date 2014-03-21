var http = require('http'),
	uri = process.argv[2],
	bl = require ('bl')

http.get(uri, function(response) {
	response.pipe(bl(function (err, data) {
		if (err) return console.error(err) // Don't forget error early-returns!!
		console.log(data.toString().length)
		console.log(data.toString())
	}))
})
