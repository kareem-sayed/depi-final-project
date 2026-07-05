import { Router } from 'express';
import prophetRoutes    from '../modules/prophets/prophet.routes.js';
import quizRoutes       from '../modules/quizzes/quiz.routes.js';
import storyRoutes      from '../modules/stories/story.routes.js';
import authRoutes       from '../modules/auth/auth.routes.js';
import bookmarkRoutes   from '../modules/bookmarks/bookmark.routes.js';
import quizResultRoutes from '../modules/quizresult/quizResult.routes.js';
import achievementRoutes from '../modules/achievements/achievement.routes.js';
import dashboardRoutes  from '../modules/dashboard/dashboard.routes.js';
import adminRoutes      from '../modules/dashboard/admin.routes.js';
import progressRoutes   from '../modules/progress/progress.route.js';
const router = Router();

// ─── Public / Auth ────────────────────────────────────────────────────────────
router.use('/auth', authRoutes);

// ─── Content ──────────────────────────────────────────────────────────────────
router.use('/prophets', prophetRoutes);
router.use('/stories',  storyRoutes);
router.use('/quizzes',  quizRoutes);


// ─── User Activity ────────────────────────────────────────────────────────────
router.use('/bookmarks',    bookmarkRoutes);
router.use('/progress',   progressRoutes  );
router.use('/quiz-results', quizResultRoutes);
router.use('/achievements', achievementRoutes);
router.use('/dashboard',    dashboardRoutes);

// ─── Admin ────────────────────────────────────────────────────────────────────
router.use('/admin', adminRoutes);

export default router;
