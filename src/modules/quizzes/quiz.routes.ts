import { Router } from 'express';
import * as quizController from './quiz.controller.js';

const router = Router();

router.get('/:slug', quizController.getQuiz);
router.post('/:slug/submit', quizController.submitQuiz);

export default router;
