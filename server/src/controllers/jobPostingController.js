import JobPosting from '../models/JobPosting.js';

export async function getJobPostings(req, res, next) {
  try {
    const jobs = await JobPosting.find({ isOpen: true }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    next(err);
  }
}
