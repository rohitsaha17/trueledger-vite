import { Router, raw } from "express";
import { auth } from "../middleware/auth.js";
import { upload, serve } from "../controllers/upload-controller.js";

const router = Router();

router.post("/", auth, raw({ type: () => true, limit: "50mb" }), upload);
router.get("/:id", serve);

export default router;
