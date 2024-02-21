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
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
const blog_1 = require("../model/blog");
const errormessage_1 = require("../utils/errormessage");
const successmessage_1 = require("../utils/successmessage");
class blogController {
    static postblogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield blog_1.Blogs.create(req.body);
                if (!blog) {
                    return (0, errormessage_1.errormessage)(res, 401, "blog not posted");
                }
                else {
                    return (0, successmessage_1.successmessage)(res, 201, "success post blog", blog);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getblogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield blog_1.Blogs.find();
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
            const blog = yield blog_1.Blogs.deleteMany();
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
            const blog = yield blog_1.Blogs.findById(id);
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
            const blog = yield blog_1.Blogs.findByIdAndDelete(id);
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
            const blog = yield blog_1.Blogs.findByIdAndUpdate(id, req.body, { new: true });
            if (!blog) {
                return (0, errormessage_1.errormessage)(res, 401, 'no blog found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, ' blogs updated', blog);
            }
        });
    }
}
exports.blogController = blogController;
