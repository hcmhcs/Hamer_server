import User from "../models/User";

export const getUserList = async (req, res) => {
  const users = await User.find({});
  if (users === null) {
    return res.status(404);
  }
  return res.status(200).json(users);
};

export const getUser = async (req, res) => {
  const _id = req.params.id;
  if (_id === null) {
    return res.status(400).json({ message: "no params" });
  }
  try {
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(404).json({ message: "no account" });
    }
    return res.status(200).json({ message: "ok", user });
  } catch (err) {
    console.log("에러");
    return res.status(500).json({ message: { err } });
  }
};

export const getDeleteUser = async (req, res) => {
  console.log("deleteUser get 요청이 옴");
  const _id = req.params.id;
  if (_id === null) {
    return res.status(400);
  }
  try {
    await User.deleteOne({ _id });
    console.log("삭제완료");
    return res.status(204).json({ message: "ok" });
  } catch (err) {
    console.log("에러뜸");
    return res.status(500).json({ message: { err } });
  }
};
export const editUser = async (req, res) => {
  const _id = req.body._id;
  if (_id === null) {
    return res.status(400).json({ message: "no params" });
  }
  try {
    await User.updateMany({ _id }, { $set: req.body.editUser });
    return res.status(204).json({ message: "수정완료!" });
  } catch (err) {
    return res.status(500);
  }
};
