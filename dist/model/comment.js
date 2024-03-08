"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    commeterName: { type: String, required: true },
    comment: { type: String, required: true },
    postAt: { type: Date, default: new Date(Date.now()) }
});
const Comment = (0, mongoose_1.model)('Comment', CommentSchema);
exports.default = Comment;
