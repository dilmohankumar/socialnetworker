import 'dotenv/config';
import mongoose from 'mongoose';

import SiteSettings from '../models/SiteSettings.js';
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

import { settings } from './seed/settings.js';
import { services } from './seed/services.js';
import { industries } from './seed/industries.js';
import { caseStudies } from './seed/caseStudies.js';
import { blogPosts } from './seed/blog.js';
import { testimonials, clients, team, packages, faqs, jobs, pages } from './seed/misc.js';

const collections = [
  [SiteSettings, [settings]],
  [Service, services],
  [Industry, industries],
  [CaseStudy, caseStudies],
  [BlogPost, blogPosts],
  [Testimonial, testimonials],
  [Client, clients],
  [TeamMember, team],
  [Package, packages],
  [Faq, faqs],
  [JobPosting, jobs],
  [PageContent, pages],
];

/**
 * Replaces the contents of every collection above with the sample digital
 * marketing content. Run `npm run seed` once; after that, edit content through
 * the admin API (see README) rather than re-seeding.
 */
async function seed() {
  if (!process.env.MONGO_URI) throw new Error('MONGO_URI is not set');
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`Seeding ${mongoose.connection.host}/${mongoose.connection.name}`);

  for (const [Model, docs] of collections) {
    // drop (not deleteMany) so indexes left over from an older schema can't block the insert
    await Model.collection.drop().catch(() => {});
    await Model.syncIndexes();
    await Model.insertMany(docs);
    console.log(`  ${Model.modelName}: ${docs.length}`);
  }

  await mongoose.disconnect();
  console.log('Done.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
