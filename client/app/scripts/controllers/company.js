'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('CompanyCtrl', function ($scope, $routeParams, Company, $location, SuggestedEdit) {
    $scope.loading = true;
    $scope.stipendAverage = null;


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
      },
      function () {
        $location.path('/404');
      }
    );

    /**
     * Runs when company gets retrieved successfully
     * @param companyData
     */
    function onCompanySuccess(companyData) {
      setUpRatings();
      setUpStatistics();
      setTimeout(setupMajorsPopups, 500);
      setupModalPreFill(companyData);
      traverseReviews(companyData.reviews);
      setupDisplayPay(companyData.minPay, companyData.maxPay);

      // Logo & Pay setup
      $scope.company['logo_url'] = "https://ratemycoop.io/logos/" + companyData.logo;
    }

    // Pay Rating setup
    $scope.payScale = [15, 20, 31];
    /**
     * Set up ratings and pay scale
     */
    function setUpRatings() {
      // Stars Ratings setup
      $scope.company.overallRating = $scope.company.overallRating / 2;
      $scope.company.difficultyRating = $scope.company.difficultyRating / 2;
      $scope.company.cultureRating = $scope.company.cultureRating / 2;

      var ratings = ["overallRating", "difficultyRating", "cultureRating"];

      for (var i = 0; i < ratings.length; i++) {
        var id = ratings[i];
        $('#' + id).rating({
          initialRating: Math.round($scope.company[id]),
          maxRating: 5,
          interactive: false,
          onRate: function () {
            //$scope.gotoReview();
          }
        });
      }
    }

    /**
     * Sets up the $recommend and $returners variable to be shown in statistics page.
     */
    function setUpStatistics() {
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
    }

    /**
     * activates the popups for the majors displayed.
     */
    function setupMajorsPopups() {
      $('.majorLabel').popup({
        position: 'bottom center',
        inline: true,
        transition: 'vertical flip'
      });
    }

    /**
     * This will set up the `edit company` form
     * @param companyData
     */
    function setupModalPreFill(companyData) {
      var form = $scope.suggestCompanyEditForm;
      form.name = companyData.name;
      form.description = companyData.description;
      form.url = companyData.url;
      form.logo = companyData.logo;
    }

    /**
     * Goes through reviews and sets many $scope variables if necessary
     * @param reviewList
     */
    function traverseReviews(reviewList) {
      $scope.stipendAverage = null;
      var stipendSum = 0;
      var stipendCount = 0;

      angular.forEach(reviewList, function (review) {
        if (review.payTypeId === 3) {
          stipendCount++;
          stipendSum += review.pay;
        }
      });

      if (stipendCount > 0) {
        $scope.stipendAverage = Math.round(stipendSum / stipendCount);
      }
    }

    function setupDisplayPay(min, max) {
      if (min) {
        if (min % 1 !== 0) {
          console.log('yolo');
          $scope.company.minPay = min.toFixed(2);
          console.log($scope.minPay);
        }
      }
      if (max) {
        if (max % 1 !== 0) {
          $scope.company.maxPay = max.toFixed(2);
        }
      }
    }


    $scope.gotoReview = function () {
      var path = "/company/" + $scope.company.name + "/review";
      $location.path(path);
    };

    // Semantic Triggers .ready() block.
    $(document).ready(function () {
      $('.modal').modal();
    });

    $scope.suggestCompanyEditForm = {
      name: "",
      description: "",
      url: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      logo: "",
      loading: false
    };

    $scope.showEditModal = function () {
      $('.modal').modal('show');
    };

    /**
     * Submit edits to the company
     */
    $scope.editModalSubmit = function () {
      $scope.suggestCompanyEditForm.loading = true;

      Company.suggestedEdits.create(
        {id: $scope.company.id},
        {
          name: $scope.suggestCompanyEditForm.name,
          description: $scope.suggestCompanyEditForm.description,
          url: $scope.suggestCompanyEditForm.url,
          twitter: $scope.suggestCompanyEditForm.twitter,
          facebook: $scope.suggestCompanyEditForm.facebook,
          linkedin: $scope.suggestCompanyEditForm.linkedin,
          logo: $scope.suggestCompanyEditForm.logo
        },
        function (success) {
          $('.modal').modal('hide');
          $scope.suggestCompanyEditForm.loading = false;
        },
        function (err) {
          $scope.suggestCompanyEditForm.loading = false;
        }
      );

    };
  })
;
