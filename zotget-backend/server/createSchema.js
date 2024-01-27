const fs = require('fs');
const path = require('path');
const pool = require('./db'); // Import the pool from db.js

const schemaFiles = [
   'users.sql',
  'budget.sql',
  'expenses.sql'
  
];

async function createSchema() {
  for (const file of schemaFiles) {
    const filePath = path.join(__dirname, 'schema', file);
    const sql = fs.readFileSync(filePath).toString();
    try {
      const res = await pool.query(sql);
      console.log(`Executed ${file} successfully:`, res);
    } catch (err) {
      console.error(`Error executing ${file}:`, err);
      process.exit(1);
    }
  }
  await pool.end();
}

createSchema();
