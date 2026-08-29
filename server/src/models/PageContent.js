import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema(
  {
    heading: { type: String },
    body: { type: String },
    bullets: { type: [String], default: [] },
  },
  { _id: false }
);

const statSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const pageContentSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    intro: { type: String },
    image: { type: String },
    highlights: { type: [String], default: [] },
    sections: { type: [sectionSchema], default: [] },
    stats: { type: [statSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model('PageContent', pageContentSchema);
