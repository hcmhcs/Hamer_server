import Post from "../models/Post";

export const getPost = async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
};

//만약 빈게 들어오면 글생성오류처리해줘야됨
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
