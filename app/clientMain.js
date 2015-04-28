'use strict';

var React = require('react');
var Router = require('react-router');
var Bootstrap = require('react-bootstrap');
var AppRoutes = require('./routes/appRoutes');

// react-dev-tool
window.React = React;
window.ReactBootstrap = Bootstrap;


// Needed for onTouchTap
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var mountNode = document.getElementById("react-main-mount");

Router.run(AppRoutes, Router.HistoryLocation, function (Handler, state) {
	React.render(React.createElement(Handler, null), mountNode);
});
