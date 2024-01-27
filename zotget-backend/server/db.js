require('dotenv').config({path: './.env'});
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.AWS_USER,
    password: process.env.AWS_PASSWORD,
    host: process.env.AWS_HOST,
    port: process.env.AWS_PORT,
    database: process.env.AWS_DB_NAME
  });
  

module.exports = pool;
console.log(process.env.AWS_USER); // Should output "postgres"
console.log(process.env.AWS_PASSWORD); // Should output the new password
