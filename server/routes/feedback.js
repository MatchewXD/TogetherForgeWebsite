const express = require("express");
const router = express.Router();

let feedback = [];

router.post("/api/feedback", (req, res) => {
  const { feedbackType, message, email } = req.body;
  const newFeedback = { id: feedback.length + 1, feedbackType, message, email };
  feedback.push(newFeedback);
  console.log("Feedback Received:", { feedbackType, message, email });
  res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });
});

module.exports = router;