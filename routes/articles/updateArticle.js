const { writeJsonData, readJsonData } = require('../../src/utils');
module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');
  const id = req.params.id;
  const article = articles.find(article => article.id === id);
  if (!article) {
    throw 'This article does not exist';
  }
  const date = article.date;
  const authorId = article.authorId;
  const { title, summary, body, tags } = req.body;
  if (
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
  const updatedArticle = {
    id,
    authorId,
    title,
    date,
    summary,
    body,
    tags
  };
  res.json({
    article,
    message: 'Article is updated'
  });

  await writeJsonData(
    [...articles.filter(article => article.id !== id), updatedArticle],
    'articles.json'
  );
};
