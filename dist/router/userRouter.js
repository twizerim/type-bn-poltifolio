"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usercontroller_1 = require("../controller/usercontroller");
const datachecker_1 = require("../validater/datachecker");
const validation_1 = require("../validater/validation");
const velifiyAccess_1 = __importDefault(require("../validater/velifiyAccess"));
const router = express_1.default.Router();
router.post("/create", datachecker_1.DataCheckers.userRegistIsEmpty, datachecker_1.DataCheckers.emailExist, validation_1.Validation.userAccountRule(), validation_1.Validation.inputValidator, usercontroller_1.userController.createuser);
router.get("/get", usercontroller_1.userController.getusers);
router.get("/get/:id", usercontroller_1.userController.getOneUsers);
router.delete("/delete", usercontroller_1.userController.deleteusers);
router.delete("/delete/:id", (0, velifiyAccess_1.default)("admin"), usercontroller_1.userController.deleteOneUsers);
router.patch("/update/:id", (0, velifiyAccess_1.default)("admin"), datachecker_1.DataCheckers.userRegistIsEmpty, usercontroller_1.userController.updateUsers);
router.post("/login", datachecker_1.DataCheckers.userRegistIsEmpty, usercontroller_1.userController.Login);
exports.default = router;
