var http = require('http'),
	uri = process.argv[2]

http.get(uri, function(response) {
	var result = ""
	response.setEncoding('utf8')
	response.on('data', function(data) {
		result += data
	})
	response.on('error', console.error)
	response.on('end',function() {
		console.log(result.length)
		console.log(result)
	})
})