import express from "express";
import {
  getBehinds,
  getHistorys,
  createBehind,
} from "../handler/historyHandler";
const historyRouter = express.Router();

historyRouter.get("/admin", getBehinds);
historyRouter.get("/", getHistorys);
historyRouter.post("/create", createBehind);
export default historyRouter;
