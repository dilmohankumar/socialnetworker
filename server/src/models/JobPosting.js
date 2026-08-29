import mongoose from 'mongoose';

const jobPostingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    experience: { type: String },
    location: { type: String },
    details: { type: String },
    isOpen: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('JobPosting', jobPostingSchema);
