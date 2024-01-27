const express = require('express');
const cors = require('cors');
const pool = require('./server/db'); // Adjust the path as needed

// Import your routers here
const budgetRouter = require('./routes/budget');
const expensesRouter = require('./routes/expenses');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000; // Example: using port 5000 instead of 3001


// Set up CORS with dynamic origin (adjust as needed)
app.use(cors({
  origin: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`,
  credentials: true,
}));

app.use(express.json()); // For parsing application/json

// Example route to test database connection
app.get('/test-db', async (req, res) => {
  try {
    const testQuery = await pool.query('SELECT NOW()');
    res.json({ message: "Database connection successful", time: testQuery.rows[0].now });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Database connection failed");
  }
});

// Use your routers here
app.use('/budget', budgetRouter);
app.use('/expenses', expensesRouter);
app.use('/users', usersRouter);

// Additional routes can be added as needed

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
