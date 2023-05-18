import express, { Router } from "express";
import {
  testHandler,
  postJoin,
  postLogin,
  getLogin,
  logout,
  postComparePassword,
} from "../handler/rootHandler";

const rootRouter = express.Router();

rootRouter.post("/logout", logout);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/", testHandler);
rootRouter.post("/join", postJoin);
rootRouter.post("/password", postComparePassword);
export default rootRouter;
