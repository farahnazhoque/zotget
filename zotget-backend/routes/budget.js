const express = require('express');
const pool = require('../server/db');

const budgetRouter = express.Router();

budgetRouter.use(express.json);

// Get all budgets
budgetRouter.get('/', async (req, res) => {
    try {
        const allBudgets = await pool.query('SELECT * FROM Budget');
        res.status(200).json(allBudgets.rows);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});

// Get a single budget by ID
budgetRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const budget = await pool.query('SELECT * FROM Budget WHERE budget_id = $1', [id]);
      res.status(200).json(budget.rows);
    } catch (err) {
      res.status(500).json(err.message);
    }
});

// Update a budget
budgetRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { user_id, name, total_amount } = req.body;
    try {
      const updatedBudget = await pool.query(
        'UPDATE Budget SET user_id = $1, name = $2, total_amount = $3 WHERE budget_id = $4 RETURNING *',
        [user_id, name, total_amount, id]
      );
      res.status(200).json(updatedBudget.rows[0]);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });
  
  // Delete a budget
  budgetRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedBudget = await pool.query('DELETE FROM Budget WHERE budget_id = $1 RETURNING *', [id]);
      res.status(200).json(deletedBudget.rows[0]);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });
  
  module.exports = budgetRouter;