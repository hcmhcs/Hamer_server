import express from "express";
import { getPost, createPost, deletePost } from "../handler/noticeHandler";

const noticeRouter = express.Router();

noticeRouter.get("/", getPost);
noticeRouter.post("/create", createPost);
noticeRouter.delete("/:id([0-9a-f]{24})", deletePost);

export default noticeRouter;
