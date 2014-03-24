var through = require('through'),
	http = require('http')

var server = http.createServer(function (req, res) {
	if (req.method !== 'POST') return res.end('Send me a POST\n')
	req.pipe(through(function(buff) {
		this.queue(buff.toString().toUpperCase())
	})).pipe(res)
});
server.listen(process.argv[2]);