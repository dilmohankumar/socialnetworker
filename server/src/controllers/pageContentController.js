import PageContent from '../models/PageContent.js';

export async function getPageBySlug(req, res, next) {
  try {
    const page = await PageContent.findOne({ slug: req.params.slug });
    if (!page) {
      const err = new Error(`No page content found for slug "${req.params.slug}"`);
      err.status = 404;
      throw err;
    }
    res.json(page);
  } catch (err) {
    next(err);
  }
}
