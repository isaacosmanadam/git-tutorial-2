// Import dependencies
const express = require('express');

// Create an instance of Express
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('version 1.4');
});
