import mongoose from 'mongoose';
export interface IBlog {
    _id?: string;
    title: string;
    content: string;
    author: mongoose.Types.ObjectId; // User ID reference
    likes?: string[]; // Array of Like IDs
    comments?: string[]; // Array of Comment IDs
    createdAt?: Date;
    updatedAt?: Date;
}
