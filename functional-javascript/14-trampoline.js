function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return
  operation()
  // Bind returns a reference to a function!!
  return repeat.bind(null,operation, --num)
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  while (fn && fn instanceof Function) {
  	fn = fn.apply(fn.context, fn.args)
  }
  return fn
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(repeat.bind(null,operation, num))
}


/************** Proposed solution ********************

  function repeat(operation, num) {
    if (num <= 0) return
    return function() {
      operation()
      return repeat(operation, --num)
    }
  }
  
  function trampoline(fn) {
    while(fn && typeof fn === 'function') {
      fn = fn()
    }
  }
  
  module.exports = function(operation, num) {
    trampoline(function() {
      return repeat(operation, num)
    })
  }
*/
