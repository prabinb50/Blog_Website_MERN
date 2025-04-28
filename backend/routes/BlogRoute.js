import express from "express";
import multer from "multer";
const upload = multer({ dest: 'uploads/' })

const Upload = upload.fields([
    { name: 'profile', maxCount: 1 },
    { name: 'image', maxCount: 1 }
])

import { createBlog, deleteBlogById, getAllBlogs, getBlogById, searchBlogs, updateBlogById } from "../controller/BlogsController.js";

const router = express.Router();

router.post("/", Upload, createBlog);
router.get("/", getAllBlogs);
router.get("/search", searchBlogs);
router.get("/:id", getBlogById);
router.patch("/:id", Upload, updateBlogById);
router.delete("/:id", deleteBlogById);


export default router;
