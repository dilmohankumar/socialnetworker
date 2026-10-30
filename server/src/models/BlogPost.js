import mongoose from 'mongoose';

/**
 * `content` is a list of typed blocks instead of raw HTML so the client can
 * render it without dangerouslySetInnerHTML:
 *   { type: 'h2' | 'p' | 'quote', text }  or  { type: 'ul' | 'ol', items: [] }
 */
const blockSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['h2', 'h3', 'p', 'ul', 'ol', 'quote'], required: true },
    text: String,
    items: [String],
  },
  { _id: false }
);

const blogPostSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    category: { type: String, default: 'General', index: true },
    author: { type: String, default: '' },
    authorRole: { type: String, default: '' },
    readTime: { type: Number, default: 5 },
    tags: { type: [String], default: [] },
    image: { type: String, default: '' },
    content: { type: [blockSchema], default: [] },
    publishedAt: { type: Date, default: Date.now, index: true },
    isPublished: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('BlogPost', blogPostSchema);
