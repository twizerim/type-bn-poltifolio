"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogcontroller_1 = require("../controller/blogcontroller");
const velifiyAccess_1 = __importDefault(require("../validater/velifiyAccess"));
const multer_1 = __importDefault(require("../validater/multer"));
const router = express_1.default.Router();
router.post("/post", multer_1.default.single("image"), (0, velifiyAccess_1.default)("admin"), blogcontroller_1.blogController.postblogs);
router.get("/get", blogcontroller_1.blogController.getblogs);
router.get("/get/:id", (0, velifiyAccess_1.default)("user"), blogcontroller_1.blogController.getOneblogs);
router.delete("/delete", (0, velifiyAccess_1.default)("admin"), blogcontroller_1.blogController.deleteblogs);
router.delete("/delete/:id", (0, velifiyAccess_1.default)("admin"), blogcontroller_1.blogController.deleteOneblogs);
router.patch("/update/:id", (0, velifiyAccess_1.default)("admin"), blogcontroller_1.blogController.updateblogs);
router.put("/like/:blogId", (0, velifiyAccess_1.default)("user"), blogcontroller_1.blogController.likes);
router.put("/dislikes/:blogId", (0, velifiyAccess_1.default)("user"), blogcontroller_1.blogController.dislikes);
exports.default = router;
