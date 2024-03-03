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
<<<<<<< HEAD
console.log('version 1.3')
=======
console.log('version 1.4')
>>>>>>> de56855551d883e39cbbaf381b74079003b840b1
// Export the configuration object
module.exports = config;
