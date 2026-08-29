import Location from '../models/Location.js';

export async function getLocations(req, res, next) {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    next(err);
  }
}
