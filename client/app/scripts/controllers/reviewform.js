'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:ReviewformCtrl
 * @description
 * # ReviewformCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('ReviewformCtrl', function ($scope, Company, Major, City, Perk, $routeParams) {
    $scope.loading = {
      main: true,
      perks: true
    };

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
          searchFields: ['code', 'name'],

        })
      }
    );


    $scope.allPerks = Perk.find({},
      function (successData) {
        console.log(successData);
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

    $scope.cities = [];


    $scope.searchCity = function (query) {
      $scope.cities = City.search({query: query},
        function (successData) {
          console.log("seems you searched something");
        }
      );
    };

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


    $scope.formData = {
      overallRating: 0,
      difficultyRating: 0,
      cultureRating: 0,

      descriptionGood: "",
      descriptionBad: "",
      descriptionOverall: "",

      payTypes: ['Hourly', 'Salary', 'Stipend'],
      perks: [],

      returnOffer: false,
      recommend: false,
      anonymous: false

    };

    angular.element(document).ready(function () {
      setTimeout(setupSemantic, 1000);
    });

    function setupSemantic() {
      $('.ui.accordion').accordion();
      $('.ui.selection.dropdown').dropdown();
      $('.ui.dropdown').dropdown();
      $('.rating').rating();
      $('.ui.checkbox').checkbox();
      $('#locationSearch').search({
        apiSettings: {
          url: "https://ratemycoop.io/api/Cities/search?query={query}"
        },
        searchFields: ['name']

      });

    }


  });
