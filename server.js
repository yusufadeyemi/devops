'use strict';

const express = require('express');
const DB = require('./db.js');
// Constants
const PORT = process.env.PORT;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
const db = new DB();
app.get('/health', (req, res) => {
  db.checkDB();
  res.send('I am healthy');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
