/* global browser */
'use strict';

module.exports = function() {
  this.World = function World(done) {

    this.clearLocalStorage = function() {
      browser.executeScript('localStorage.clear();');
    };

    done(); // tell Cucumber we're finished and to use 'this' as the world instance
  };
};