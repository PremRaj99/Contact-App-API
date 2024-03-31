import express from "express";
import { createContact, deleteContact, getContact } from "../controllers/contact.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// router method
router.get("/:userId/:categoryId",verifyToken, getContact)
router.post("/create/:userId/:categoryId",verifyToken, createContact)
router.delete("/delete/:userId/:contactId", verifyToken, deleteContact)

export default router;
