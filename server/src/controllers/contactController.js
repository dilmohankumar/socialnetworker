import ContactMessage from '../models/ContactMessage.js';

export async function submitContact(req, res, next) {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'name, email and message are required' });
    }
    const saved = await ContactMessage.create(req.body);
    res.status(201).json({ message: 'Thanks! We will get back to you shortly.', id: saved._id });
  } catch (err) {
    next(err);
  }
}
