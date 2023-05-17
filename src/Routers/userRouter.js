import express from "express";
import {
  getUser,
  getUserList,
  getDeleteUser,
  editUser,
} from "../handler/userHandler";
const userRouter = express.Router();

userRouter.get("/:id([0-9a-f]{24})", getUser);
userRouter.delete("/:id([0-9a-f]{24})", getDeleteUser);
userRouter.get("/", getUserList);
userRouter.post("/edit", editUser);

export default userRouter;
