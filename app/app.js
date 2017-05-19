'use strict';
angular.module('MIonic', [
  // load your modules here
  'ngMaterial',
  'main', // starting with the main module
])
.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('indigo')
    .primaryPalette('indigo')
    .accentPalette('pink');

  $mdThemingProvider.theme('lime')
    .primaryPalette('lime')
    .accentPalette('orange')
    .warnPalette('blue');

  // This is the absolutely vital part, without this, changes will not cascade down through the DOM.
  $mdThemingProvider.alwaysWatchTheme(true);
});
