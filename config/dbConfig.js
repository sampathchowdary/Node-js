const Pool = require('pg').Pool

const pool = new Pool({
  user: 'newuser',
  host: 'localhost',
  database: 'NodeDB',
  password: 'pass',
  port: 5432,
})

module.exports = pool;