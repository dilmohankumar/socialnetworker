import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    client: { type: String, required: true },
    industry: { type: String, required: true },
    serviceSlugs: { type: [String], default: [] },
    duration: { type: String, default: '' },
    summary: { type: String, required: true },
    challenge: { type: String, default: '' },
    solution: { type: String, default: '' },
    actions: { type: [String], default: [] },
    results: [{ _id: false, value: String, label: String }],
    quote: { text: String, author: String, role: String },
    image: { type: String, default: '' },
    accent: { type: String, default: '#E1552D' },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('CaseStudy', caseStudySchema);
