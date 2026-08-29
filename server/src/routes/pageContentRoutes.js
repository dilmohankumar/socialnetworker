import { Router } from 'express';
import { getPageBySlug } from '../controllers/pageContentController.js';

const router = Router();

router.get('/:slug', getPageBySlug);

export default router;
