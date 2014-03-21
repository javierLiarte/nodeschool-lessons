var http = require('http'),
	uri = process.argv[2]

http.get(uri, function(response) {
	response.setEncoding('utf8')
	/*
	response.on('data', function (data) {
		console.log(data)
	})
	*/
	// From the official solution:
	// We can use console.log as the callback function!!
	response.on('data',console.log)
	response.on('error',console.error)
})