require('dotenv').config();
// import dependencies
const express = require('express');
// const morgan     = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {PORT} = require('../config');

// mongose setup & config
const mongoose = require('mongoose');
const db = process.env.DATABASE_URL;

mongoose.Promise = global.Promise;
mongoose.connect(db, {
  useMongoClient: true, // weird new flag mongoose requires
});

// import express and instantiate a server
const app = express();
const port = process.env.PORT;

// import and use body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// this is will add the client in deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const userRouter = require('../routes/user');
app.use('/user', userRouter);

const surveyRouter = require('../routes/survey');
app.use('/survey', surveyRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = {app};
