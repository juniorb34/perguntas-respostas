const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'docker', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = connection;
