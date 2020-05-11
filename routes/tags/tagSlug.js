const tags = require('../../src/data/tags.json');

module.exports = (req, res) => {
  const slug = req.params.slug;
  const result = Object.keys(tags).includes(slug);

  result === true
    ? res.send(tags[slug])
    : res.status(404).send('404:Not found!');
};
