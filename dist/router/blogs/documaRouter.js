"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foldersmulter_1 = __importDefault(require("../../validater/blogs/foldersmulter"));
const documacontroller_1 = require("../../controller/blogcontroller/documacontroller");
const router = express_1.default.Router();
router.post("/post", foldersmulter_1.default, documacontroller_1.DocumentController.postdocuma);
router.get("/get", documacontroller_1.DocumentController.getdocuma);
router.delete("/delete", documacontroller_1.DocumentController.deletdocuma);
exports.default = router;
