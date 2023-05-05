import Behind from "../models/Behind";

export const getBehinds = async (req, res) => {
  const year = req.params.year;
  const behinds = await Behind.find({ type: "behind", year });
  res.json(behinds);
};
export const getHistorys = async (req, res) => {
  const year = req.params.year;
  const historys = await Behind.find({ type: "history", year });
  res.json(historys);
};
export const createBehind = async (req, res) => {
  const { title, context, author, year, type } = req.body.behind;
  await Behind.create({ title, context, author, year, type });

  return res.json({ message: "글 생성완료" });
};
export const deleteHistory = async (req, res) => {
  const _id = req.params.id;
  try {
    await Behind.deleteOne({ _id });
    console.log("삭제완료");
    return res.json({ message: "ok" });
  } catch (err) {
    console.log("에러뜸");
    return res.json({ message: { err } });
  }
};
