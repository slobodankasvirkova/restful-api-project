const articles = require('../../src/data/articles.json');
const tags = require('../../src/data/tags.json');

module.exports = (req, res) => {
  const { page = 0 } = req.params;
  const ARTICLES_PER_PAGE = 3;
  const slug = req.params.slug;
  const tagArticles = articles.filter(article => article.tags.includes(slug));

  tagArticles.length !== 0
    ? res.json(
        tagArticles.slice(
          +page * ARTICLES_PER_PAGE,
          ARTICLES_PER_PAGE * (+page + 1)
        )
      )
    : res.status(404).send('404:Not Found!');
};
