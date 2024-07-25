"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const folderchema = new mongoose_1.default.Schema({
    id: { type: String },
    category: { type: String, required: true },
    document: {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    },
    postAt: { type: Date, default: new Date(Date.now()) }
});
exports.default = mongoose_1.default.model('Folders', folderchema);
