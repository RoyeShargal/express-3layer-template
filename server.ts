import "dotenv/config";
import "module-alias/register";

import App from "./app";
import { UsersController } from "./src/api/users/users.controller";

const app = new App([new UsersController()], Number(process.env.PORT));

app.listen();
