"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usercontroller_1 = require("../controller/usercontroller");
const router = express_1.default.Router();
router.post("/create", usercontroller_1.userController.createuser);
exports.default = router;
