import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, default: '' },
    color: { type: String, default: '#211E5B' },
    top: { type: String, required: true },
    left: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Location', locationSchema);
