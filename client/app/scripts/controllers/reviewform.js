'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:ReviewformCtrl
 * @description
 * # ReviewformCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('ReviewformCtrl', function ($scope, Company, Major, City, Perk, PayType, User, $routeParams) {
    $scope.loading = {
      main: true, // Promise, must be turned to false somewhere
      perks: true // Promise, must be turned to false somewhere
    };


    /**
     * Initialize Session
     */
    if (User.isAuthenticated()) {
      $scope.user = User.getCurrent(
        function (success) {
          $scope.formData.userId = success.id;
        }
      );
    } else {
      // TODO: Must handle unauthenticated and redirect to login screen.
      console.log('ERROR: User must be authenticated');
      $scope.user = null;
    }

    /**
     * Used if we want to fetch for pay types, as opposed to using just
     * $scope.payTypes
     */
    $scope.fetchedPayTypes = PayType.find({},
      function (success) {
      });

    $scope.payTypes = [{id: 1, name: "Hourly"}, {id: 2, name: "Salary"}, {id: 3, name: "Stipend"}];

    /**
     * Get company info on-load
     */
    $scope.company = Company.findOne({
        filter: {
          where: {name: $routeParams.companyname},
          include: ['perks', 'majors', 'reviews', {'locations': 'region'}]
        }
      },
      function (successData) {
        $scope.loading.main = false;
      }
    );

    /**
     * Get major info on-load
     */
    $scope.majors = Major.find({},
      function (successData) {
        angular.forEach(successData, function (result) {
          result.title = result.name;
          result.description = result.code;
        });

        $('#majorSearch').search({
          source: $scope.majors,
          maxResults: 4,
          searchFields: ['code', 'name']
        })
      }
    );


    $scope.allPerks = Perk.find({},
      function (successData) {
        angular.forEach(successData, function (value) {
          value['isSelected'] = false;
        });
        $scope.loading.perks = false;
        // Success allperks
      }
    );

    $scope.addPerk = function (perk) {
      perk.isSelected = true; //This toggles ui change
      $scope.formData.perks.push(perk.id); // This adds only id, to formData.perks
    };

    $scope.unselectPerk = function (perk) {
      perk.isSelected = false; // this toggles ui change
      var i = $scope.formData.perks.indexOf(perk.id); // this finds and removes perk id from perks
      if (i > -1) {
        $scope.formData.perks.splice(i, 1);
      }


    };

    $scope.printFormData = function () {
      console.log($scope.formData);
    };


    $scope.formData = {
      overallRating: 0,
      cultureRating: 0,
      difficultyRating: 0,

      description: "",

      pay: "",
      payTypeId: $scope.payTypes[0].id,

      //userId: $scope.user.id == set when async call to USER returns

      perks: [],

      returnOffer: false,
      recommend: false,
      anonymous: false

    };

    $scope.submitReview = function () {
      console.log("Review is being submitted :) ");
      var pushObject = prepForPush($scope.formData);
    };

    function prepForPush(formData) {
      // Validate pay input:
      var isValidPay = formData.pay.search(/^\$?[\d,]+(\.\d*)?$/) >= 0;
      if (isValidPay) {
        formData.pay = formData.pay.replace(/[^0-9\.]/g, '');
      } else {
        formData.pay = null;
      }

      var pushObj = {
        anonymous: formData.anonymous,
        returnOffer: formData.returnOffer,
        recommend: formData.recommend,
        description: formData.description,
        userId: formData.userId,
        companyId: $scope.company.id,
        payTypeId: formData.payTypeId,
        pay: formData.pay,

        perks: formData.perks,
        majors: [$('majorSearch').search('get result').id],
        city: 0//TODO check key names for these
      };

      console.log('Ready for push!!');
      console.log(pushObj);
    }

    /**
     * Wizard variables.
     * @type {{currStep: string, s1: string, s2: string, s3: string}}
     */
    $scope.wizard = {
      currStep: "wizardStepOne",
      s1: "wizardStepOne",
      s2: "wizardStepTwo",
      s3: "wizardStepThree"
    };


    angular.element(document).ready(function () {
      setTimeout(setupSemantic, 400);
    });

    function setupSemantic() {
      $('.ui.accordion').accordion();
      $('.ui.selection.dropdown').dropdown();
      $('#payType').dropdown();
      $('.rating').rating({
        /* see http://bit.ly/1M0OaL9 of why we need to do this */
        onRate: function (val) {
          $scope.$apply(function () {
            var ratings = $('.rating').rating('get rating');
            $scope.formData.overallRating = ratings[0];
            $scope.formData.cultureRating = ratings[1];
            $scope.formData.difficultyRating = ratings[2];
          });
        }
      });
      $('#privacyCheckbox').checkbox({
        onChange: function () {
          /* see http://bit.ly/1M0OaL9 of why we need to do this */
          $scope.$apply(function () {
            $scope.formData.anonymous = !$scope.formData.anonymous;
          });
        }
      });
      $('#returnOfferCheckbox').checkbox({
        onChange: function () {
          /* see http://bit.ly/1M0OaL9 of why we need to do this */
          $scope.$apply(function () {
            $scope.formData.returnOffer = !$scope.formData.returnOffer;
          });
        }
      });
      $('#recommendCheckbox').checkbox({
        onChange: function () {
          /* see http://bit.ly/1M0OaL9 of why we need to do this */
          $scope.$apply(function () {
            $scope.formData.recommend = !$scope.formData.recommend;
          });
        }
      });


      $('#locationSearch').search({
        apiSettings: {
          //TODO: not hardcode url, use another system for searching
          url: "https://ratemycoop.io/api/v1/Cities/search?query={query}"
        },
        searchFields: ['name']

      });


      $('#reviewForm').form(
        {
          major: {
            identifier: 'majorSearchInput',
            rules: [{
              type: 'empty',
              prompt: 'Please enter your major'
            }]
          },
          city: {
            identifier: 'locationSearchInput',
            rules: [{
              type: 'empty',
              prompt: 'Please enter your major'
            }]
          },
          pay: {
            identifier: 'payInput',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter a valid pay'
              },
              {
                type: 'length[2]'
              }
            ]
          },
          payType: {
            identifier: 'payTypeInput',
            prompt: 'prompt'
          }
        },
        {
          on: 'blur'
        }
      );

    }


  });
