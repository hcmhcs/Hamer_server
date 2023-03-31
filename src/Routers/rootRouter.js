import express, { Router } from "express";
import {
  testHandler,
  postJoin,
  postLogin,
  getLogin,
} from "../handler/rootHandler";

const rootRouter = express.Router();

rootRouter.post("/logout", async (req, res) => {
  req.session.isLogin = false;
  res.send("Logged out");
});
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/", testHandler);

rootRouter.post("/join", postJoin);
export default rootRouter;
