var React = require('react');
var YouTube = require('react-youtube');

var VideoPlayer = React.createClass({
    componentDidMount: function () {
        console.log('Video player is mounted.');
    },

    render: function () {
        var options = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        return (
            React.createElement(YouTube, {
                url: 'http://www.youtube.com/watch?v=2g811Eo7K8U',
                opts: options,
                onPlay: function () {
                    console.log('Video is now playing.')
                }
            })
        )
    }
});

exports.VideoPlayer = VideoPlayer;
