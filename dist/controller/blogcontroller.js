"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
const blog_1 = __importDefault(require("../model/blog"));
const errormessage_1 = require("../utils/errormessage");
const successmessage_1 = require("../utils/successmessage");
class blogController {
    static postblogs(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { blogName, blogTitle, blogDescription } = req.body;
                const blogImage = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) || "";
                const newBlog = new blog_1.default({ blogName, blogTitle, blogDescription, blogImage });
                const savedBlog = yield newBlog.save();
                return (0, successmessage_1.successmessage)(res, 201, 'blog successfuly posted', savedBlog);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getblogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield blog_1.default.find();
            if (!blog) {
                return (0, errormessage_1.errormessage)(res, 401, 'no blog found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, 'all blogs retrived', blog);
            }
        });
    }
    static deleteblogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield blog_1.default.deleteMany();
            if (!blog) {
                return (0, errormessage_1.errormessage)(res, 401, 'no blog found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, 'all blogs deleted', null);
            }
        });
    }
    static getOneblogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const blog = yield blog_1.default.findById(id);
            if (!blog) {
                return (0, errormessage_1.errormessage)(res, 401, 'no blog found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, ' blogs retrived', blog);
            }
        });
    }
    static deleteOneblogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const blog = yield blog_1.default.findByIdAndDelete(id);
            if (!blog) {
                return (0, errormessage_1.errormessage)(res, 401, 'no blog found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, ' blogs deleted', null);
            }
        });
    }
    static updateblogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const blog = yield blog_1.default.findByIdAndUpdate(id, req.body, { new: true });
            if (!blog) {
                return (0, errormessage_1.errormessage)(res, 401, 'no blog found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, ' blogs updated', blog);
            }
        });
    }
    static likes(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blogId = req.params.blogId;
                const blog = yield blog_1.default.findById(blogId);
                if (!blog) {
                    return (0, errormessage_1.errormessage)(res, 401, 'No blog found');
                }
                else {
                    const userId = ((_a = req.user) === null || _a === void 0 ? void 0 : _a.user.id) || blogId;
                    if (blog.likes.includes(userId)) {
                        return (0, errormessage_1.errormessage)(res, 401, 'You already liked this blog');
                    }
                    else {
                        blog.likes.push(userId);
                        yield blog.save();
                        (0, successmessage_1.successmessage)(res, 200, 'Blog liked successfully', blog);
                    }
                }
            }
            catch (error) {
                // Handle any unexpected errors
                console.error(error);
                return (0, errormessage_1.errormessage)(res, 500, 'Internal Server Error');
            }
        });
    }
    static dislikes(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blogId = req.params.blogId;
                const blog = yield blog_1.default.findById(blogId);
                if (!blog) {
                    return (0, errormessage_1.errormessage)(res, 401, 'No blog found');
                }
                else {
                    const userId = ((_a = req.user) === null || _a === void 0 ? void 0 : _a.user.id) || blogId;
                    if (blog.dislikes.includes(userId)) {
                        return (0, errormessage_1.errormessage)(res, 401, 'You already liked this blog');
                    }
                    else {
                        blog.dislikes.push(userId);
                        yield blog.save();
                        (0, successmessage_1.successmessage)(res, 200, 'Blog disliked successfully', blog);
                    }
                }
            }
            catch (error) {
                console.error(error);
                return (0, errormessage_1.errormessage)(res, 500, 'Internal Server Error');
            }
        });
    }
}
exports.blogController = blogController;
