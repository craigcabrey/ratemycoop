'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('FeedCtrl', function ($scope, $filter, Company) {

    $scope.companies = Company.find({
        filter: {
          include: ['reviews', {'locations': 'region'}]
        }
      },
      function (success) {
        angular.forEach(success, function (company) {
          company['logo_url'] = "https://ratemycoop.io/logos/" + company.logo;
          company.url = "#/company/" + company.name;
          company.feedRating = new Array(Math.round(company.overallRating / 2));
          if (company.maxPay === null) {
            company.filterPay = 0;
          } else {
            company.filterPay = company.maxPay;
          }
          if (company.overallRating === null) {
            company.filterRating = 0;
          } else {
            company.filterRating = company.overallRating;
          }

          if (company.description && company.description.length >= 230) {
            company['description'] = company.description.substr(0, 230) + "...";
          }

          if (company.description === null) { // For when the description is null
            company['description'] = "";
          }
        });
      }
    );

    $scope.companyFilterQuery = "";

    $scope.predicate = 'name';
    $scope.reverse = false;


    $scope.filterCompany = function (by) {
      $scope.predicate = by;
      $scope.reverse = !$scope.reverse
    };


  });
