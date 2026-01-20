import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import projectsRoute from "./routes/projects.js";
import contactRoute from "./routes/contact.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000"
}));

app.use("/api/projects", projectsRoute);
app.use("/api/contact", contactRoute);

app.get("/", (req, res) => res.send("Portfolio API running"));
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    mongoState: mongoose.connection.readyState
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Failed (Running in Offline Mode):", err.message);
  }

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
