// import dependencies
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const userRouter = require('../routes/user');
const surveyRouter = require('../routes/survey');

const port = process.env.PORT || 3001,
const mongoose = require('mongoose');
const db = process.env.MONGO || 'mongodb://localhost:27017/testSurvey'

mongoose.Promise = global.Promise;
mongoose.connect(db, {
  useMongoClient: true, // weird new flag mongoose requires
});

// import express and instantiate a server
const app = express();
app.use('/user', userRouter);
app.use('/survey', surveyRouter);
app.use(express.static('client/build'));
app.use(bodyParser.json())
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
module.exports = {app};
