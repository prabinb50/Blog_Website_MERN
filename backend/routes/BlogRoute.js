import express from "express";
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where files are temporarily stored
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "image", maxCount: 1 },
  { name: "Profile", maxCount: 1 },
]);

import { createBlog, deleteBlogById, getAllBlogs, getBlogById, updateBlogById } from "../controller/BlogsController.js";

const router = express.Router();

router.post("/", upload, createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.patch("/:id", upload, updateBlogById);
router.delete("/:id", deleteBlogById);

export default router;
