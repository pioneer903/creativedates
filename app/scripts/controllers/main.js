(function () {
  'use strict';

/**
 * @ngdoc function
 * @name creativedatesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the creativedatesApp
 */
angular.module('creativedatesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
})();