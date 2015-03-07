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
    'lbServices',
    'mgo-angular-wizard',
    'btford.markdown',
    'angularMoment',
    'config'
  ])
  .config(['$routeProvider', '$locationProvider', 'LoopBackResourceProvider', '$httpProvider', 'ENV', function ($routeProvider, $locationProvider, LoopBackResourceProvider, $httpProvider, ENV) {
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
      .when('/company/:companyname/review', {
        templateUrl: 'views/reviewform.html',
        controller: 'ReviewformCtrl'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'StandaloneLoginCtrl'
      })
      .when('/login/:redirect_url', {
        templateUrl: 'views/login.html',
        controller: 'StandaloneLoginCtrl'
      })
      .otherwise({
        redirectTo: '/404',
        templateUrl: '/404.html'
      });

    //$locationProvider.html5Mode({ enabled: true, requireBase: false });
    
    LoopBackResourceProvider.setUrlBase(ENV.apiEndpoint);

    /**
     * Set http interceptor for 40x unauthorized
     */

    $httpProvider.interceptors.push(function ($q, $location) {
      return {
        responseError: function (rejection) {
          if (rejection.status == 401) {
            //TODO: Redirect to login page
          }
          return $q.reject(rejection);
        }
      };
    });
  }]);
