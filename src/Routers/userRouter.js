import express from "express";
import User from "../models/User";
const userRouter = express.Router();

const getUserList = async (req, res) => {
  const users = await User.find({});
  return res.json(users);
};
const getDeleteUser = async (req, res) => {
  console.log("deleteUser get 요청이 옴");
  const _id = req.params.id;
  console.log(_id);
  try {
    await User.deleteOne({ _id });
    console.log("삭제완료");
    return res.json({ message: "ok" });
  } catch (err) {
    console.log("에러뜸");
    return res.json({ message: { err } });
  }
};
const getUser = async (req, res) => {
  const _id = req.params.id;
  if (_id === null) {
    return res.json({ message: "no params" });
  }
  try {
    const user = await User.findOne({ _id });
    return res.json({ message: "ok", user });
  } catch (err) {
    console.log("에러");
    return res.json({ message: { err } });
  }
  console.log(유저값);
};
userRouter.get("/:id([0-9a-f]{24})", getUser);
userRouter.delete("/:id([0-9a-f]{24})", getDeleteUser);
// userRouter.get("/delete/:id([1-9a-f]{24})", getDeleteUser);
userRouter.get("/", getUserList);
export default userRouter;
