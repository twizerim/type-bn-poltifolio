"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactcontroller_1 = require("../controller/contactcontroller");
const datachecker_1 = require("../validater/datachecker");
const velifiyAccess_1 = __importDefault(require("../validater/velifiyAccess"));
const router = express_1.default.Router();
router.post("/", datachecker_1.DataCheckers.userRegistIsEmpty, contactcontroller_1.contactController.sendmessage);
router.get("/", (0, velifiyAccess_1.default)("admin"), contactcontroller_1.contactController.getmessage);
router.get("/:id", (0, velifiyAccess_1.default)("admin"), contactcontroller_1.contactController.geteOnemessage);
router.delete("/", (0, velifiyAccess_1.default)("admin"), contactcontroller_1.contactController.deletemessage);
router.delete("/:id", (0, velifiyAccess_1.default)("admin"), contactcontroller_1.contactController.deleteOnemessage);
exports.default = router;
