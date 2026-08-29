import mongoose from 'mongoose';

const workProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    industry: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], default: [] },
    image: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('WorkProject', workProjectSchema);
