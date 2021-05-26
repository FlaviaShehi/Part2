const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: 'changeme',
  host: 'localhost',
  port: '5432',
  database: 'Perntodo',
})

module.exports = pool
