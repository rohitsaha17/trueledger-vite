import { Router } from "express";
import { auth } from "../middleware/auth.js";
import {
  getPublished,
  getAll,
  getBySlug,
  create,
  update,
  remove,
} from "../controllers/case-study-controller.js";

const router = Router();

router.get("/", getPublished);
router.get("/all", auth, getAll);
router.get("/:slug", getBySlug);
router.post("/", auth, create);
router.put("/:id", auth, update);
router.delete("/:id", auth, remove);

export default router;
