const express = require('express');
const bodyparser = require('body-parser');
const db = require('../app/models');
const sequelize = db.sequelize;

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

//test route
app.get('/motorway/vehicle', (req, res, next) => {
  res.send('Welcome to Motorway !!!');
});

//CRUD routes
app.use('/motorway', require('./routes/motorway'));

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});
let server;
//sync database
sequelize
  .sync()
  .then(result => {
    console.log("Database connected");
   server = app.listen(3003);
  })
  .catch(err => console.log(err));

   module.exports = {
    app
   }
