'use strict';

/**
 * @ngdoc overview
 * @name ratemycoopApp
 * @description
 * # ratemycoopApp
 *
 * Main module of the application.
 */
angular
  .module('ratemycoopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.filter',
    'lbServices'
  ])
  .config(['$routeProvider', '$locationProvider', 'LoopBackResourceProvider', function ($routeProvider, $locationProvider, LoopBackResourceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/company/:companyname', {
        templateUrl: 'views/company.html',
        controller: 'CompanyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    //$locationProvider.html5Mode({ enabled: true, requireBase: false });

    // Set url base
    LoopBackResourceProvider.setUrlBase('https://ratemycoop.io/api');
  }]);
