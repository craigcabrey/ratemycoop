'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:MastercontrollerCtrl
 * @description
 * # MastercontrollerCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('NavCtrl', function ($scope, $location) {



    $scope.inHome = function (path) {
      return $location.path() === path;
      console.log('are we home? ' + $scope.inHome);
    }

  });
