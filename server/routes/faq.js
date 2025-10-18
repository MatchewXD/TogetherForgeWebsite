const express = require("express");
const router = express.Router();
const pool = require("../db"); // Import the database connection

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM faqs ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch FAQs" });
  }
});

module.exports = router;
