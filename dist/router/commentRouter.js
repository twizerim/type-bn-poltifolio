"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commetController_1 = require("../controller/commetController");
const router = express_1.default.Router();
router.post("/:blogId", commetController_1.commentcontroller.postcomment);
router.get("/", commetController_1.commentcontroller.getcomment);
router.get("/:id", commetController_1.commentcontroller.getonecomment);
router.delete("/", commetController_1.commentcontroller.deletecomment);
router.delete("/:id", commetController_1.commentcontroller.deleteoncommet);
exports.default = router;
