'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:ReviewformCtrl
 * @description
 * # ReviewformCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('ReviewformCtrl', function ($scope, Company, Major, City, Perk, PayType, User, $routeParams, $location) {
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
      console.log('ERROR: User must be authenticated');
      $location.path('/login');
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

    $scope.togglePerkAddition = function (perk) {
      if (!perk.isSelected) {
        perk.isSelected = true; //This toggles ui change
        $scope.formData.perks.push(perk.id); // This adds only id, to formData.perks
      } else {
        $scope.$watch(perk, function (test) {
          console.log('in test');
        });
        console.log('unselecting perk');
        perk.isSelected = false; // this toggles ui change
        var i = $scope.formData.perks.indexOf(perk.id); // this finds and removes perk id from perks
        if (i > -1) {
          $scope.formData.perks.splice(i, 1);
        }
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

    /**
     * Actual final SERVICE push to Backend.
     */
    $scope.submitReview = function () {
      $scope.loading.main = true;
      $scope.loading.perks = true;
      console.log("Review is being submitted :) ");
      var pushObject = prepForPush($scope.formData);
      console.log("final submission object is");
      console.log(pushObject);

      Company.reviews.create(
        {id: $scope.company.id},
        pushObject,
        function (success) {
          // TODO handle review creation success
          console.log('success!');

          $scope.loading.main = false;
          $scope.loading.perks = false;
        },
        function (error) {
          console.log('fail');

          // TODO handle review creation error
          $scope.loading.main = false;
          $scope.loading.perks = false;
        }
      );

      //var companyId = $scope.company.id;
      //angular.forEach($scope.formData.perks, function (perk) {
      //  Company.perks.link(
      //    {
      //      id: companyId,
      //      fk: perk.id
      //    }, function (success) {
      //      //TODO on perk relation success
      //    },
      //    function (error) {
      //    }//TODO on perk relation failure}
      //  )
      //});

    };

    /**
     * Prepares the formData parameter object to correct keys in order to push to API
     * @param formData
     */
    function prepForPush(formData) {
      // Validate pay input - grabs the pure currency as a string, else null
      if (formData.pay !== "") {
        var isValidPay = formData.pay.search(/^\$?[\d,]+(\.\d*)?$/) >= 0;
        if (isValidPay) {
          formData.pay = formData.pay.replace(/[^0-9\.]/g, '');
        } else {
          formData.pay = null;
        }
      } else {
        formData.pay = null;
      }

      var pushObj = {
        anonymous: formData.anonymous,
        returnOffer: formData.returnOffer,
        recommend: formData.recommend,
        description: formData.description,
        overallRating: formData.overallRating,
        cultureRating: formData.cultureRating,
        difficultyRating: formData.cultureRating,
        pay: formData.pay,
        userId: formData.userId,
        payTypeId: formData.payTypeId



        //companyId: $scope.company.id,

        //perks: formData.perks,
        //majors: [$('majorSearch').search('get result').id],
        //city: 0//TODO check key names for these
      };

      return pushObj;
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

    // On document ready, wait half a second and to init Semantic UI elements.
    angular.element(document).ready(function () {
      // Delay to wait for angular to
      setTimeout(setupSemantic, 0);
    });

    /**
     * Runs once on document ready. Set up Semantic UI elements
     */
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
        searchFullText: false,
        searchFields: ['title'],
        maxResults: 10
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
