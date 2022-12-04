import { Request, Response, Router, NextFunction } from "express";

import Controller from "../../utils/interfaces/controller.interface";
import UsersService from "./users.service";
import { logger } from "../../../src/config/logger";
import { SignUpUserDto } from "./dto/SignUpUser.dto";

export class UsersController implements Controller {
  public path = "/users";
  public router = Router();
  private UsersService = new UsersService();

  constructor() {
    this.initialiseRoutes();
  }
  private initialiseRoutes(): void {
    this.router.get(`${this.path}`, this.getUserById);
    this.router.post(`${this.path}/signup`, this.signUpUser);
  }

  private getUserById = async (
    req: Request<{}, {}, { _id?: string }>,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { id } = req.query;
      logger.info(`called getUser controller, with userId ${id}`);
      const response = await this.UsersService.GetUserById(id as string);
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  };

  private signUpUser = async (
    req: Request<{}, {}, SignUpUserDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password } = req.body;
      const response = await this.UsersService.registerUser(email, password);
      logger.info(`called sign up user, body: ${req.body}`);
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  };
}
