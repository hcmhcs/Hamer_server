import Post from "../models/Post";

export const getFreeboard = async (req, res) => {
  const posts = await Post.find({ type: "freeboard" });
  if (!posts) {
    return res.status(404);
  }
  return res.status(200).json(posts);
};
export const createFreeboard = async (req, res) => {
  const { title, context, author, type } = req.body.post;
  if (title === "") {
    return res
      .status(400)
      .json({ message: "no", why: "제목은 필수입력사항입니다." });
  } else if (context === "") {
    return res
      .status(400)
      .json({ message: "no", why: "내용은 필수입력사항입니다." });
  } else {
    try {
      await Post.create({ title, context, author, type });
      return res.status(204).json({ message: "글 생성완료" });
    } catch (err) {
      return res.status(500);
    }
  }
};
export const deleteFreeboard = async (req, res) => {
  const _id = req.params.id;
  if (!_id) {
    return res.status(400);
  }
  try {
    await Post.deleteOne({ _id });
    console.log("삭제완료");
    return res.status(204).json({ message: "ok" });
  } catch (err) {
    console.log("에러뜸");
    return res.status(500).json({ message: { err } });
  }
};
