const authors = require('../../src/data/authors.json');

module.exports = (req, res) => {
  const { page = 0 } = req.query;
  const AUTHORS_PER_PAGE = 5;
  res.json(
    authors.slice(+page * AUTHORS_PER_PAGE, AUTHORS_PER_PAGE * (+page + 1))
  );
};
