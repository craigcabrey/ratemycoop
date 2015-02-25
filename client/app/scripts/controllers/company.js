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
          where: {name: $routeParams.companyname}
        }
      },
      function (success_data) {
        //$scope.company['logo_url'] = "/logos/" + success_data.logo;
        $scope.company['logo_url'] = "https://ratemycoop.io/logos/" + success_data.logo;

        console.log(success_data);

      }
    );


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
