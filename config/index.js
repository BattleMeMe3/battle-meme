const env = require('./env');
const database = require('./database');
const server = require('./server');
const security = require('./security');
const game = require('./game');

module.exports = {
  env: env.current,
  database,
  server,
  security,
  game
};