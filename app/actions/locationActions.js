'use strict';

var altDispatcher = require ('../alt');
var LocationsFetcher = require ('../utils/locationFetcher');

function LocationActions () {};

LocationActions.prototype.fetchLocations = function (callback) {
    // We dispatch here to clear the store of previous data.
    var self = this;
    self.dispatch();

    LocationsFetcher.fetch()
    .then(function (locations) {
        self.actions.updateLocations(locations, callback);
    })
    .catch(function (errorMessage) {
        self.actions.locationsFailed(errorMessage, callback);
    });
};

LocationActions.prototype.updateLocations = function (locations, callback) {
    this.dispatch(locations);
	
	// If we get a callback fuction, make sure to call it.
	// NOTE: For this example, reate-router's callback function is being passed.
	//	If it is not called by us or them, then app is placed in a hanging state.
	if (typeof callback === 'function') {
		callback();
	}
};

LocationActions.prototype.locationsFailed = function (errorMessage, callback) {
    this.dispatch(errorMessage);
	
	if (typeof callback === 'function') {
		callback();
	}
};

LocationActions.prototype.favoriteLocation = function (locationId, callback) {
    this.dispatch(locationId);
	
	if (typeof callback === 'function') {
		callback();
	}
};


module.exports = altDispatcher.createActions(LocationActions);
