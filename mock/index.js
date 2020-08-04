const user = require('./user.js')
const message = require('./message.js')

module.exports = {
  ...user,
  ...message,
}
