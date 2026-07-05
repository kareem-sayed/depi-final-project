import{Router} from "express";
import * as authController from "./auth.controller.js";
import {registerSchema,loginSchema} from "../../shared/schemas/auth.schmea.js";
import { validateRequest } from "../../middleware/validate.middleware.js";

const router=Router();
router.post("/register",validateRequest(registerSchema),authController.register);
router.post("/login",validateRequest(loginSchema),authController.login);
export default router;
