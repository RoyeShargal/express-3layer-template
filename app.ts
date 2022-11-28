import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";

import Controller from "./src/utils/interfaces/controller.interface";
import { logger } from "./src/config/logger";

class App {
  public express: Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    this.initialiseDatabaseConnection();
    this.initialiseMiddleware();
    this.initialiseControllers(controllers);
  }

  private initialiseMiddleware(): void {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
  }

  private initialiseControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.express.use("/api", controller.router);
    });
  }

  // configure DB connection
  private initialiseDatabaseConnection(): void {
    const { MONGOOSE_URL } = process.env;
    mongoose.connect(MONGOOSE_URL);
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      logger.info(`server started at http://localhost:${this.port}`);
    });
  }
}

export default App;
