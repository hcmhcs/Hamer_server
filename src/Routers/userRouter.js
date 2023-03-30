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

userRouter.delete("/:id([0-9a-f]{24})", getDeleteUser);
// userRouter.get("/delete/:id([1-9a-f]{24})", getDeleteUser);
userRouter.get("/", getUserList);
export default userRouter;
