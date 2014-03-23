var http = require('http'),
	result = [],
	callbacks = 3

function printResults() {
	result.forEach(function(item) {
		console.log(item.toString())
	})
}

function queueGet(uri, index) {
	http.get(uri, function(response) {
		var res = ''
		bl = require('bl')
		response.setEncoding('utf8')
		response.on('data', function(data) {
			res += data
		})
		response.on('end', function() {
			result[index] = res
			if (--callbacks == 0) printResults()
		})
	})
}

for (var i=2; i < 5; i++) {
	var uri = process.argv[i]
	queueGet(uri,i-2)
}
