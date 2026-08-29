import { Router } from 'express';
import { getWorkProjects } from '../controllers/workProjectController.js';

const router = Router();

router.get('/', getWorkProjects);

export default router;
