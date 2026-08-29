import NewsPost from '../models/NewsPost.js';

export async function getNewsPosts(req, res, next) {
  try {
    const posts = await NewsPost.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    next(err);
  }
}
