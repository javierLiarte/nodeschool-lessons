var index = 0;
function reduce(arr, fn, initial) { 
  // SOLUTION GOES HERE 
  if (initial == undefined) {
  	result = fn(arr[0],arr[1],++index,arr)
  } else {
  	result = fn(initial,arr[0],++index,arr)
  }
  if (arr.length == 1) return result
  var tail = arr.slice(1)
  return reduce(tail,fn,result)
} 
 
module.exports = reduce 

// Offcial solution
// function reduce(arr, fn, initial) {
//    return (function reduceOne(index, value) {
//      if (index > arr.length - 1) return value // end condition
//      return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//    })(0, initial) // IIFE. kick off recursion with initial values
//  }
