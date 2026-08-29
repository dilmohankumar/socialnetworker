import Event from '../models/Event.js';

export async function getEvents(req, res, next) {
  try {
    const events = await Event.find().sort({ order: 1 });
    res.json(events);
  } catch (err) {
    next(err);
  }
}
