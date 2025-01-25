const express = require("express");
const router = express.Router();

let ideas = [];

router.post("/", (req, res) => {
  const { ideaTitle, ideaType, ideaDescription } = req.body;
  const newIdea = { id: ideas.length + 1, ideaTitle, ideaType, ideaDescription };
  ideas.push(newIdea);
  res.status(201).json({ message: "Idea added!", idea: newIdea });
});

module.exports = router;