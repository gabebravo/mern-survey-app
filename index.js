require('dotenv').config();

const server = require('./lib/server');
const db     = require('./lib/db');

console.log(process.env.PORT)

db.connect({
  useMongoClient: true,
  /* other options */
}, (err) => {
  if (err) {
    return console.log(`DB is not working...`);
  }

  server.start();
});
