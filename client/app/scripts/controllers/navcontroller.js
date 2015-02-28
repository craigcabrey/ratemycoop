'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:MastercontrollerCtrl
 * @description
 * # MastercontrollerCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('NavCtrl', function ($scope, $location, $rootScope, Company) {
    
    $scope.companies = Company.find({},
      function (success) {// Search trigger
        var searchable = [];
        angular.forEach(success, function (value) {
          var newVal = value;
          newVal['title'] = value.name;
          newVal['url'] = "/#/company/" + value.name;
          searchable.push(newVal);
        });
        $("#navSearchInput").search({
          source: searchable
        });

      }
    );


    $scope.isHome = $location.path() === '/';
    $rootScope.$on("$locationChangeStart",function (event,next,current){
      $scope.isHome = $location.path() === '/';
    });

  });
