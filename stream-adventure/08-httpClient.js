var request = require('request'),
	req = request.post('http://localhost:8000')

process.stdin.pipe(req).pipe(process.stdout)
