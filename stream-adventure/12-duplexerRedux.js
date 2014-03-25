var duplexer = require('duplexer'),
	through = require('through')

module.exports = function (counter) {
	// return a duplex stream to capture countries on the writable side
	// and pass through `counter` on the readable side
	var countryCounterObject = {},
		inputStream = through(function (obj) {
		countryCounterObject[obj.country] = ++countryCounterObject[obj.country] || 1
	}, function () {
		counter.setCounts(countryCounterObject)
	})
	return duplexer(inputStream,counter)
}