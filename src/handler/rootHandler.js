import User from "../models/User";
import Post from "../models/Post";
export const testHandler = (req, res) => {
  const data = { message: "테스트 메세지 from  Server!" };
  res.status(200).json(data);
};

export const postLogin = async (req, res) => {
  const { studentNumber, password } = req.body.user;
  if (studentNumber === null || password === null) {
    return res.status(400);
  }
  const exists = await User.exists({ studentNumber });
  const user = await User.findOne({ studentNumber });
  if (!exists) {
    return res.status(404).json({
      message: "가입되지 않은 학번입니다.",
    });
  } else {
    if (password === user.password) {
      // req.session.user = user;
      // req.session.isLogin = true;
      // res.cookie("userId", user._id, {
      //   maxAge: 1000 * 60 * 60 * 3,
      //   httpOnly: true,
      // });
      return res.status(200).json({
        message: "로그인 성공",
        isLogin: true,
        _id: user._id,
      });
    }

    return res.status(400).json({ message: "비밀번호가 틀렸습니다" });
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
    return res.status(400).json({ message: "이미 존재하는 계정" });
  }
  if (password !== password2) {
    return res.status(400).json({ message: "비밀번호가 일치하지 않습니다" });
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

    return res.status(204).json({ message: "회원가입성공" });
  } catch (err) {
    return res.status(500).json({ message: { err } });
  }
};

export const logout = async (req, res) => {
  req.session.isLogin = false;
  res.status(204).send("Logged out");
};
