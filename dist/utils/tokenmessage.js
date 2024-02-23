"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenmessage = void 0;
function tokenmessage(res, status, token) {
    res.status(status).json({
        token: token,
    });
}
exports.tokenmessage = tokenmessage;
