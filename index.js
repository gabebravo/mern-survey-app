// import dependencies
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

// mongose setup & config
const mongoose = require('mongoose');
const db = process.env.MONGO || 'mongodb://localhost:27017/testSurvey'

mongoose.Promise = global.Promise;
mongoose.connect(db, {
  useMongoClient: true, // weird new flag mongoose requires
});

// import express and instantiate a server
const app = express();
const port = process.env.PORT || 3001,

// import and use body parser
this.app.use(bodyParser.json())

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
