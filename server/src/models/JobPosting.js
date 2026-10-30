import mongoose from 'mongoose';

const jobPostingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: { type: String, default: '' },
    type: { type: String, default: 'Full-time' },
    experience: { type: String, default: '' },
    location: { type: String, default: '' },
    details: { type: String, default: '' },
    skills: { type: [String], default: [] },
    isOpen: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('JobPosting', jobPostingSchema);
