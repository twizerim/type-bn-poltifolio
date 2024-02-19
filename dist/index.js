"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./router"));
dotenv_1.default.config();
const andela = (0, express_1.default)();
andela.use(body_parser_1.default.json());
andela.use("/Jant", router_1.default);
const portas = parseInt(process.env.PORT || "3000", 10);
const db = process.env.DATABASE || "mongodb+srv://gedeonprogrammer:programmer12@cluster0.8sikbdc.mongodb.net/Andela-poltifolio";
mongoose_1.default.connect(db)
    .then(() => {
    console.log("Database successfully connected.....");
    andela.listen(portas, () => {
        console.log(`Server running on port ${portas}`);
    });
})
    .catch((error) => {
    console.error("Error connecting to database:", error);
});
exports.default = andela;
