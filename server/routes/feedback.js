// server/routes/feedback.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  try {
    const { message, user_id = null } = req.body;

    // Validation
    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required.' });
    }
    if (message.length > 500) {
      return res.status(400).json({ error: 'Message must be 500 characters or less.' });
    }

    const result = await db.query(
      `INSERT INTO feedback (user_id, message)
       VALUES ($1, $2)
       RETURNING id, user_id, message, created_at`,
      [user_id, message.trim()]
    );

    return res.status(201).json({
      message: 'Feedback submitted successfully',
      feedback: result.rows[0],
    });
  } catch (err) {
    console.error('POST /api/feedback error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
