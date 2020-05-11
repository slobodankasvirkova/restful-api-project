const { writeJsonData, readJsonData } = require('../../src/utils');
module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');
  const comments = await readJsonData('comments.json');
  const authors = await readJsonData('authors.json');

  const id = req.params.id;
  const author = authors.find(author => author.id === id);
  if (!author) {
    throw 'This author does not exist';
  }

  await writeJsonData(
    authors.filter(author => author.id !== id),
    'authors.json'
  );

  await writeJsonData(
    comments.filter(comments => comments.userId !== id),
    'comments.json'
  );

  await writeJsonData(
    articles.filter(article => article.authorId !== id),
    'articles.json'
  );

  res.json({
    author,
    message: 'Author is deleted'
  });
};
