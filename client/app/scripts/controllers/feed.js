'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('FeedCtrl', function ($scope, Company) {

    $scope.companies = Company.find({
        filter: {
          limit: 10,
          include: ['reviews', {'locations': 'region'}]
        }
      },
      function (success) {// Search trigger


        angular.forEach(success, function (company) {
          company['logo_url'] = "https://ratemycoop.io/logos/" + company.logo;
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
