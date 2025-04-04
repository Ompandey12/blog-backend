import mongoose from 'mongoose';
export interface IComment {
    _id?: mongoose.Types.ObjectId;
    blog: mongoose.Types.ObjectId; // Blog ID reference
    user: mongoose.Types.ObjectId; // User ID reference
    text: string;
    createdAt?: Date;
    updatedAt?: Date;
}
