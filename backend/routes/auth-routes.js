import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { login, me } from "../controllers/auth-controller.js";

const router = Router();

router.post("/login", login);
router.get("/me", auth, me);

export default router;
