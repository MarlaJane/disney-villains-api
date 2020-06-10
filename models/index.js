const Sequelize = require('sequelize')
const villainsModel = require('./villains.js')

const connection = new Sequelize('disney', 'disneyvillains', 'b@d2th3B0N3!', {
  host: 'localhost', dialect: 'mysql'
})

const villains = villainsModel(connection, Sequelize)

module.exports = { villains }
