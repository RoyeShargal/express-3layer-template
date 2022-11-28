import "dotenv/config";
import "module-alias/register";
import mongoose from "mongoose";

import App from "./app";
import { UsersController } from "./src/api/users/users.controller";

const app = new App([new UsersController()], Number(process.env.PORT));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected successfully");
});

app.listen();
