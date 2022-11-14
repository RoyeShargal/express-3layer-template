"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("module-alias/register");
const app_1 = __importDefault(require("./app"));
const users_controller_1 = require("./src/api/users/users.controller");
const app = new app_1.default([new users_controller_1.UsersController()], Number(process.env.PORT));
app.listen();
//# sourceMappingURL=server.js.map