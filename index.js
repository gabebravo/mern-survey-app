require('dotenv').config();

const server = require('./lib/server');
const db     = require('./lib/db');

db.connect({
  useMongoClient: true,
  /* other options */
});
