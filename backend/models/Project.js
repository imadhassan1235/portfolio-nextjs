import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  tech: [String],
  link: String,
  repo: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Project", ProjectSchema);
