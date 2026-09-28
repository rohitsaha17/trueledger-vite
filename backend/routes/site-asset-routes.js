import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { getAll, upsert, remove } from "../controllers/site-asset-controller.js";

const router = Router();

router.get("/", getAll);
router.put("/:key", auth, upsert);
router.delete("/:key", auth, remove);

export default router;
