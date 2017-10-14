require('dotenv').config();

const server = require('./lib/server');
const db     = require('./lib/db');

console.log(process.env.PORT)

db.connect(
  server.start()
);
