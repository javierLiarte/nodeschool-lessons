function getDependencies(tree, result) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  
  result = result || []
  dependencies = tree.dependencies || []
  
  Object.keys(dependencies).forEach(function(depName) {
  	var depTree = tree.dependencies[depName]
  	getDependencies(depTree, result)
  	
  	var dependencyString = depName+'@'+depTree.version
  	if (result.indexOf(dependencyString) < 0) {
  		result.push(dependencyString)
  	}
  })

  return result.sort()
}

module.exports = getDependencies
