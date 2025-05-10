const env = require('./env');

const mongodb = {
  url: env.current.MONGODB_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  }
};

const redis = {
  url: env.current.REDIS_URL,
  options: {
    retryStrategy: times => Math.min(times * 50, 2000),
    maxRetriesPerRequest: 3,
    enableReadyCheck: true
  }
};

module.exports = {
  mongodb,
  redis
};