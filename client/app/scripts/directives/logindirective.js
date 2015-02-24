'use strict';

/**
 * @ngdoc directive
 * @name ratemycoopApp.directive:loginDirective
 * @description
 * # loginDirective
 */
angular.module('ratemycoopApp')
  .directive('loginDirective', function () {
    return {
      templateUrl: '../../views/loginview.html',
      controller: 'LoginCtrl',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the loginDirective directive');
      }
    };
  });
