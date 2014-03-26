var combine = require('stream-combiner'),
	through = require('through')
	split = require('split'),
	zlib = require('zlib')
    
// read newline-separated json,
// group books into genres,
// then gzip the output
module.exports = function () {
	var genre,
		genreProcessor = through(function write(data) {
		if (!data) return
		var lineObj = JSON.parse(data)
		if (lineObj.type == 'genre') {
			if (genre) {
				this.queue(JSON.stringify(genre)+'\n')
			}
			genre = { name: lineObj.name, books: []}
		} else {
			genre.books.push(lineObj.name)
		}
	}, function end() {
		this.queue(JSON.stringify(genre)+'\n')
		this.queue(null)
	})
	
	return combine(split(), genreProcessor, zlib.createGzip())
}