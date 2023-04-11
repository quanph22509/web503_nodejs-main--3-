import express from "express";
import { signup, signin, getUsers } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users/:id", getUsers)
export default router;
