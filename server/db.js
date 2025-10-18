// server/db.js (CommonJS)
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
  // ssl: { rejectUnauthorized: false } // enable only if your host requires SSL
});

pool.on('error', (err) => {
  console.error('Postgres pool error:', err);
});

async function dbQuery(text, params) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    if (process.env.NODE_ENV !== 'production') {
      console.log('dbQuery:', { text, ms: Date.now() - start });
    }
    return res;
  } catch (err) {
    console.error('DB ERROR:', err.message);
    throw err;
  }
}

async function dbHealthcheck() {
  const r = await dbQuery('SELECT 1 AS ok;');
  return r.rows[0]?.ok === 1;
}

module.exports = { pool, dbQuery, dbHealthcheck };
