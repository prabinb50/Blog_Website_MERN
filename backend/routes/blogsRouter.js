import express from 'express';
const router = express.Router();

router.post("/", something);
router.get("/", something);
router.get("/:id", something);
router.update("/:id", something);
router.delete("/:id", something);

export default router;