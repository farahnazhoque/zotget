const express = require('express');
const pool = require('../server/db'); // Adjust the path as needed

const usersRouter = express.Router();

usersRouter.use(express.json());

// Get all users
usersRouter.get('/', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM Users');
    res.status(200).json(allUsers.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get a single user by ID
usersRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await pool.query('SELECT * FROM Users WHERE user_id = $1', [id]);
    res.status(200).json(user.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Create a new user
usersRouter.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await pool.query(
      'INSERT INTO Users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Update a user
usersRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const updatedUser = await pool.query(
      'UPDATE Users SET username = $1, email = $2, password = $3 WHERE user_id = $4 RETURNING *',
      [username, email, password, id]
    );
    res.status(200).json(updatedUser.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Delete a user
usersRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await pool.query('DELETE FROM Users WHERE user_id = $1 RETURNING *', [id]);
    res.status(200).json(deletedUser.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = usersRouter;
