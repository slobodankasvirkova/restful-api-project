const { writeJsonData, readJsonData } = require('../../src/utils');
module.exports = async (req, res) => {
  const authors = await readJsonData('authors.json');
  const id = req.params.id;
  const author = authors.find(author => author.id === id);
  if (!author) {
    throw 'This author does not exist';
  }

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
  const updatedAuthor = {
    id,
    name,
    avatar,
    email,
    username,
    website,
    bio
  };
  res.json({
    author,
    message: 'Author is updated'
  });

  await writeJsonData(
    [...authors.filter(author => author.id !== id), updatedAuthor],
    'authors.json'
  );
};
