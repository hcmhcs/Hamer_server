import Post from "../models/Post";

export const getPost = async (req, res) => {
  const posts = await Post.find({});
  if (!posts) {
    return res.status(404);
  }
  return res.status(200).json(posts);
};

//만약 빈게 들어오면 글생성오류처리해줘야됨
export const createPost = async (req, res) => {
  const { title, context, author } = req.body.post;
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
      await Post.create({ title, context, author });
      return res.status(204).json({ message: "글 생성완료" });
    } catch (err) {
      return res.status(500);
    }
  }
};

export const deletePost = async (req, res) => {
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
