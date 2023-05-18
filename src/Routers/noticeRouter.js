import express from "express";
import {
  getNotice,
  createNotice,
  deleteNotice,
} from "../handler/noticeHandler";

const noticeRouter = express.Router();

noticeRouter.get("/", getNotice);
noticeRouter.post("/create", createNotice);
noticeRouter.delete("/:id([0-9a-f]{24})", deleteNotice);

export default noticeRouter;
