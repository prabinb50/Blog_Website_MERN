import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  image: { type: String, required: true },
  profile: { type: String, required: true, },
  username: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
  readTime: { type: String },
});

export const Blogs = mongoose.model("Blogs", BlogSchema);
