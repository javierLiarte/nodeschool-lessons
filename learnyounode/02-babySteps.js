var args = process.argv,
	nums = args.slice(2,args.length)

var result = nums.reduce(function(prev, item) {
	return +prev + +item
}, 0)

console.log(result)

/** Official solution
var result = 0
    
for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)

//Mine rocks more :)
*/