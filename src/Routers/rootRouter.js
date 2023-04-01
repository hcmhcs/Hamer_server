import express, { Router } from "express";
import {
  testHandler,
  postJoin,
  postLogin,
  getLogin,
  logout,
} from "../handler/rootHandler";

const rootRouter = express.Router();

rootRouter.post("/logout", logout);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/", testHandler);
rootRouter.post("/join", postJoin);
export default rootRouter;
