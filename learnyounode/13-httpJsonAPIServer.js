var portNumber = process.argv[2],
	http = require('http'),
	url = require('url'),
	api = {}

api.parsetime = function (query) {
	var date = new Date(query.iso)
	return res = {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}

api.unixtime = function(query) {
	var date = new Date(query.iso)
	return res = { unixtime: date.getTime() }
}

var server = http.createServer(function (request, response) {
	var reqUri = url.parse(request.url, true)
	var apiFunction = /\/api\/(.*)/.exec(reqUri.pathname)[1]

	if (typeof api[apiFunction] != 'function') {
		response.writeHead(404)
		response.end('API function '+apiFunction+' not found!')
	}
	
	var result = api[apiFunction](reqUri.query)
	response.writeHead(200, { 'Content-Type': 'application/json' })
	response.end(JSON.stringify(result, null, ""))
})
server.listen(portNumber)

