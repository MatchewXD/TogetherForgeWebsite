const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./server/.env" });


router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "contacttwitchygames@gmail.com",
      to: "contacttwitchygames@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message, error.response);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

module.exports = router;
