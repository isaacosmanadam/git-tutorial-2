// Configuration object
const config = {
  // Database configuration
  database: {
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'password',
    database: 'mydb',
  },
  // API configuration
  api: {
    port: 3000,
    timeout: 5000,
    debug: true,
  },
  // Logging configuration
  logging: {
    level: 'info',
    file: 'app.log',
  },
};
console.log('config.js');
console.log('version 1.3')
// Export the configuration object
module.exports = config;
