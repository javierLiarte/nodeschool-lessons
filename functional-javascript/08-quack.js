function duckCount() {
  // SOLUTION GOES HERE
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (count,object,index,array) {
  	if (Object.prototype.hasOwnProperty.call(object, 'quack')) ++count
  	return count
  },0)

}

module.exports = duckCount

// official solution 
//  function duckCount() {
//    return Array.prototype.slice.call(arguments).filter(function(obj) {
//      return Object.prototype.hasOwnProperty.call(obj, 'quack')
//    }).length
//  }
