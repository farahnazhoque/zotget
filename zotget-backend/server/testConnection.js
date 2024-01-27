const pool = require('./db');

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connection successful, current time:', res.rows[0].now);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  } finally {
    await pool.end(); // close the pool to end the program
  }
}

testConnection();
