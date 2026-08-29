import WorkProject from '../models/WorkProject.js';

export async function getWorkProjects(req, res, next) {
  try {
    const projects = await WorkProject.find().sort({ order: 1 });
    res.json(projects);
  } catch (err) {
    next(err);
  }
}
