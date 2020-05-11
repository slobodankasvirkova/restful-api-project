const authors = require('../../src/data/authors.json');

module.exports = (req, res) => {
  const authorId = req.params.id;
  const author = authors.find(author => author.id === authorId);

  author !== undefined
    ? res.json(author)
    : res.status(404).send('404:Not found!');
};
