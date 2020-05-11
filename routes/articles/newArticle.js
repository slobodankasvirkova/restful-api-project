const uuid = require('uuid');
const { writeJsonData, readJsonData } = require('../../src/utils');
module.exports = async (req, res) => {
  const { authorId, title, summary, body, tags } = req.body;
  if (
    !authorId ||
    authorId.length < 5 ||
    !title ||
    title.length < 10 ||
    !summary ||
    summary.length < 20 ||
    !body ||
    body.length < 30 ||
    !tags ||
    tags.length === 0
  ) {
    throw 'Error:Wrong input';
  }
  const article = {
    id: uuid.v4(),
    authorId,
    title,
    date: new Date(Date.now()),
    summary,
    body,
    tags
  };
  res.json({
    article,
    message: 'Article is created'
  });

  const articles = await readJsonData('articles.json');
  await writeJsonData([...articles, article], 'articles.json');
};
