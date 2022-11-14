"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor(controllers, port) {
        this.express = (0, express_1.default)();
        this.port = port;
        // this.initialiseDatabaseConnection();
        this.initialiseMiddleware();
        this.initialiseControllers(controllers);
    }
    initialiseMiddleware() {
        this.express.use((0, helmet_1.default)());
        this.express.use((0, cors_1.default)());
        this.express.use(express_1.default.urlencoded({ extended: true }));
        this.express.use(express_1.default.json());
    }
    initialiseControllers(controllers) {
        controllers.forEach((controller) => {
            this.express.use("/api", controller.router);
        });
    }
    // configure connection
    // private initialiseDatabaseConnection(): void {
    //   const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
    //   mongoose.connect(
    //     `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`
    //   );
    // }
    listen() {
        this.express.listen(this.port, () => {
            // testScheduledJob.invoke();
            console.log(`server started at http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map