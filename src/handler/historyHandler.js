import Behind from "../models/Behind";

export const getBehinds = async (req, res) => {
  const behinds = await Behind.find({ type: "behind" });
  res.json(behinds);
};
export const getHistorys = async (req, res) => {
  const historys = await Behind.find({ type: "history" });
  res.json(historys);
};
export const createBehind = async (req, res) => {
  const { title, context, author, year, type } = req.body.behind;
  await Behind.create({ title, context, author, year, type });

  return res.json({ message: "글 생성완료" });
};
