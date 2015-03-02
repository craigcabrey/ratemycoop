'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('StandaloneLoginCtrl', function ($scope, User) {
    $scope.loginForm = {
      login: "",
      pass: ""
    }
  });
