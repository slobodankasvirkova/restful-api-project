const authorsRouter = require('express').Router();

const authors = require('./authors');
const authorId = require('./authorId');
const authorArticles = require('./authorArticles');
const newAuthor = require('./newAuthor');
const updateAuthor = require('./updateAuthor');
const deleteAuthor = require('./deleteAuthor');

authorsRouter.route('/').get(authors).post(newAuthor);

authorsRouter
  .route('/:id')
  .get(authorId)
  .post(updateAuthor)
  .delete(deleteAuthor);

authorsRouter.route('/:id/articles').get(authorArticles);

module.exports = authorsRouter;
