import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    icon: { type: String, default: 'rocket' },
    tagline: { type: String, default: '' },
    shortDescription: { type: String, required: true },
    overview: { type: String, default: '' },
    benefits: { type: [String], default: [] },
    deliverables: [{ _id: false, title: String, description: String }],
    process: [{ _id: false, title: String, description: String }],
    tools: { type: [String], default: [] },
    results: [{ _id: false, value: String, label: String }],
    faqs: [{ _id: false, question: String, answer: String }],
    startingPrice: { type: String, default: '' },
    featured: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Service', serviceSchema);
