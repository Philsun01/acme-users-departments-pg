const express = require('express');
const db = require('./db');
const app = express();
const path = require('path');

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.listen(3000, ()=> console.log('Listening on Port 3000'));
