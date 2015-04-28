'use strict';

var altDispatcher = require ('../alt');
var LocationsFetcher = require ('../utils/locationFetcher');

function LocationActions () {};

LocationActions.prototype.fetchLocations = function () {
    // we dispatch an event here so we can have 'loading' state
    var self = this;
    self.dispatch();

    LocationsFetcher.fetch()
    .then(function (locations) {
        self.actions.updateLocations(locations);
    })
    .catch(function (errorMessage) {
        self.actions.locationsFailed(errorMessage);
    });
};

LocationActions.prototype.updateLocations = function (locations) {
    this.dispatch(locations);
};

LocationActions.prototype.locationsFailed = function (errorMessage) {
    this.dispatch(errorMessage);
};

LocationActions.prototype.favoriteLocation = function (locationId) {
    this.dispatch(locationId);
};


module.exports = altDispatcher.createActions(LocationActions);
