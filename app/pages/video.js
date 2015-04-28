'use strict';

var React = require('react');
var VideoPlayer = require('../components/VideoPlayer').VideoPlayer;


var VideoPage = React.createClass({
    render: function () {
        return (
            React.createElement(VideoPlayer, null)
        )
    }
});

module.exports = VideoPage;
