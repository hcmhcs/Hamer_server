import express from "express";
import {
  getFreeboard,
  createFreeboard,
  deleteFreeboard,
} from "../handler/freeboardHandler";
const freeboardRouter = express.Router();

freeboardRouter.get("/", getFreeboard);
freeboardRouter.post("/create", createFreeboard);
freeboardRouter.delete("/:id([0-9a-f]{24})", deleteFreeboard);

export default freeboardRouter;
