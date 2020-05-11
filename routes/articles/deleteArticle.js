const { writeJsonData, readJsonData } = require('../../src/utils');
module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');
  const comments = await readJsonData('comments.json');
  const id = req.params.id;
  const article = articles.find(article => article.id === id);
  if (!article) {
    throw 'This article does not exist';
  }

  await writeJsonData(
    articles.filter(article => article.id !== id),
    'articles.json'
  );

  await writeJsonData(
    comments.filter(comments => comments.articleId !== id),
    'comments.json'
  );

  res.json({
    article,
    message: 'Article is deleted'
  });
};
