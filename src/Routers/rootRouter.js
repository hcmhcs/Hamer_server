import express from "express";
import User from "../models/User";

const rootRouter = express.Router();

const testHandler = (req, res) => {
  const data = { message: "안녕 난 nodejs 서버에서 날라왔어" };
  res.json(data);
  console.log("보냈다");
};
const postLogin = async (req, res) => {
  const { studentNumber, password } = req.body.user;
  const exists = await User.exists({ studentNumber });
  const user = await User.findOne({ studentNumber });
  console.log(user, "ddd");
  if (!exists) {
    return res.json({
      message: "가입되지 않은 학번입니다.",
      isLogin: false,
    });
  } else {
    if (password === user.password) {
      return res.json({ message: "로그인 성공", isLogin: true });
    }
    return res.json({ message: "비밀번호가 틀렸습니다", isLogin: false });
  }
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
  console.log(req.body);
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

    console.log("생성안됨");
    return res.json({ message: "회원가입성공" });
  } catch (err) {
    return res.json({ message: { err } });
  }
};

rootRouter.get("/", testHandler);

rootRouter.post("/login", postLogin);
rootRouter.post("/join", postJoin);
export default rootRouter;
