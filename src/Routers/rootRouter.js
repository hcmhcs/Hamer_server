import express from "express";
import User from "../models/User";

const rootRouter = express.Router();

const testHandler = (req, res) => {
  const data = { message: "안녕 난 nodejs 서버에서 날라왔어" };
  res.json(data);
  console.log("보냈다");
};

const postJoin = async (req, res) => {
  const { name, email, password, password2, nickname, job } = req.body.user;
  const exist = await User.exists({ email });
  console.log(req.body);
  if (exist) {
    return res.json({ message: "이미 존재하는 계정" });
  }
  if (password !== password2) {
    return res.json({ message: "비밀번호가 일치하지 않습니다" });
  }
  try {
    if (job === "") {
      await User.create({ name, email, password, nickname });
    } else {
      await User.create({ name, email, password, nickname, job });
    }
    return res.json({ message: "회원가입성공" });
  } catch (err) {
    return res.json({ message: { err } });
  }
};

rootRouter.get("/", testHandler);

rootRouter.post("/join", postJoin);
export default rootRouter;
