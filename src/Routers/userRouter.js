import express from "express";
import {
  getUser,
  getUserList,
  getDeleteUser,
  editUser,
  changeAdmin,
  changeNormal,
  getNormalUserList,
} from "../handler/userHandler";
const userRouter = express.Router();

userRouter.get("/:id([0-9a-f]{24})", getUser);
userRouter.delete("/:id([0-9a-f]{24})", getDeleteUser);
userRouter.get("/", getUserList);
userRouter.get("/normal", getNormalUserList);
userRouter.post("/edit", editUser);
userRouter.get("/chown+/:id([0-9a-f]{24})", changeAdmin);
userRouter.get("/chown-/:id([0-9a-f]{24})", changeNormal);

export default userRouter;
