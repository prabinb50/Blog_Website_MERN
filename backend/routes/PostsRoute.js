import express from 'express';
import { createPost, deletePostById, getAllPosts, getPostById, updatePostById } from '../controller/PostController.js';
const router = express.Router();
import multer from 'multer';
const upload = multer({dest:"uploads/"})

router.post("/",upload.single("post"),createPost);
router.get("/",getAllPosts);
router.get("/:id",getPostById);
router.patch("/:id",updatePostById);
router.delete("/:id",deletePostById);

export default router;