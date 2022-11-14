"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsersSchema = new mongoose_1.Schema({
    _id: { type: String },
    email: { type: String },
    name: { type: String },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("User", UsersSchema);
//# sourceMappingURL=users.model.js.map