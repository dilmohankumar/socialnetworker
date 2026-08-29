import mongoose from 'mongoose';

const newsPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    summary: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('NewsPost', newsPostSchema);
