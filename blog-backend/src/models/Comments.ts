import mongoose from 'mongoose';
import { IComment } from '../entities/Comments';

const CommentsSchema = new mongoose.Schema<IComment>({
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<IComment>('Comments', CommentsSchema);
