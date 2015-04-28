'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


// Require all pages that will be routed to.
var IndexPage = require('../pages/index');
var VideoPage = require('../pages/video');
var QuestionPage = require('../pages/question');
var LocationPage = require('../pages/location');

var routes = (
    React.createElement(Route, {name: 'app', handler: IndexPage, path: '/'},
        React.createElement(Route, {name: 'videos', handler: VideoPage}),
        React.createElement(Route, {name: 'location', handler: LocationPage}),
        React.createElement(Route, {name: 'questions', handler: QuestionPage}))
);


module.exports = routes;
