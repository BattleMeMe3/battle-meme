const env = require('./env');

const jwt = {
  secret: env.current.JWT_SECRET,
  expiresIn: '24h',
  algorithm: 'HS256'
};

const password = {
  saltRounds: 10,
  hashLength: 64
};

module.exports = {
  jwt,
  password
};