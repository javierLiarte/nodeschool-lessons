var crypto = require('crypto'),
	zlib = require('zlib'),
	tar = require('tar'),
	through = require('through'),
	decrypt = crypto.createDecipher(process.argv[2], process.argv[3]),
	untar = tar.Parse()

untar.on('entry', function(e) {
	if (e.type != 'File') return
	var md5sum = crypto.createHash('md5', { encoding: 'hex' })
	e.pipe(md5sum).pipe(through(null, end)).pipe(process.stdout)
	function end() { this.queue(' '+e.path+'\n') }
})

process.stdin.pipe(decrypt)
	.pipe(zlib.createGunzip())
	.pipe(untar)
