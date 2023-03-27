import express from "express";
import User from "../models/User";
const userRouter = express.Router();

const getUserList = async (req, res) => {
  console.log("보냇다.");
  const users = await User.find({});
  return res.json(users);
};

userRouter.get("/", getUserList);
export default userRouter;
