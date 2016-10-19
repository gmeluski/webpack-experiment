const routes = require('express').Router();

routes.get('/path', function(req, res) {
  res.send('your app exists');
});

module.exports = routes;
