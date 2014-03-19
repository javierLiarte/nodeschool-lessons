module.exports = function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
      // SOLUTION GOES HERE
      return submittedUsers.every(function (user) {
      	return goodUsers.some(function(goodUser) {
      		return goodUser.id == user.id
      	})
      })
  };
}