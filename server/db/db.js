const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const name = 'myoutfit';

const db = new Sequelize(
  process.env.DATABASE_URL ||
  `postgres://localhost:5432/${name}`, {
  logging: false
});
module.exports = db;
