import{Router} from "express";
import * as authController from "./auth.controller.js";
import {registerSchema,loginSchema,updateProfileSchema} from "../../shared/schemas/auth.schmea.js";
import { validateRequest } from "../../middleware/validate.middleware.js";
import {protect} from "../../middleware/auth.middleware.js";

const router=Router();
router.post("/register",validateRequest(registerSchema),authController.register);
router.post("/login",validateRequest(loginSchema),authController.login);
router.get("/me",protect,authController.getMe);
router.put("/me",protect,validateRequest(updateProfileSchema),authController.updateMe);
export default router;
