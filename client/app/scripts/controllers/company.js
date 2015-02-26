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
    $scope.loading = true;

    // Given the route, set the main company stuff
    $scope.company = Company.findOne(
      {
        filter: {
          where: {name: $routeParams.companyname},
          include: ['perks', 'majors', 'reviews', {'locations': 'region'}]
        }
      },
      function (successData) {
        $scope.loading = false;
        onCompanySuccess(successData);
      }
    );

    /**
     * Runs when company gets retrieved successfully
     * @param companyData
     */
    function onCompanySuccess(companyData) {
      $scope.company.overallRating = $scope.company.overallRating / 2;
      $scope.company.difficultyRating = $scope.company.difficultyRating / 2;
      $scope.company.cultureRating = $scope.company.cultureRating / 2;

      $scope.company.recommend = 0;
      $scope.company.returners = 0;
      var reviews = $scope.company.reviews;
      angular.forEach(reviews, function (review) {
        if (review.recommend) {
          $scope.company.recommend++;
        }
        if (review.returnOffer) {
          $scope.company.returners++;
        }
      });


      $scope.company['logo_url'] = "https://ratemycoop.io/logos/" + companyData.logo;
      setUpReviews();
      console.log(companyData);

    }

    function setUpReviews() {
      var ratings = ["overallRating", "difficultyRating", "cultureRating"];

      for (var i = 0; i < ratings.length; i++) {
        var id = ratings[i];
        $('#' + id).rating({
          initialRating: Math.floor($scope.company[id]),
          maxRating: 5,
          interactive: true,
          onRate: function () {
            console.log('GO TO RATE');
          }
        });
      }
    }

    // Semantic Triggers .ready() block.
    $(document).ready(function () {


    });


  });
