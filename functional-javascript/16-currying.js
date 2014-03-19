function curryN(fn, n) {
  // SOLUTION GOES HERE

  n = n || fn.length
  console.log(fn)
  console.log(n)
  //if (n === 1) return fn
  //return curryN(fn,--n)
  var slice = Array.prototype.slice,
      args = slice.apply(arguments, [2])

  return function () {
    console.log (args.concat(slice.apply(arguments)))
    if (n === 1) return fn.apply(null, args.concat(slice.apply(arguments)))
    return curryN(fn,--n)  
  }
}

module.exports = curryN
