import express from "express";
import Post from "../models/Post";
const noticeRouter = express.Router();
const getPost = async (res, req) => {
  const posts = await Post.find({});
  req.json(posts);
};
noticeRouter.get("/", getPost);

const createPost = async (req, res) => {
  const { title, context, author } = req.body.post;
  await Post.create({ title, context, author });

  return res.json({ message: "글 생성완료" });
};

const deletePost = async (req, res) => {
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

noticeRouter.post("/create", createPost);
noticeRouter.delete("/:id([0-9a-f]{24})", deletePost);
export default noticeRouter;
