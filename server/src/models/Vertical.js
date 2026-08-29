import mongoose from 'mongoose';

const verticalSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    to: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Vertical', verticalSchema);
