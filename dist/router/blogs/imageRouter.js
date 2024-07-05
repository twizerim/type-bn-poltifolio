"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imagemulter_1 = __importDefault(require("../../validater/blogs/imagemulter"));
const imagecontroller_1 = require("../../controller/blogcontroller/imagecontroller");
const router = express_1.default.Router();
router.post("/post", imagemulter_1.default.single("image"), imagecontroller_1.ImageController.postImage);
router.get("/get", imagecontroller_1.ImageController.getImages);
router.delete("/delete", imagecontroller_1.ImageController.deletemages);
exports.default = router;
