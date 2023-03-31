import User from "../models/User";

export const getUserList = async (req, res) => {
  const users = await User.find({});
  return res.json(users);
};

export const getDeleteUser = async (req, res) => {
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

export const getUser = async (req, res) => {
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
