var spawn = require('child_process').spawn,
	duplex = require('duplexer')
    
module.exports = function (cmd, args) {
	// spawn the process and return a single stream
	// joining together the stdin and stdout here
	var process = spawn(cmd, args)
	return duplex(process.stdin, process.stdout)
}
