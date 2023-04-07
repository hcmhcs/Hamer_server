import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import rootRouter from "./Routers/rootRouter";
import noticeRouter from "./Routers/noticeRouter";
import userRouter from "./Routers/userRouter";
import historyRouter from "./Routers/historyRouter";
import cors from "cors";

// import session from "express-session";
// import cookieParser from "cookie-parser";
// import MongoStore from "connect-mongo";
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

//세션부분
// app.use(cookieParser);
// app.use(
//   session({
//     secret: "hamer",
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//       mongoUrl: "mongodb://localhost/my-database",
//       ttl: 24 * 60 * 60, // session TTL in seconds
//     }),
//   })
// );

app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/notice", noticeRouter);
app.use("/history", historyRouter);
mongoose.connect("mongodb://127.0.0.1:27017/til", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  pw: process.env.PRIVATE_KEY,
});
const db = mongoose.connection;
db.on("error", (error) => console.log("❌ DB ERROR", error));
db.once("open", () => console.log("Mongodb 연결성공!"));

app.listen(PORT, () => {
  console.log(`${PORT}포트로 서버가 열렸습니다!`);
});
