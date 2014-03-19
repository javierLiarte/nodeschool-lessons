module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  return arr.reduce (function(resultArray,element,index,array) {
  	return resultArray.concat([fn(element,index,array)])
  },[])
}
