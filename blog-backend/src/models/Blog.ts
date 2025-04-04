import mongoose from 'mongoose';
import { IBlog } from '../entities/Blog';

const BlogSchema = new mongoose.Schema<IBlog>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }]
}, { timestamps: true });

export default mongoose.model<IBlog>('Blog', BlogSchema);
