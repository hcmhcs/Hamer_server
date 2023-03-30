import express, { Router } from "express";
import User from "../models/User";

const rootRouter = express.Router();

const testHandler = (req, res) => {
  const data = { message: "안녕 난 nodejs 서버에서 날라왔어" };
  res.json(data);
};
const postLogin = async (req, res) => {
  const { studentNumber, password } = req.body.user;
  const exists = await User.exists({ studentNumber });
  const user = await User.findOne({ studentNumber });
  if (!exists) {
    return res.json({
      message: "가입되지 않은 학번입니다.",
    });
  } else {
    if (password === user.password) {
      return res.json({
        message: "로그인 성공",
        isLogin: true,
        _id: user._id,
        name: user.name,
      });
    }
    return res.json({ message: "비밀번호가 틀렸습니다" });
  }
};
const getLogin = async (req, res) => {
  const isLogin = req.session.isLogin;
  const user = req.session.user;
  return res.json({ isLogin, user });
};
const postJoin = async (req, res) => {
  const {
    name,
    email,
    password,
    password2,
    phoneNumber,
    studentNumber,
    adminStatus,
  } = req.body.user;
  const exist = await User.exists({ email });
  if (exist) {
    return res.json({ message: "이미 존재하는 계정" });
  }
  if (password !== password2) {
    return res.json({ message: "비밀번호가 일치하지 않습니다" });
  }
  try {
    if (adminStatus == "임원") {
      await User.create({
        name,
        email,
        password,
        phoneNumber,
        studentNumber,
        adminStatus: "active",
      });
    } else {
      await User.create({
        name,
        email,
        password,
        phoneNumber,
        studentNumber,
        adminStatus: "inactive",
      });
    }

    return res.json({ message: "회원가입성공" });
  } catch (err) {
    return res.json({ message: { err } });
  }
};
rootRouter.post("/logout", async (req, res) => {
  req.session.isLogin = false;
  res.send("Logged out");
});
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/", testHandler);

rootRouter.post("/join", postJoin);
export default rootRouter;
