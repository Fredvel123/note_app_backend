const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: '',
  database: 'firstapi',
  port: '5432'
})

module.exports = pool;