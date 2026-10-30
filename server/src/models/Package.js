import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    period: { type: String, default: '/ month' },
    description: { type: String, default: '' },
    features: { type: [String], default: [] },
    popular: { type: Boolean, default: false },
    ctaLabel: { type: String, default: 'Get Started' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Package', packageSchema);
