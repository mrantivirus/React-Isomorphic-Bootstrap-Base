'use strict';

var React = require('react');
var LocationStore = require('../stores/locationStore');
var FavoriteStore = require('../stores/favoriteStore');
var LocationActions = require('../actions/locationActions');

var LocationPage = React.createClass({
    getStoreState: function () {
        return {
            locations: LocationStore.getState(),
            favorites: FavoriteStore.getState()
        }
    },
    getInitialState: function () {
        return this.getStoreState();
    },
    componentDidMount: function () {
        FavoriteStore.listen(this.onChange);
        LocationStore.listen(this.onChange);
        LocationActions.fetchLocations();
    },
    componentWillUnmount: function () {
        LocationStore.unlisten(this.onChange);
        FavoriteStore.unlisten(this.onChange);
    },
    onChange: function () {
        this.setState(this.getStoreState());
    },
    addFavorite: function (event) {
        var location = LocationStore.getLocation(Number(event.target.getAttribute('id')));
        LocationActions.favoriteLocation(location);
    },
    render: function () {
        var self = this;

        if (self.state.locations.errorMessage) {
            return (
                React.createElement('div', null, self.state.locations.errorMessage)
            )
        }

        if (!self.state.locations.locations.length) {
            return (
                React.createElement('div', null,
                    React.createElement('img', {src:'/images/loading.gif'}))
            )
        }

        var locations = self.state.locations.locations.map(function (location) {
            var favButton = (
                React.createElement('button', {onClick:self.addFavorite, id:location.id}, 'Favorite')
            );

            if (location.has_favorite) {
                return (
                    React.createElement('li', {key:location.id}, location.name + ' <3')
                )
            } else {
                return (
                    React.createElement('li', {key:location.id},
                        React.createElement('div', null, location.name),
                        favButton)
                )
            }
        });

        var favorites = self.state.favorites.locations.map(function (location) {
            return (
                React.createElement('li', {key:location.id}, location.name)
            );
        });

        return (
            React.createElement('div', {className:'row'},
                React.createElement('div', {className:'col-xs-6'},
                    React.createElement('h1', null, 'Locations'),
                    React.createElement('ul', null, locations)),
                React.createElement('div', {className:'col-xs-6'},
                    React.createElement('h1', null, 'Favorites'),
                    React.createElement('ul', null, favorites)))
        );
    }
});

module.exports = LocationPage;
