const express = require('express');
const pool = require('../server/db'); // Adjust the path as needed

const expensesRouter = express.Router();

expensesRouter.use(express.json());

// Get all expenses
expensesRouter.get('/', async (req, res) => {
  try {
    const allExpenses = await pool.query('SELECT * FROM Expense');
    res.status(200).json(allExpenses.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get a single expense by ID
expensesRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await pool.query('SELECT * FROM Expense WHERE expense_id = $1', [id]);
    res.status(200).json(expense.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Create a new expense
expensesRouter.post('/', async (req, res) => {
  const { budget_id, name, amount, expense_date } = req.body;
  try {
    const newExpense = await pool.query(
      'INSERT INTO Expense (budget_id, name, amount, expense_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [budget_id, name, amount, expense_date]
    );
    res.status(201).json(newExpense.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Update an expense
expensesRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { budget_id, name, amount, expense_date } = req.body;
  try {
    const updatedExpense = await pool.query(
      'UPDATE Expense SET budget_id = $1, name = $2, amount = $3, expense_date = $4 WHERE expense_id = $5 RETURNING *',
      [budget_id, name, amount, expense_date, id]
    );
    res.status(200).json(updatedExpense.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Delete an expense
expensesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExpense = await pool.query('DELETE FROM Expense WHERE expense_id = $1 RETURNING *', [id]);
    res.status(200).json(deletedExpense.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = expensesRouter;
