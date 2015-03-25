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

    /**
     * Pull all companies from API for use in searching. For navbar only.
     * TODO: Tie this to an endpoint for searching companies.
     */
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
          if (newVal.verified) {
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

    // Navbar search model binding
    $scope.searchCompanyFieldNav = '';


    /**
     * This is a way to set a boolean switch for whether we are
     * in the home page or not.
     * Originally created for hiding/showing the navbar
     * @type {boolean}
     */
    $scope.isHome = $location.path() === '/';
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
      $scope.isHome = $location.path() === '/';
      $scope.searchCompanyField = null;
    });

  });
