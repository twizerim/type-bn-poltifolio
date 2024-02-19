"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenmessage = void 0;
function tokenmessage(res, status, token, data) {
    res.status(status).json({
        token: token,
        datas: data
    });
}
exports.tokenmessage = tokenmessage;
