var intervalId,
   rate = 13

function repeat(operation, num) {
   setTimeout (function() {
      // modify this so it can be interrupted
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
   },0)
   // Proposed solution
   /*
   if (num <= 0) return
  
   operation()
  
   // release control every 10 or so
   // iterations.
   // 10 is arbitrary.
   if (num % 10 === 0) {
     setTimeout(function() {
       repeat(operation, --num)
     })
   } else {
     repeat(operation, --num)
   }
*/
}

module.exports = repeat
