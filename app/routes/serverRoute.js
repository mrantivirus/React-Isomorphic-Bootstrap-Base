'use strict';

var React = require('react/addons');
var AppRoutes = require('../routes/appRoutes');
var Router = require('react-router');

module.exports = function (app) {

  // Capture all routes here. React-Router handles all the routes in the app.
  // Set all of your 404s there as well.
  // For API routes, set them before calling this file.
  app.get('*', function (req, res) {
    console.log('URL: ' + req.url);

    Router.run(AppRoutes, req.url, function (Handler, state) {
      var content = React.renderToString(React.createElement(Handler, null));
      res.render('index.ejs', {
          reactOutput: content
      }, function (err, html) {
        res.send(html.trim());
      });
    });
  });
};
