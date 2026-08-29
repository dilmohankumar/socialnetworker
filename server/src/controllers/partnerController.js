import Partner from '../models/Partner.js';

export async function getPartners(req, res, next) {
  try {
    const filter = {};
    if (req.query.type === 'client' || req.query.type === 'partner') {
      filter.type = req.query.type;
    }
    const partners = await Partner.find(filter).sort({ order: 1 });
    res.json(partners);
  } catch (err) {
    next(err);
  }
}
