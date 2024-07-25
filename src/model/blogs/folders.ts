import mongoose, { Schema, Document } from "mongoose";

export interface Folder extends Document {
    id: string;
    category: string;
    document: {
        public_id: string;
        url: string;
    };
    postAt: Date;
}

const folderSchema = new mongoose.Schema({
    id: { type: String },
    category: { type: String, required: true },
    document: {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    },
    postAt: { type: Date, default: new Date() }
});

export default mongoose.model<Folder>('Folders', folderSchema);
