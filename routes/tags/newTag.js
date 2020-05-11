const { writeJsonData, readJsonData } = require('../../src/utils');
module.exports = async (req, res) => {
  const tags = await readJsonData('tags.json');
  const { newTag } = req.body;
  console.log(newTag);
  tags[`${newTag}`] = `${newTag}`;
  res.json({
    newTag,
    message: 'Tag is created'
  });
  await writeJsonData(tags, 'tags.json');
};
