import mongoose from 'mongoose';

const { Mixed } = mongoose.Schema.Types;

/**
 * Singleton document holding everything that is "site-wide copy": brand,
 * navigation, hero, stats, process, contact details, footer and the
 * headings of each home-page section. Free-form blocks use Mixed so the
 * admin can add keys without a migration.
 */
const siteSettingsSchema = new mongoose.Schema(
  {
    key: { type: String, default: 'main', unique: true },
    brand: {
      name: { type: String, required: true },
      tagline: { type: String, default: '' },
      yearsExperience: { type: Number, default: 10 },
    },
    seo: {
      title: { type: String, default: '' },
      description: { type: String, default: '' },
    },
    // source: 'services' | 'industries' fills the dropdown from that collection
    nav: [
      {
        _id: false,
        label: { type: String, required: true },
        to: { type: String, required: true },
        source: { type: String, enum: ['services', 'industries', null], default: null },
      },
    ],
    hero: { type: Mixed, default: {} },
    stats: [{ _id: false, value: String, label: String }],
    process: { type: Mixed, default: {} },
    sectionCopy: { type: Mixed, default: {} },
    cta: { type: Mixed, default: {} },
    tools: { type: [String], default: [] },
    certifications: [{ _id: false, name: String, issuer: String }],
    contact: { type: Mixed, default: {} },
    social: [{ _id: false, label: String, icon: String, href: String }],
    footer: { type: Mixed, default: {} },
  },
  { timestamps: true }
);

export default mongoose.model('SiteSettings', siteSettingsSchema);
