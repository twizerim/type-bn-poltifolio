"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCheckers = void 0;
const user_1 = require("../model/user");
const errormessage_1 = require("../utils/errormessage");
class DataCheckers {
    static userRegistIsEmpty(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, lastname, phone, email, password, confrimpassword, message } = req.body;
            if (firstname === "") {
                return (0, errormessage_1.errormessage)(res, 401, 'please provide your first name');
            }
            else if (lastname === "") {
                return (0, errormessage_1.errormessage)(res, 401, 'please provide your last name');
            }
            else if (phone == "") {
                return (0, errormessage_1.errormessage)(res, 401, 'please provide your phone number');
            }
            else if (email === "") {
                return (0, errormessage_1.errormessage)(res, 401, 'please provide your email');
            }
            else if (password === "") {
                return (0, errormessage_1.errormessage)(res, 401, 'please provide your password');
            }
            else if (confrimpassword === "") {
                return (0, errormessage_1.errormessage)(res, 401, 'please provide your confrim password');
            }
            else if (message === "") {
                return (0, errormessage_1.errormessage)(res, 401, 'please provide your message');
            }
            else {
                return next();
            }
        });
    }
    static emailExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.body.email;
            const user = yield user_1.User.findOne({ email });
            if (user) {
                return (0, errormessage_1.errormessage)(res, 401, 'please user allredy exist');
            }
            else {
                return next();
            }
        });
    }
}
exports.DataCheckers = DataCheckers;
