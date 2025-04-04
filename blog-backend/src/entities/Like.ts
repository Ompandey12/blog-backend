import mongoose from 'mongoose';
export interface ILike {
    _id?: mongoose.Types.ObjectId;
    blog: mongoose.Types.ObjectId; // Blog ID reference
    user: mongoose.Types.ObjectId; // User ID reference
    createdAt?: Date;
}
