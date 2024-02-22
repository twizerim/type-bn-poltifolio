"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogcontroller_1 = require("../controller/blogcontroller");
// import upload from "../validater/multer"
const router = express_1.default.Router();
router.post("/post", blogcontroller_1.blogController.postblogs);
router.get("/get", blogcontroller_1.blogController.getblogs);
router.get("/get/:id", blogcontroller_1.blogController.getOneblogs);
router.delete("/delete", blogcontroller_1.blogController.deleteblogs);
router.delete("/delete/:id", blogcontroller_1.blogController.deleteOneblogs);
router.patch("/update/:id", blogcontroller_1.blogController.updateblogs);
router.put("/like/:blogId", blogcontroller_1.blogController.likes);
router.put("/dislikes/:blogId", blogcontroller_1.blogController.dislikes);
exports.default = router;
