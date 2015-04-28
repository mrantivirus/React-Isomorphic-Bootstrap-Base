'use strict';

var mockData = require('../data/fakeData').FakeData;

var LocationsFetcher = {
    fetch: function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(mockData);
            }, 250);
        });
    }
};

module.exports = LocationsFetcher;
