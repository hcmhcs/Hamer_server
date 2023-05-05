import express from "express";
import {
  getBehinds,
  getHistorys,
  createBehind,
  deleteHistory,
} from "../handler/historyHandler";
const historyRouter = express.Router();

historyRouter.get("/admin/:year([0-9]{4})", getBehinds);
historyRouter.get("/:year([0-9]{4})", getHistorys);
historyRouter.post("/create", createBehind);
historyRouter.delete("/:id([0-9a-f]{24})", deleteHistory);
export default historyRouter;
