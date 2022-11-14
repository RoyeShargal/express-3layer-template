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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const express_1 = require("express");
const users_service_1 = __importDefault(require("./users.service"));
// IUser
class UsersController {
    constructor() {
        this.path = "/users";
        this.router = (0, express_1.Router)();
        this.UsersService = new users_service_1.default();
        this.getUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const { _id } = req.query;
                const response = yield this.UsersService.GetUserById("id");
                res.send(response);
            }
            catch (err) {
                res.send(err);
            }
        });
        this.initialiseRoutes();
    }
    initialiseRoutes() {
        this.router.get(`${this.path}`, this.getUser);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map