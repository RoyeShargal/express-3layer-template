import UsersModel from "./users.model";

class UsersService {
  private users = UsersModel;

  public async GetUserById(_id: string) {
    return { key: "value" };
  }
}

export default UsersService;
