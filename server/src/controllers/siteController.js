import SiteSettings from '../models/SiteSettings.js';
import Service from '../models/Service.js';
import Industry from '../models/Industry.js';
import CaseStudy from '../models/CaseStudy.js';
import Testimonial from '../models/Testimonial.js';
import Client from '../models/Client.js';
import BlogPost from '../models/BlogPost.js';
import Faq from '../models/Faq.js';
import Package from '../models/Package.js';
import ContactMessage from '../models/ContactMessage.js';
import { sendLeadNotification } from '../services/mailer.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function getSettings(req, res, next) {
  try {
    const settings = await SiteSettings.findOne({ key: 'main' }).lean();
    if (!settings) {
      const err = new Error('Site settings not found. Run `npm run seed` in /server.');
      err.status = 404;
      throw err;
    }
    res.json(settings);
  } catch (err) {
    next(err);
  }
}

export async function updateSettings(req, res, next) {
  try {
    const { _id, key, ...rest } = req.body;
    const settings = await SiteSettings.findOneAndUpdate({ key: 'main' }, rest, {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    });
    res.json(settings);
  } catch (err) {
    if (err.name === 'ValidationError') err.status = 400;
    next(err);
  }
}

/** One round-trip for the whole home page (matters on a cold-started host). */
export async function getHome(req, res, next) {
  try {
    const [services, industries, caseStudies, testimonials, clients, posts, faqs, packages] = await Promise.all([
      Service.find({ featured: true }).sort({ order: 1 }).select('slug title icon tagline shortDescription results order').lean(),
      Industry.find().sort({ order: 1 }).select('slug title icon summary order').lean(),
      CaseStudy.find({ featured: true }).sort({ order: 1 }).limit(3).select('-actions -challenge -solution -quote').lean(),
      Testimonial.find({ featured: true }).sort({ order: 1 }).lean(),
      Client.find().sort({ order: 1 }).lean(),
      BlogPost.find({ isPublished: true }).sort({ publishedAt: -1 }).limit(3).select('-content').lean(),
      Faq.find({ category: 'general' }).sort({ order: 1 }).limit(6).lean(),
      Package.find().sort({ order: 1 }).lean(),
    ]);
    res.json({ services, industries, caseStudies, testimonials, clients, posts, faqs, packages });
  } catch (err) {
    next(err);
  }
}

export async function submitContact(req, res, next) {
  try {
    const { name, email, phone, company, website, service, budget, message, source } = req.body;
    if (!name?.trim() || !email?.trim()) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }
    if (!EMAIL_RE.test(email.trim())) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }
    const isAudit = source === 'audit';
    if (!isAudit && !message?.trim()) {
      return res.status(400).json({ message: 'Please tell us a little about your project.' });
    }
    // Explicit pick — never spread req.body into the model (blocks status/_id injection).
    const saved = await ContactMessage.create({
      name,
      email,
      phone,
      company,
      website,
      service,
      budget,
      message,
      source: isAudit ? 'audit' : 'contact',
    });
    // fire-and-forget: the visitor shouldn't wait on (or fail because of) SMTP
    sendLeadNotification(saved.toObject());
    res.status(201).json({
      message: isAudit
        ? 'Thanks! Your free audit request is in — expect a reply within 1 business day.'
        : 'Thanks! We will get back to you within 1 business day.',
      id: saved._id,
    });
  } catch (err) {
    if (err.name === 'ValidationError') err.status = 400;
    next(err);
  }
}
