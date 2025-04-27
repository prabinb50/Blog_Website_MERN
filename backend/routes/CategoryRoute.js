import express from 'express';
import multer from "multer";
const upload = multer({ dest: 'uploads/' })
import { createCategory, deleteCategoryById, getAllCategories, getCategoryById, updateCategoryById } from '../controller/CategoryController.js';

const router = express.Router();

router.post("/", upload.single('image'), createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.patch("/:id", upload.single('image'), updateCategoryById);
router.delete("/:id", deleteCategoryById);

export default router;
