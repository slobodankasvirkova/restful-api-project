const { writeJsonData, readJsonData } = require('../../src/utils');
module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');
  const tags = await readJsonData('tags.json');

  const slug = req.params.slug;
  const result = Object.keys(tags).includes(slug);
  if (result === false) {
    throw 'This tag does not exist';
  }
  delete tags[`${slug}`];
  await writeJsonData(tags, 'tags.json');

  await writeJsonData(
    articles.map(article => {
      article.tags.filter(tag => tag !== slug);
      return article;
    }),
    'articles.json'
  );

  res.json({
    slug,
    message: 'Tag is deleted'
  });
};
