const express = require("express");
const router = express.Router();
const db = require('../db');

router.get('/ping', (_req, res) => res.json({ ok: true, where: 'ideas router' }));

// server/routes/ideas.js
router.get("/", async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit, 10) || 50, 100);
    const result = await db.query(
      `SELECT id, user_id, title, description, created_at
       FROM game_ideas
       ORDER BY created_at DESC
       LIMIT $1`,
      [limit]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('GET /api/ideas error:', err);
    res.status(500).json({ error: "Database error" });
  }
});


router.post("/", async (req, res) => {
  const { user_id = null, title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required." });
  }

  try {
    const result = await db.query(
      "INSERT INTO game_ideas (user_id, title, description) VALUES ($1, $2, $3) RETURNING *",
      [user_id, title, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("POST /api/ideas error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

router.get('/', (req, res) => res.json({ ok: true, hint: 'POST here to create an idea' }));


module.exports = router;