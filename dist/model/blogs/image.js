"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const imagechema = new mongoose_1.default.Schema({
    id: { type: String },
    category: { type: String, required: true },
    image: {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    },
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
imagechema.pre(/^find/, function (next) {
    this.populate({
        path: "comments",
        select: "names comment postAt"
    });
    next();
});
exports.default = mongoose_1.default.model('Image', imagechema);
