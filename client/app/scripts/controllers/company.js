'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('CompanyCtrl', function ($scope, $routeParams, $location, Company, User, Review, SuggestedEdit) {
    // Setting visual component models
    $scope.loading = true;
    $scope.stipendAverage = null;


    // Given the route, set the main company information
    $scope.company = Company.findOne(
      {
        filter: {
          where: {name: $routeParams.companyname},
          // Have to make sure we include all company dependies.
          include: ['perks', 'majors', {'reviews': 'likes'}, 'events', {'locations': 'region'}]
        }
      },
      function (successData) {
        $scope.loading = false;
        onCompanySuccess(successData);
      },
      function () {
        // If we can't get the company, redirect to 404
        $location.path('/404');
      }
    );

    /**
     * Quick function check if logged in
     * @returns {boolean}
     */
    $scope.isLoggedIn = function () {
      return User.isAuthenticated();
    };

    /**
     * Runs when company gets retrieved successfully
     * @param companyData
     */
    function onCompanySuccess(companyData) {
      setUpEvents();
      setUpRatings();
      setUpStatistics();
      setTimeout(setupMajorsPopups, 500);
      setupModalPreFill(companyData);
      traverseReviews(companyData.reviews);
      setupDisplayPay(companyData.minPay, companyData.maxPay);
      setupLikes(companyData.reviews);

      // Logo & Pay setup
      $scope.company['logo_url'] = "https://ratemycoop.io/logos/" + companyData.logo;
    }

    /**
     * Goes through events and sets the dates for UI to parse and display
     */
    function setUpEvents() {
      var events = $scope.company.events;
      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        event.startDate = new Date(event.startDate);
        event.endDate = new Date(event.endDate);
      }
    }

    /**
     * Set up ratings and pay scale.
     * This determines the amount of '$' signs to show.
     */
    function setUpRatings() {
      // The split is done here
      $scope.payScale = [15, 20, 31];

      $scope.company.overallRating = $scope.company.overallRating / 2;
      $scope.company.difficultyRating = $scope.company.difficultyRating / 2;
      $scope.company.cultureRating = $scope.company.cultureRating / 2;

      var ratings = ["overallRating", "difficultyRating", "cultureRating"];

      for (var i = 0; i < ratings.length; i++) {
        var id = ratings[i];
        $('#' + id).rating({
          initialRating: Math.round($scope.company[id]),
          maxRating: 5,
          interactive: false
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
        // Count up & calculate stipend pay
        if (review.payTypeId === 3) {
          stipendCount++;
          stipendSum += review.pay;
        }

        // Find out if we set anonymous name or user email
        if (!review.anonymous) {
          getUserNameGivenReview(review);
        }

      });

      if (stipendCount > 0) {
        $scope.stipendAverage = Math.round(stipendSum / stipendCount);
      }
    }

    /**
     * For UI purposes, this function will round the decimal for pay
     * to 2 decimals.
     * Note: Will only round if not a whole number.
     * @param min
     * @param max
     */
    function setupDisplayPay(min, max) {
      if (min) {
        if (min % 1 !== 0) {
          $scope.company.minPay = min.toFixed(2);
        }
      }
      if (max) {
        if (max % 1 !== 0) {
          $scope.company.maxPay = max.toFixed(2);
        }
      }
    }

    /**
     * Traverse through reviews and setup the like settings for each review
     * @param reviews to set up
     */
    function setupLikes(reviews) {
      for (var rIndex in reviews) {
        setupSingleLike($scope.company.reviews[rIndex]);
      }
    }


    /************************************************************************************
     * LIKE FEATURE FUNCTIONS
     ************************************************************************************/
    /**
     * Set up a single like, separate function for callback scope control.
     * @param review to set up
     */
    function setupSingleLike(review) {
      Review.prototype$__count__likes({id: review.id},
        function (data) {
          review.numLikes = data.count;
        },
        function (err) {
          console.error(err);
        });

      Review.prototype$isLikedByUser({id: review.id},
        function (data) {
          review.isLiked = data.isLiked;
        }, function (err) {
          console.error(err);
        });
    }

    /**
     * ACTION called when liking a review.
     * @param rev the review you are liking
     */
    $scope.likeReview = function (rev) {
      Review.prototype$like({id: rev.id},
        function (data) {
          rev.isLiked = data.isLiked;
          Review.prototype$__count__likes({id: rev.id},
            function (data) {
              rev.numLikes = data.count;
            },
            function (err) {
              console.error(err);
            });
        },
        function (err) {
          console.error(err);
        })
    };

    /**
     * This is for getting user info
     * @param review - the review object which is being checked for users
     */
    function getUserNameGivenReview(review) {
      User.findOne(
        {
          filter: {
            where: {id: review.userId}
          }
        },
        function (user) {
          review.reviewerName = user.email;
        },
        function () {
          review.reviewerName = "Anonymous Hero";
        }
      );
    }


    $scope.gotoReview = function () {
      if (User.isAuthenticated()) {
        var path = "/company/" + $scope.company.name + "/review";
        $location.path(path);
      } else {
        $scope.showLoginPleaModal();
      }
    };

    /**
     * Simple function to show modal that says 'please log in'.
     */
    $scope.showLoginPleaModal = function () {
      $('#notLoggedInModal').modal('show')
    };


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
      $('#companyEditModal').modal('show');
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
          $scope.suggestCompanyEditForm.loading = false;
          $('#companyEditModal').modal('hide');
        },
        function (err) {
          $scope.suggestCompanyEditForm.loading = false;
        }
      );

    };


    // Semantic Triggers
    $(document).ready(function () {
      $('#eventsAccordion').accordion();
    });
  })
;
