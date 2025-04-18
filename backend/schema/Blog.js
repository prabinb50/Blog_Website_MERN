import mongoose from "mongoose";

 const BlogSchema = new mongoose.Schema({
  image: { type: String, required: true },
  profi: { type: String,required: true, },
  username: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
  readTime: { type: String },
});

export const Blogs = mongoose.model("blogs",BlogSchema);
