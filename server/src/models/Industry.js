import mongoose from 'mongoose';

const industrySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    icon: { type: String, default: 'building' },
    summary: { type: String, required: true },
    description: { type: String, default: '' },
    challenges: { type: [String], default: [] },
    strategies: [{ _id: false, title: String, description: String }],
    serviceSlugs: { type: [String], default: [] },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Industry', industrySchema);
