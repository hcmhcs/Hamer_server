import Post from "../models/Post";

export const getPost = async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
};

export const createPost = async (req, res) => {
  const { title, context, author } = req.body.post;
  await Post.create({ title, context, author });

  return res.json({ message: "글 생성완료" });
};

export const deletePost = async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  try {
    await Post.deleteOne({ _id });
    console.log("삭제완료");
    return res.json({ message: "ok" });
  } catch (err) {
    console.log("에러뜸");
    return res.json({ message: { err } });
  }
};
