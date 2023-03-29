import express from "express";
import Post from "../models/Post";
const noticeRouter = express.Router();
const getPost = async (res, req) => {
  const posts = await Post.find({});
  console.log(posts);
  req.json(posts);
};
noticeRouter.get("/", getPost);

const createPost = async (req, res) => {
  console.log(req.body);
  const { title, context } = req.body.post;
  console.log(title, context);
  await Post.create({ title, context });

  return res.json({ message: "글 생성완료" });
};
const getDetail = async (req, res) => {
  console.log("디테일나옴");
};
noticeRouter.post("/create", createPost);
noticeRouter.get("/detail/:id([1-9a-f]{24})", getDetail);
export default noticeRouter;
