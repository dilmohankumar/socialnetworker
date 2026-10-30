import { Router } from 'express';
import { makeCrud } from '../controllers/crudFactory.js';
import { getSettings, updateSettings, getHome, submitContact } from '../controllers/siteController.js';
import { dbStatus, probeAtlas } from '../config/db.js';
import { requireAdmin } from '../middleware/adminAuth.js';
import { rateLimit } from '../middleware/rateLimit.js';

import Service from '../models/Service.js';
import Industry from '../models/Industry.js';
import CaseStudy from '../models/CaseStudy.js';
import BlogPost from '../models/BlogPost.js';
import Testimonial from '../models/Testimonial.js';
import Client from '../models/Client.js';
import TeamMember from '../models/TeamMember.js';
import Package from '../models/Package.js';
import Faq from '../models/Faq.js';
import JobPosting from '../models/JobPosting.js';
import PageContent from '../models/PageContent.js';

const router = Router();

router.get('/health', async (req, res) => {
  const db = { connected: dbStatus.connected, hasUri: dbStatus.hasUri, attempts: dbStatus.attempts, error: dbStatus.error };
  if (!db.connected && req.query.probe) db.probe = await probeAtlas();
  res.json({ status: 'ok', db });
});
router.get('/settings', getSettings);
router.put('/settings', requireAdmin, updateSettings);
router.get('/home', getHome);
router.post('/contact', rateLimit({ windowMs: 60 * 60 * 1000, max: 8 }), submitContact);

function resource(path, Model, options) {
  const crud = makeCrud(Model, options);
  router.get(`/${path}`, crud.list);
  router.get(`/${path}/:key`, crud.get);
  router.post(`/${path}`, requireAdmin, crud.create);
  router.put(`/${path}/:key`, requireAdmin, crud.update);
  router.delete(`/${path}/:key`, requireAdmin, crud.remove);
}

resource('services', Service, {
  bySlug: true,
  filters: { featured: 'featured' },
  listSelect: 'slug title icon tagline shortDescription startingPrice results order featured',
});
resource('industries', Industry, { bySlug: true, listSelect: 'slug title icon summary order' });
resource('case-studies', CaseStudy, {
  bySlug: true,
  filters: { featured: 'featured', industry: 'industry', service: 'serviceSlugs' },
  listSelect: '-actions -challenge -solution -quote',
});
resource('blog', BlogPost, {
  bySlug: true,
  sort: { publishedAt: -1 },
  publicFilter: { isPublished: true },
  filters: { category: 'category', featured: 'featured', tag: 'tags' },
  listSelect: '-content',
});
resource('testimonials', Testimonial, { filters: { featured: 'featured' } });
resource('clients', Client);
resource('team', TeamMember);
resource('packages', Package);
resource('faqs', Faq, { filters: { category: 'category' } });
resource('jobs', JobPosting, { sort: { createdAt: -1 }, publicFilter: { isOpen: true } });
resource('pages', PageContent, { bySlug: true });

export default router;
