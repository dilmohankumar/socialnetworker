import Service from '../models/Service.js';

export async function getServices(req, res, next) {
  try {
    const services = await Service.find().sort({ order: 1 });
    res.json(services);
  } catch (err) {
    next(err);
  }
}

export async function getServiceById(req, res, next) {
  try {
    const service = await Service.findOne({ id: req.params.id });
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (err) {
    next(err);
  }
}
