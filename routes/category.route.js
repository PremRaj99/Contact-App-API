import express from "express";
import { createCategory, deleteCategory, getCategory } from "../controllers/category.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// router method
router.get("/:userId", verifyToken ,getCategory)
router.post("/create/:userId", verifyToken ,createCategory)
router.delete("/delete/:userId/:categoryId", verifyToken, deleteCategory)

export default router;
