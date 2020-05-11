const articlesRouter = require('express').Router();

const articles = require('./articles');
const articleId = require('./articleId');
const articleComments = require('./articleComments');
const newArticle = require('./newArticle');
const updateArticle = require('./updateArticle');
const deleteArticle = require('./deleteArticle');

articlesRouter.route('/').get(articles).post(newArticle);

articlesRouter
  .route('/:id')
  .get(articleId)
  .post(updateArticle)
  .delete(deleteArticle);

articlesRouter.route('/:id/comments').get(articleComments);

module.exports = articlesRouter;
