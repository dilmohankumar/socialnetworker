import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, default: '' },
    expertise: { type: [String], default: [] },
    image: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('TeamMember', teamMemberSchema);
