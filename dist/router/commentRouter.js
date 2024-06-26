"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commetController_1 = require("../controller/commetController");
const velifiyAccess_1 = __importDefault(require("../validater/velifiyAccess"));
const router = express_1.default.Router();
router.post("/:blogId", (0, velifiyAccess_1.default)("user"), commetController_1.commentcontroller.postcomment);
router.get("/", commetController_1.commentcontroller.getcomment);
router.get("/:id", (0, velifiyAccess_1.default)("admin"), commetController_1.commentcontroller.getonecomment);
router.delete("/", (0, velifiyAccess_1.default)("admin"), commetController_1.commentcontroller.deletecomment);
router.delete("/:id", (0, velifiyAccess_1.default)("admin"), commetController_1.commentcontroller.deleteoncommet);
router.get("/:blogID", (0, velifiyAccess_1.default)("user"), commetController_1.commentcontroller.getcommentbyBlog);
exports.default = router;
