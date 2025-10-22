const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
  quiet: true
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  database: process.env.DB_NAME,
});

pool.on('error', (err) => {
  console.error('Postgres pool error:', err);
});

async function dbQuery(text, params) {
  const start = Date.now();
  const res = await pool.query(text, params);
  if (process.env.NODE_ENV !== 'production') {
    console.log('dbQuery:', { text, ms: Date.now() - start });
  }
  return res;
}

async function dbHealthcheck() {
  const r = await dbQuery('SELECT 1 AS ok;');
  return r.rows[0]?.ok === 1;
}

module.exports = {
  query: dbQuery,
  dbQuery,
  dbHealthcheck,
  pool,
};
