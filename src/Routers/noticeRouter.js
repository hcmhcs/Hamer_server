import express from "express";
import Post from "../models/Post";
const noticeRouter = express.Router();
const getPost = async (res, req) => {
  const posts = await Post.find();
  console.log(posts);
  req.json(posts);
};
noticeRouter.get("/", getPost);
export default noticeRouter;
