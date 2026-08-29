import Vertical from '../models/Vertical.js';

export async function getVerticals(req, res, next) {
  try {
    const verticals = await Vertical.find().sort({ order: 1 });
    res.json(verticals);
  } catch (err) {
    next(err);
  }
}
