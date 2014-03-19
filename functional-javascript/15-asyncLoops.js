function loadUsers(userIds, load, done) {
  var loadedUsers = 0;
  var users = []
  userIds.forEach(function(userId, i) {
  	load(userId,function(user) {
      users[i] = user
  		if (++loadedUsers == userIds.length) return done(users)
  	})
  })
  
}

module.exports = loadUsers


/** comment

My function is slower than official and sometimes exceeds timeout 
The original approach was:

function loadUsers(userIds, load, done) {
  var users = []
  userIds.forEach(function(userId, i) {

    load(userId,function(user) {
      userIds[i] = user
      if (users.push(user) == userIds.length) {
        return done(userIds)
      }
    })
  })
  
}

The key here is that I'm modifying two arrays: users and userIds 
cause I was using users.lenght for exit condition. This condition 
can also obtained with an incremental var as provided by official 
solution

*/