import { Router } from 'express';
import { getJobPostings } from '../controllers/jobPostingController.js';

const router = Router();

router.get('/', getJobPostings);

export default router;
