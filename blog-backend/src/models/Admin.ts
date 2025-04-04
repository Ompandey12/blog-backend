import mongoose from 'mongoose';
import { IAdmin } from '../entities/Admin';

const AdminSchema = new mongoose.Schema<IAdmin>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<IAdmin>('Admin', AdminSchema);
