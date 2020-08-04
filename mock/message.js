const Mock = require('mockjs')

module.exports = {
  'POST /api/message/sms': (req, res) => {
    return { captcha: Mock.mock('@integer(10000, 99999)') }
  },
}
