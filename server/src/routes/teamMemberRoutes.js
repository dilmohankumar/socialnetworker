import { Router } from 'express';
import { getTeamMembers } from '../controllers/teamMemberController.js';

const router = Router();

router.get('/', getTeamMembers);

export default router;
