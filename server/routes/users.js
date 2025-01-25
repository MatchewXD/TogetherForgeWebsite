const express = require("express");
const router = express.Router();

let users = [];

router.post("/", (req, res) => {
  const { username, email } = req.body;
  const newUser = { username, email };
  users.push(newUser);
  res.status(201).json({ message: "User created successfully", user: newUser });
});

module.exports = router;