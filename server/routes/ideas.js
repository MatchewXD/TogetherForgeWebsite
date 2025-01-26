const express = require("express");
const router = express.Router();
const db = require('../db');

router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM game_ideas");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

router.post("/", async (req, res) => {
  const { user_id, title, description } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO game_ideas (user_id, title, description) VALUES ($1, $2, $3) RETURNING *",
      [user_id, title, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;