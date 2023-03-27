import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import rootRouter from "./Routers/rootRouter";
import noticeRouter from "./Routers/noticeRouter";
import userRouter from "./Routers/userRouter";
import cors from "cors";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/notice", noticeRouter);

mongoose.connect("mongodb://127.0.0.1:27017/til", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log("❌ DB ERROR", error));
db.once("open", () => console.log("Mongodb 연결성공!"));

app.listen(PORT, () => {
  console.log(`${PORT}포트로 서버가 열렸습니다!`);
});
