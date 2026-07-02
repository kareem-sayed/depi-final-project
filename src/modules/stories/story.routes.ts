import { Router } from 'express';
import * as storyController from './story.controller.js';

const router = Router();

router.get('/:slug', storyController.getStory);
router.get('/:slug/chapter/:chapterNumber', storyController.getStoryChapter);

export default router;
