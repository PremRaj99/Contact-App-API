import express from "express";
import { google, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// router method
router.post("/signin", signin);
router.post("/signup", signup);
// router.post("/google", google);

export default router;
