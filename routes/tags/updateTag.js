const { writeJsonData, readJsonData } = require('../../src/utils');
module.exports = async (req, res) => {
  const tags = await readJsonData('tags.json');
  const slug = req.params.slug;
  const result = Object.keys(tags).includes(slug);
  if (result === false) {
    throw 'This tag does not exist';
  }

  const { updatedTag } = req.body;
  tags[`${slug}`] = `${updatedTag}`;

  res.json({
    slug,
    message: 'Tag is updated'
  });

  await writeJsonData(tags, 'tags.json');
};
