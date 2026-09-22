import { Router } from "express";
import { auth } from "../middleware/auth.js";
import {
  getPublished,
  getAll,
  create,
  update,
  remove,
} from "../controllers/media-controller.js";

const router = Router();

router.get("/", getPublished);
router.get("/all", auth, getAll);
router.post("/", auth, create);
router.put("/:id", auth, update);
router.delete("/:id", auth, remove);

export default router;
