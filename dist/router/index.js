"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("../router/userRouter"));
const messageRouter_1 = __importDefault(require("../router/messageRouter"));
const blogRouter_1 = __importDefault(require("../router/blogRouter"));
const commentRouter_1 = __importDefault(require("../router/commentRouter"));
const imageRouter_1 = __importDefault(require("../router/blogs/imageRouter"));
const router = express_1.default.Router();
router.use("/user", userRouter_1.default);
router.use("/message", messageRouter_1.default);
router.use("/blogs", blogRouter_1.default);
router.use("/comment", commentRouter_1.default);
// ----------------------------------------------------------------------------
router.use("/imageuploaded", imageRouter_1.default);
exports.default = router;
