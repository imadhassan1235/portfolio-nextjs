import express from "express";
import Message from "../models/Message.js";
const router = express.Router();

// Save contact message
router.post("/", async (req, res) => {
  try {
    const msg = new Message(req.body);
    await msg.save();
    // optional: send email using nodemailer here
    res.status(201).json({ ok: true });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

export default router;
