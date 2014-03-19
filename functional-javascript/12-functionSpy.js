function Spy(target, method) {
  // SOLUTION GOES HERE
  var theSpyObject = {
  	count: 0
  }
  originalFunction = target[method]
  target[method] = function () {
  	theSpyObject.count++
  	return (originalFunction).apply(this,arguments)
  }
  return theSpyObject
}

module.exports = Spy