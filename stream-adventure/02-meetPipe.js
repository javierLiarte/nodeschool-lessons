var filePath = process.argv[2],
	fs = require('fs')

fs.createReadStream(filePath).pipe(process.stdout)