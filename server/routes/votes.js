const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const { user_id, game_idea_id } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO votes (user_id, game_idea_id) VALUES ($1, $2) RETURNING *',
      [user_id, game_idea_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.get('/:gameIdeaId', async (req, res) => {
  const { gameIdeaId } = req.params;
  try {
    const result = await db.query(
      'SELECT COUNT(*) AS total_upvotes FROM votes WHERE game_idea_id = $1',
      [gameIdeaId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
