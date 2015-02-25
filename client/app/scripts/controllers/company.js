'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('CompanyCtrl', function ($scope, $routeParams, Company) {

    // Given the route, set the main company stuff
    $scope.company = Company.findOne(
      {
        filter: {
          where: {name: $routeParams.companyname},
          include: ['perks']
        }
      },
      function (successData) {
        onCompanySuccess(successData);
      }
    );

    /**
     * Runs when company gets retrieved successfully
     * @param companyData
     */
    function onCompanySuccess(companyData) {
      $scope.company['logo_url'] = "https://ratemycoop.io/logos/" + companyData.logo;
      console.log(companyData);

    }


    // Semantic Triggers .ready() block.
    $(document).ready(function () {

      var ratingIDs = ["#rating", "#overallRating", "#difficultyRating", "#cultureRating"];
      $("#rating").rating();

      for (var i = 0; i < ratingIDs.length; i++) {
        var id = ratingIDs[i];
        $(id).rating({
          maxRating: 5
        });
        $(id).rating('disable');
      }
    });


  });
