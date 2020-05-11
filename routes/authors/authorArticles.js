const articles = require('../../src/data/articles.json');

module.exports = (req, res) => {
  const authorId = req.params.id;
  const authorArticles = articles.filter(
    article => article.authorId === authorId
  );

  authorArticles.length !== 0
    ? res.json(authorArticles)
    : res.status(404).send('Erorr:Not found!');
};
