"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successmessage = void 0;
function successmessage(res, status, messg, data) {
    res.status(status).json({
        message: messg,
        datas: data
    });
}
exports.successmessage = successmessage;
