const tagsRouter = require('express').Router();

const tags = require('./tags');
const tagSlug = require('./tagSlug');
const tagArticles = require('./tagArticles');
const newTag = require('./newTag');
const updateTag = require('./updateTag');
const deleteTag = require('./deleteTag');

tagsRouter.route('/').get(tags).post(newTag);

tagsRouter.route('/:slug').get(tagSlug).post(updateTag).delete(deleteTag);

tagsRouter.route('/:slug/articles').get(tagArticles);

module.exports = tagsRouter;
