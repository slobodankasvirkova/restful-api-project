const articles = require('../../src/data/articles.json');

module.exports = (req, res) => {
  const articleId = req.params.id;
  const article = articles.find(article => article.id === articleId);

  article !== undefined
    ? res.json(article)
    : res.status(404).send('404:Not found!');
};
