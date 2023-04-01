import User from "../models/User";
import Post from "../models/Post";
export const testHandler = (req, res) => {
  const data = { message: "안녕 난 nodejs 서버에서 날라왔어" };
  res.json(data);
};

export const logout = async (req, res) => {
  req.session.isLogin = false;
  res.send("Logged out");
};

export const postLogin = async (req, res) => {
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
      });
    }
    return res.json({ message: "비밀번호가 틀렸습니다" });
  }
};

export const getLogin = async (req, res) => {
  const isLogin = req.session.isLogin;
  const user = req.session.user;
  return res.json({ isLogin, user });
};

export const postJoin = async (req, res) => {
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
        adminStatus: true,
      });
    } else {
      await User.create({
        name,
        email,
        password,
        phoneNumber,
        studentNumber,
        adminStatus: false,
      });
    }

    return res.json({ message: "회원가입성공" });
  } catch (err) {
    return res.json({ message: { err } });
  }
};
