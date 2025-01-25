const express = require("express");
const PORT = 5000;
const cors = require("cors");
const ideasRouter = require("./routes/ideas");
const userRouter = require("./routes/users");
const feedbackRouter = require("./routes/feedback");

const app = express();

app.use(express.json());
app.use(cors());

// Routers
app.use("/api/ideas", ideasRouter);
app.use("/api/users", userRouter);
app.use("/api/feedback", feedbackRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Twitchy Games API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});