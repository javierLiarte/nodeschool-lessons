var portNumber = process.argv[2],
	filePath = process.argv[3],
	http = require('http'),
	fs = require('fs')

var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'content-type': 'text/plain' })
	fs.createReadStream(filePath).pipe(response)
})
server.listen(portNumber)
