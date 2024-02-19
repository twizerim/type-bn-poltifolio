"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errormessage = void 0;
function errormessage(res, status, messg) {
    res.status(status).json({
        message: messg
    });
}
exports.errormessage = errormessage;
