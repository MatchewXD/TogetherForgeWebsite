const db = require('./db');

const testConnection = async () => {
  try {
    const result = await db.query('SELECT NOW()');
    console.log('Database connected:', result.rows[0]);
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

testConnection();
