var portNumber = process.argv[2],
	net = require('net')

function zeroFill(number) {
	return ('0'+number).slice(-2)
}

function now() {
	var date = new Date()
	return date.getFullYear()+'-'+
		zeroFill(date.getMonth()+1)+'-'+	// starts at 0
    	zeroFill(date.getDate())+' '+      	// returns the day of month
    	zeroFill(date.getHours())+':'+
    	zeroFill(date.getMinutes())
}

var server = net.createServer(function (socket) { // Return "YYYY-MM-DD hh:mm\n"
	socket.end(now() + '\n')
})
server.listen(portNumber)