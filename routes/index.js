const routes = require('express').Router();
const articles = require('./articles');
const authors = require('./authors');
const tags = require('./tags');

routes.use('/articles', articles);

routes.use('/authors', authors);

routes.use('/tags', tags);

routes.get('/', (req, res) => {
  res.json({ message: 'Connected!' });
});

routes.post('/', (req, res) => {
  console.log(req.body);
  res.status(202).json({ message: 'restful blog' });
});

module.exports = routes;
