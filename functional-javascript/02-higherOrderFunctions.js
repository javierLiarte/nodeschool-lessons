var executionNumber = 0;
function repeat(operation, num) {
	if (num > 0) {
		console.log("Called function "+ ++executionNumber +" times.");
		return repeat(operation,num-1);
	}
}

module.exports = repeat
