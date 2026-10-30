import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    phone: { type: String, trim: true, maxlength: 40 },
    company: { type: String, trim: true, maxlength: 160 },
    website: { type: String, trim: true, maxlength: 300 },
    service: { type: String, trim: true, maxlength: 120 },
    budget: { type: String, trim: true, maxlength: 80 },
    message: { type: String, trim: true, maxlength: 4000, default: '' },
    source: { type: String, enum: ['contact', 'audit'], default: 'contact' },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

export default mongoose.model('ContactMessage', contactMessageSchema);
