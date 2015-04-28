'use strict';

var altDispatcher = require('../alt');
var LocationActions = require('../actions/locationActions');

function FavoritesStore () {
  this.locations = [];

  this.bindListeners({
    addFavoriteLocation: LocationActions.FAVORITE_LOCATION
  });

  this.exportPublicMethods({
      addFavoriteLocation: this.addFavoriteLocation
  });
};

FavoritesStore.prototype.addFavoriteLocation = function (location) {
  this.locations.push(location);
};

module.exports = altDispatcher.createStore(FavoritesStore, 'FavoritesStore');
