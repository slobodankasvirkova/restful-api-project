const tags = require('../../src/data/tags.json');

module.exports = (req, res) => {
  res.json(tags);
};
