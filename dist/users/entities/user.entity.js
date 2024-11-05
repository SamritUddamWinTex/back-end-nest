"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    id: String,
    username: String,
    email: String,
    password: String,
});
//# sourceMappingURL=user.entity.js.map