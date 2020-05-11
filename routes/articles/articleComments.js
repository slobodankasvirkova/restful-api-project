const comments = require('../../src/data/comments.json');

module.exports = (req, res) => {
  const articleId = req.params.id;
  const articleComments = comments.filter(
    comment => comment.articleId === articleId
  );

  articleComments.length !== 0
    ? res.json(articleComments)
    : res.status(404).send('404:Not found!');
};
