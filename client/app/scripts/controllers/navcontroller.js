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
          if (value.description && value.description.length >= 100) {
            newVal['description'] = value.description.substr(0, 100) + "...";
          }
          if (value.description === null) { // For when the desciption is null
            newVal['description'] = "";
          }
          if (!newVal.hidden) {
            searchable.push(newVal);
          }
        });

        $("#navSearchInput").search({
          source: searchable,
          onSelect: function (res) {
            $location.path("/company/" + res.name);
            $scope.$apply();
            $scope.searchCompanyFieldNav = '';

          }
        });

      }
    );

    // Navbar search binding
    $scope.searchCompanyFieldNav = '';


    $scope.isHome = $location.path() === '/';
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
      $scope.isHome = $location.path() === '/';
      $scope.searchCompanyField = null;
    });

  });
