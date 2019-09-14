const express = require('express');
//const db = require('./db');
const app = express();
const path = require('path');

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/users', (req, res, next) => {
  res.send('This it the USERS URL');
  /*try {
    const users = await db.findAllUsers();
    res.send(users);
  }
  catch(ex) {
  }*/
});
​/*
app.get('/api/departments', (req, res, next) => {
  res.send('This is the department URL')
  /*try {
    const departments = await db.findAllDepartments();
    res.send(departments);
  }
  catch(ex) {
  }*/
});

/*db.syncAndSeed()
  .then(() => app.listen(3000, ()=> console.log('We are listening on port 3000')));*/
  app.listen(3000, ()=> console.log('We are listening on port 3000'))
