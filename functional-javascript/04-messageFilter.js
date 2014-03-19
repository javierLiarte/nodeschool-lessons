module.exports = function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.map(function(messageObject) {
  	return messageObject.message
  }).filter(function(message, index, array) {
  	return message.length < 50;
  })
}
