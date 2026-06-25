import { Router } from 'express';
import { createUser, getUsers } from '../controllers/userController.js';

const router = Router();

router.route('/').get(getUsers).post(createUser);

export default router;
