import { Schema, model } from "mongoose";
import EverythingArticlesI from "./users.interface";

const UsersSchema = new Schema(
  {
    _id: { type: String },
    email: { type: String },
    name: { type: String },
  },
  { timestamps: true }
);

export default model<EverythingArticlesI>("User", UsersSchema);
