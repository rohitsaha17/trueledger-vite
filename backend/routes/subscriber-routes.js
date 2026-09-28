import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { create, getAll, remove } from "../controllers/subscriber-controller.js";

const router = Router();

router.post("/", create);
router.get("/", auth, getAll);
router.delete("/:id", auth, remove);

export default router;
