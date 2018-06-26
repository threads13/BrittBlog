const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

// serve static files
app.use(express.static(path.join(__dirname, 'client/build')));

// put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  //Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handles: for any request that doesn'
// match one above, send back React's index.html files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
