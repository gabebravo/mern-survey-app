// import dependencies
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const surveyRouter = require('./routes/survey');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, {
  useMongoClient: true, // weird new flag mongoose requires
});

// import express and instantiate a server
const app = express();
app.use('/user', userRouter);
app.use('/survey', surveyRouter);
app.use(express.static('client/build'));
app.use(bodyParser.json())
app.listen(process.env.PORT, () => {
  console.log(`now connected`);
});
module.exports = {app};
