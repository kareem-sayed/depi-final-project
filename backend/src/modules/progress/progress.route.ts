import { Router } from "express";
import * as progressController from "./progress.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import { validateRequest } from "../../middleware/validate.middleware.js";
import { saveProgressSchema } from "../../shared/schemas/progress.schema.js";

const router = Router();

router.get("/", protect, progressController.getProgress);

router.post(
  "/save",
  protect,
  validateRequest(saveProgressSchema),
  progressController.saveProgress,
);

export default router;
