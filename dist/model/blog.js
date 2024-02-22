"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const blogschema = new mongoose_1.default.Schema({
    id: { type: String },
    blogTitle: { type: String, required: true },
    blogName: { type: String, required: true },
    blogDiscription: { type: String, required: true },
    blogImage: { type: String, required: true },
    comments: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    likes: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    dislikes: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    postAt: { type: Date, default: new Date(Date.now()) }
});
exports.default = mongoose_1.default.model('Blogs', blogschema);
