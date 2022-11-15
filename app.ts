import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import winston from "winston";

import Controller from "./src/utils/interfaces/controller.interface";
import { logger } from "./src/config/logger";

class App {
  public express: Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    // this.initialiseDatabaseConnection();
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
  // configure connection
  // private initialiseDatabaseConnection(): void {
  //   const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
  //   mongoose.connect(
  //     `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`
  //   );
  // }

  public listen(): void {
    this.express.listen(this.port, () => {
      // testScheduledJob.invoke();
      logger.info(`server started at http://localhost:${this.port}`);
      // console.log(`server started at http://localhost:${this.port}`);
    });
  }
}

export default App;
