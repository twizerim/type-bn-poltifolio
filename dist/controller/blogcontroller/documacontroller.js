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
exports.DocumentController = void 0;
const errormessage_1 = require("../../utils/errormessage");
const successmessage_1 = require("../../utils/successmessage");
const folders_1 = __importDefault(require("../../model/blogs/folders"));
const cloudinary_1 = __importDefault(require("../../utils/cloud/cloudinary"));
class DocumentController {
    static postdocuma(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { category } = req.body;
                const document = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) || "";
                if (!req.file) {
                    return (0, errormessage_1.errormessage)(res, 404, 'Please upload your document');
                }
                else {
                    const result = yield cloudinary_1.default.uploader.upload(req.file.path, {
                        folder: 'Documents'
                    });
                    const newdocuma = yield folders_1.default.create({ document: {
                            public_id: result.public_id,
                            url: result.secure_url,
                        }, category });
                    if (!newdocuma) {
                        return (0, errormessage_1.errormessage)(res, 404, 'No document posted');
                    }
                    else {
                        return (0, successmessage_1.successmessage)(res, 201, 'document successfuly posted', newdocuma);
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getdocuma(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const documa = yield folders_1.default.find();
            if (!documa) {
                return (0, errormessage_1.errormessage)(res, 401, 'no document found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, 'all documents retrived', documa);
            }
        });
    }
    static deletdocuma(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const documa = yield folders_1.default.deleteMany();
            if (!documa) {
                return (0, errormessage_1.errormessage)(res, 401, 'no document found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, 'all documents deleted', documa);
            }
        });
    }
}
exports.DocumentController = DocumentController;
