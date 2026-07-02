import { Router } from 'express';
import prophetRoutes from '../modules/prophets/prophet.routes.js';
import quizRoutes from '../modules/quizzes/quiz.routes.js';
import storyRoutes from '../modules/stories/story.routes.js';
import authRoutes from '../modules/auth/auth.routes.js';

const router = Router();




// Mount module routes
router.use('/prophets', prophetRoutes);
router.use('/stories', storyRoutes);
router.use('/quizzes', quizRoutes);


router.use('/auth', authRoutes);
// router.use('/users', userRoutes);
// router.use('/progress', progressRoutes);
// router.use('/bookmarks', bookmarkRoutes);
// router.use('/dashboard', dashboardRoutes);

export default router;
