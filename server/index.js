const express = require("express");
const cors = require("cors");
// const db = require("./db");
const ideasRouter = require("./routes/ideas");
const userRouter = require("./routes/users");
const feedbackRouter = require("./routes/feedback");
const votes = require("./routes/votes");
const contact = require("./routes/contact");
const faq = require("./routes/faq");
const morgan = require('morgan');

const app = express();
const { dbHealthcheck, dbQuery } = require('./db');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routers
app.use("/api/ideas", ideasRouter);
app.use("/api/users", userRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/votes", votes);
app.use("/api/contact", contact);
app.use("/api/faqs", faq);

app.get("/", (req, res) => {
  res.send("Welcome to the Together Forge API!");
});

app.get('/api/health', async (_req, res) => {
  try {
    const r = await dbQuery('SELECT NOW() AS now;');
    res.json({ ok: true, now: r.rows[0].now });
  } catch (e) {
    console.error('HEALTH ->', e.code, e.message);
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.get('/api/db/health', async (_req, res) => {
  try {
    const ok = await dbHealthcheck();
    res.json({ ok });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.get('/api/db/time', async (_req, res) => {
  try {
    const r = await dbQuery('SELECT NOW() AS now;');
    res.json(r.rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});