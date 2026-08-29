import { Router } from 'express';
import { getNewsPosts } from '../controllers/newsPostController.js';

const router = Router();

router.get('/', getNewsPosts);

export default router;
