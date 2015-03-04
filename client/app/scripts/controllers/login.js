'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('StandaloneLoginCtrl', function ($scope, $routeParams) {
    $scope.redirectLink = null;
    if ($routeParams.redirect_url) {
      $scope.redirectLink = $routeParams.redirect_url;
    }


  });
