import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ['client', 'partner'], required: true },
    category: { type: String },
    logo: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Partner', partnerSchema);
