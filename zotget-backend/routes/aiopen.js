const express = require('express');
const { generateSuggestions } = require('../server/ai'); // Adjust the path
const router = express.Router();

router.post('/generate-suggestions', async (req, res) => {
  try {
    const { category } = req.body;
    const suggestions = await generateSuggestions(category);
    res.json({ suggestions });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
