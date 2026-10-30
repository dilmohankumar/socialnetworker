import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema(
  { heading: String, body: String, bullets: { type: [String], default: [] } },
  { _id: false }
);

const pageContentSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    intro: String,
    image: String,
    highlights: { type: [String], default: [] },
    sections: { type: [sectionSchema], default: [] },
    stats: [{ _id: false, label: { type: String, required: true }, value: { type: String, required: true } }],
  },
  { timestamps: true }
);

export default mongoose.model('PageContent', pageContentSchema);
