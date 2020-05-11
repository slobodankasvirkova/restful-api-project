const uuid = require('uuid');
const { writeJsonData, readJsonData } = require('../../src/utils');
module.exports = async (req, res) => {
  const { name, avatar, email, username, website, bio } = req.body;
  if (
    !name ||
    name.length < 2 ||
    !avatar ||
    !email ||
    !username ||
    username.length < 5 ||
    !website ||
    !bio ||
    bio.length < 10
  ) {
    throw 'Error:Wrong input';
  }
  const author = {
    id: uuid.v4(),
    name,
    avatar,
    email,
    username,
    website,
    bio
  };
  res.json({
    author,
    message: 'Author is created'
  });

  const authors = await readJsonData('authors.json');
  await writeJsonData([...authors, author], 'authors.json');
};
