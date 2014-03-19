function countWords(inputWords) {
  // SOLUTION GOES HERE
  var returnObject = {}

  return inputWords.reduce(function(theObject,word,index,array) {
  	if (theObject[word] == undefined) theObject[word] = 0
  	theObject[word]++
  	return theObject
  }, returnObject)
}

module.exports = countWords