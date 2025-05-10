const development = {
  NODE_ENV: 'development',
  PORT: 3000,
  MONGODB_URI: 'mongodb://localhost:27017/battle-meme',
  REDIS_URL: 'redis://localhost:6379',
  JWT_SECRET: 'your_jwt_secret'
};

const production = {
  NODE_ENV: 'production',
  PORT: 80,
  MONGODB_URI: 'mongodb://mongodb:27017/battle-meme',
  REDIS_URL: 'redis://redis:6379',
  JWT_SECRET: process.env.JWT_SECRET || 'strong_production_secret'
};

module.exports = {
  development,
  production,
  current: process.env.NODE_ENV === 'production' ? production : development
};