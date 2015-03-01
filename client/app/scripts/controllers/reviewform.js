'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:ReviewformCtrl
 * @description
 * # ReviewformCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('ReviewformCtrl', function ($scope, Company, Major, City, Perk, PayType, $routeParams) {
    $scope.loading = {
      main: true,
      perks: true
    };

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
      $scope.perkSearchQuery = "";
      perk.isSelected = true;
      console.log(perk);
      $scope.formData.perks.push(perk);
    };

    $scope.unselectPerk = function (perk) {
      console.log($scope.formData.perks.length);
      perk.isSelected = false;
      var i = $scope.formData.perks.indexOf(perk);
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

      perks: [],

      returnOffer: false,
      recommend: false,
      anonymous: false

    };

    $scope.submitReview = function () {
      /* Validation */
      // Pay type validation

      var pushObject = prepForPush($scope.formData);
    };

    function prepForPush(formData) {


      var pushObj = {
        "anonymous": formData.anonymous,
        "returnOffer": formData.returnOffer,
        "recommend": formData.recommend,
        "description": formData.description,
        "pay": 0,
        "id": 0,
        "userId": 0,
        "companyId": 0,
        "payTypeId": 0
      }
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
            $scope.formData.diffi = ratings[2];
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
