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

    $scope.companyFilterQuery = "";
    $scope.filter = {
      rating: false,
      review: false,
      pay: false
    };

    var orderBy = $filter('orderBy');
    $scope.order = function (predicate, reverse) {
      $scope.companies = orderBy($scope.companies, predicate, reverse);
    };


    $scope.companies = Company.find({
        filter: {
          limit: 10,
          include: ['reviews', {'locations': 'region'}]
        }
      },
      function (success) {// Search trigger


        angular.forEach(success, function (company) {
          company['logo_url'] = "https://ratemycoop.io/logos/" + company.logo;
          company.url = "#/company/" + company.name;
          company.feedRating = new Array(Math.round(company.overallRating / 2));

          if (company.description && company.description.length >= 230) {
            company['description'] = company.description.substr(0, 230) + "...";
          }

          if (company.description === null) { // For when the description is null
            company['description'] = "";
          }
        });


      }
    );


  });
