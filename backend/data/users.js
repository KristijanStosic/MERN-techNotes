const bcrypt = require('bcrypt')

const users = [
  {
    username: 'DanD',
    password: bcrypt.hashSync('Dand1234', 10),
    roles: ['Employee', 'Admin', 'Manager']
  },
  {
    username: 'Mark',
    password: bcrypt.hashSync('Mark1234', 10),
    roles: ['Manager']
  },
  {
    username: 'John',
    password: bcrypt.hashSync('John1234', 10),
    roles: ['Employee']
  }
]

module.exports = users