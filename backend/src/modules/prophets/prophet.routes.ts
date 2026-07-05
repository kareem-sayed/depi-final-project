import { Router } from 'express';
import * as prophetController from './prophet.controller.js';

const router = Router();

router.get('/', prophetController.getProphets);
router.get('/:slug', prophetController.getProphet);

export default router;
