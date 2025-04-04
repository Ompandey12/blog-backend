import mongoose from 'mongoose';
import { ILike } from '../entities/Like';

const LikeSchema = new mongoose.Schema<ILike>({
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model<ILike>('Like', LikeSchema);
