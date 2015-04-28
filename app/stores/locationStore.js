'use strict';

var altDispatcher = require('../alt');
var LocationActions = require('../actions/locationActions');
var FavoritesStore = require('../stores/favoriteStore');

function LocationStore () {
    // Store state
    this.locations = [];
    this.errorMessage = null;

    // Bind the handler to an action
    this.bindListeners({
        handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
        handleFetchLocations: LocationActions.FETCH_LOCATIONS,
        handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
        setFavorites: LocationActions.FAVORITE_LOCATION
    });

    this.exportPublicMethods({
      getLocation: this.getLocation
    });
};

LocationStore.prototype.handleUpdateLocations = function (locations) {
    this.locations = locations;
    this.errorMessage = null;
};

LocationStore.prototype.handleFetchLocations = function () {
    // Reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.locations = [];
};

LocationStore.prototype.handleLocationsFailed = function (errorMessage) {
    this.errorMessage = errorMessage;
};

LocationStore.prototype.resetAllFavorites = function () {
    this.locations = this.locations.map(function (location) {
        return {
            id: location.id,
            name: location.name,
            has_favorite: false
        };
    });
};

LocationStore.prototype.setFavorites = function (loction) {
    this.waitFor(FavoritesStore);

    var state = FavoritesStore.getState();
    var favoritedLocations = state.locations;

    this.resetAllFavorites();

    var self = this;

    favoritedLocations.forEach(function (location) {
        // Fine each location in the array
        for (var i = 0; i < self.locations.length; ++i) {
            // Set has_favorite to true
            if (self.locations[i].id === location.id) {
                self.locations[i].has_favorite = true;
                break;
            }
        }
    });
};

LocationStore.prototype.getLocation = function (id) {
    var locations = this.getState().locations;
    for (var i = 0; i < locations.length; i += 1) {
      if (locations[i].id === id) {
        return locations[i];
      }
    }

    return null;
};


module.exports = altDispatcher.createStore(LocationStore, 'LocationStore');
