"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usercontroller_1 = require("./controller/usercontroller");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.status(200).send({ message: "Welcome to our first API" });
});
app.post("/", usercontroller_1.userController.createuser);
app.post("/login", usercontroller_1.userController.Login);
app.get("/", usercontroller_1.userController.getusers);
app.get("/:id", usercontroller_1.userController.getOneUsers);
app.delete("/:id", usercontroller_1.userController.deleteOneUsers);
exports.default = app;
