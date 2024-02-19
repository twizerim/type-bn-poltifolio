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
exports.contactController = void 0;
const contact_1 = require("../model/contact");
const errormessage_1 = require("../utils/errormessage");
const successmessage_1 = require("../utils/successmessage");
class contactController {
    static sendmessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = yield contact_1.Contact.create(req.body);
                if (!message) {
                    return (0, errormessage_1.errormessage)(res, 401, 'message not sent');
                }
                else {
                    return (0, successmessage_1.successmessage)(res, 201, 'message sent', message);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getmessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = yield contact_1.Contact.find();
                if (!message) {
                    return (0, errormessage_1.errormessage)(res, 401, 'no message found');
                }
                else {
                    return (0, successmessage_1.successmessage)(res, 201, `all ${message.length} retrived`, message);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static deletemessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = yield contact_1.Contact.deleteMany();
                if (!message) {
                    return (0, errormessage_1.errormessage)(res, 401, 'no message found');
                }
                else {
                    return (0, successmessage_1.successmessage)(res, 201, `all  deleted`, null);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static geteOnemessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const message = yield contact_1.Contact.findById(id);
                if (!message) {
                    return (0, errormessage_1.errormessage)(res, 401, 'no message found');
                }
                else {
                    return (0, successmessage_1.successmessage)(res, 201, `message on this id ${id} retrived`, message);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static deleteOnemessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const message = yield contact_1.Contact.findByIdAndDelete(id);
                if (!message) {
                    return (0, errormessage_1.errormessage)(res, 401, 'no message found');
                }
                else {
                    return (0, successmessage_1.successmessage)(res, 201, `message on this id ${id} deleted`, null);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.contactController = contactController;
