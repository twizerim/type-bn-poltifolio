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
exports.ImageController = void 0;
const errormessage_1 = require("../../utils/errormessage");
const successmessage_1 = require("../../utils/successmessage");
const image_1 = __importDefault(require("../../model/blogs/image"));
class ImageController {
    static postImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { category } = req.body;
                const image = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) || "";
                const newImage = new image_1.default({ category, image });
                const savedImage = yield newImage.save();
                return (0, successmessage_1.successmessage)(res, 201, 'image successfuly posted', savedImage);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const images = yield image_1.default.find();
            if (!images) {
                return (0, errormessage_1.errormessage)(res, 401, 'no image found');
            }
            else {
                return (0, successmessage_1.successmessage)(res, 201, 'all imagess retrived', images);
            }
        });
    }
}
exports.ImageController = ImageController;
