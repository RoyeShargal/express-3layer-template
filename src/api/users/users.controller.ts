import { Request, Response, Router, NextFunction } from "express";

import Controller from "../../utils/interfaces/controller.interface";
import UsersService from "./users.service";
import { logger } from "../../../src/config/logger";

// IUser
export class UsersController implements Controller {
  public path = "/users";
  public router = Router();
  private UsersService = new UsersService();

  constructor() {
    this.initialiseRoutes();
  }
  private initialiseRoutes(): void {
    this.router.get(`${this.path}`, this.getUser);
  }

  private getUser = async (
    req: Request<{}, {}, { _id?: string }>,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { _id } = req.query;
      logger.info(`called getUser controller, with userId ${_id}`);
      const response = await this.UsersService.GetUserById("id");
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  };
}
