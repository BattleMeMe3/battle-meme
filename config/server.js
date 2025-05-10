const env = require('./env');

const api = {
  rateLimits: {
    window: 15 * 60 * 1000, // 15 minutes
    max: 100 // requests per window
  },
  cors: {
    origin: env.current.NODE_ENV === 'production'
      ? 'https://yourdomain.com'
      : `http://localhost:${env.current.PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
};

const websocket = {
  pingTimeout: 60000,
  pingInterval: 25000,
  transports: ['websocket'],
  cors: {
    origin: env.current.NODE_ENV === 'production'
      ? 'https://yourdomain.com'
      : `http://localhost:${env.current.PORT}`
  }
};

module.exports = {
  api,
  websocket
};