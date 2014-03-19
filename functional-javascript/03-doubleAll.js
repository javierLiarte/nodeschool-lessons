function doubleAll(numbers) {
  // SOLUTION GOES HERE
  function doubleANumber(num,index,array) {
  	return num*2
  }
  return numbers.map(doubleANumber)
}

module.exports = doubleAll