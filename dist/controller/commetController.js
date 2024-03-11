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
exports.commentcontroller = void 0;
const comment_1 = __importDefault(require("../model/comment"));
const blog_1 = __importDefault(require("../model/blog"));
const errormessage_1 = require("../utils/errormessage");
const successmessage_1 = require("../utils/successmessage");
class commentcontroller {
    static postcomment(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blogId = req.params.blogId;
                req.body.user = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user.id;
                const comment = yield comment_1.default.create(req.body);
                const blog = yield blog_1.default.findByIdAndUpdate(blogId, { $push: { comments: comment } }, { new: true });
                if (!blog) {
                    return (0, errormessage_1.errormessage)(res, 401, `no blog found on this id ${blogId}`);
                }
                else {
                    return (0, successmessage_1.successmessage)(res, 201, 'comment successfuly posted', blog);
                }
            }
            catch (error) {
                return (0, errormessage_1.errormessage)(res, 500, `${error}`);
            }
        });
    }
    static getcomment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield comment_1.default.find();
            if (!comment) {
                return (0, errormessage_1.errormessage)(res, 401, 'no comment found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, 'comments retrived', comment);
            }
        });
    }
    static deletecomment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield comment_1.default.deleteMany();
            if (!comment) {
                return (0, errormessage_1.errormessage)(res, 401, 'no comment found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, 'comments deleted', null);
            }
        });
    }
    static getonecomment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const comment = yield comment_1.default.findById(id);
            if (!comment) {
                return (0, errormessage_1.errormessage)(res, 401, 'no comment found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, 'comments retrived', comment);
            }
        });
    }
    static deleteoncommet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const comment = yield comment_1.default.findByIdAndDelete(id);
            if (!comment) {
                return (0, errormessage_1.errormessage)(res, 401, 'no comment found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, 'comments deleted', null);
            }
        });
    }
}
exports.commentcontroller = commentcontroller;
