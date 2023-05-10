import Behind from "../models/Behind";

export const getBehinds = async (req, res) => {
  const year = req.params.year;
  if (!year) {
    return res.status(400);
  }
  const behinds = await Behind.find({ type: "behind", year });
  if (!behinds) {
    return res.status(404);
  }
  return res.status(200).json(behinds);
};

export const getHistorys = async (req, res) => {
  const year = req.params.year;
  if (!year) {
    return res.status(400);
  }
  const historys = await Behind.find({ type: "history", year });
  if (!historys) {
    return res.status(404);
  }
  return res.status(200).json(historys);
};

export const createBehind = async (req, res) => {
  const { title, context, author, year, type } = req.body.behind;
  if (title === "") {
    return res
      .status(400)
      .json({ message: "no", why: "제목은 필수입력사항입니다." });
  } else if (context === "") {
    return res
      .status(400)
      .json({ message: "no", why: "내용은 필수입력사항입니다." });
  } else {
    try {
      await Behind.create({ title, context, author, year, type });
      return res.status(204).json({ message: "글 생성완료" });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
};

export const deleteHistory = async (req, res) => {
  const _id = req.params.id;
  if (!_id) {
    return res.status(400);
  }
  try {
    await Behind.deleteOne({ _id });
    console.log("삭제완료");
    return res.status(204).json({ message: "ok" });
  } catch (err) {
    console.log("에러뜸");
    return res.status(500).json({ message: { err } });
  }
};
