'use strict';

var React = require('react');
var Bootstrap = require('react-bootstrap');

var NavBar = React.createClass({
    render: function () {
        return (
            React.createElement(Bootstrap.Navbar, {brand:'BRAND_GOES_HERE', toggleNavKey:0, fluid:true, inverse:true, style:{'borderRadius':0}},
                React.createElement(Bootstrap.CollapsableNav, {eventKey:0},
                    React.createElement(Bootstrap.Nav, {navbar:true, right:true},
                        React.createElement(Bootstrap.NavItem, {eventKey:1, href:'/'}, 'Home'),
                        React.createElement(Bootstrap.NavItem, {eventKey:2, href:'/location'}, 'Flux Demo'),
                        React.createElement(Bootstrap.NavItem, {eventKey:3, href:'/videos'}, 'React-Youtube'),
                        React.createElement(Bootstrap.NavItem, {eventKey:4, href:'/questions'}, 'Questions')
                    )
                )
            )
        )
    }
});

module.exports.NavBar = NavBar;
