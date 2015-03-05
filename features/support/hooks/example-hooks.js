'use strict';

module.exports = function myHooks() {

  // Tagged hook
  this.Before('@smoke', function(callback) {
    console.log('** BEFORE HOOK for tests tagged as a smoke test.');

    callback();
  });
};