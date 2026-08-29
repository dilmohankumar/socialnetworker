import TeamMember from '../models/TeamMember.js';

export async function getTeamMembers(req, res, next) {
  try {
    const members = await TeamMember.find().sort({ order: 1 });
    res.json(members);
  } catch (err) {
    next(err);
  }
}
