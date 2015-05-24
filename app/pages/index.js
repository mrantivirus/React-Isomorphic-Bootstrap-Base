'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var NavBar = require('../components/navBar').NavBar;


var Index = React.createClass({
    render: function () {
        return (
            React.createElement('div', null,
                React.createElement(NavBar, null),
                React.createElement('div', {className:'container'},
                    React.createElement('h2', null, 'Home page!'),
                    React.createElement(RouteHandler, {key: 'index'})
                )
            )
        )
    }
});

module.exports = Index;
