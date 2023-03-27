import express from "express";
import User from "../models/User";
const userRouter = express.Router();

userRouter.route("/").get(async (req, res) => {
  const users = await User.find();
  req.json(users);
});

const getUserList = async (req, res) => {
  console.log("보냇다.");
  const users = await User.find({});
  return res.json(users);
};

userRouter.get("/admin", getUserList);
export default userRouter;
