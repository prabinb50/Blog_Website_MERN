import express from "express";
import { deleteAllUsers, deleteUserById, getAllUsers, getSingleUserById, loginUser, registerUser, updateUserById } from "../controller/UserController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
// import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
router.get("/:id", getSingleUserById);
router.patch("/:id", updateUserById);
router.delete("/:id", deleteUserById);
router.delete("/", deleteAllUsers);

export default router;