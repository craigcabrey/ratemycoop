'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:ReviewformCtrl
 * @description
 * # ReviewformCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('ReviewformCtrl', function ($scope, Company, $routeParams) {
    $scope.loading = true;

    /**
     * Get company info on-load
     */
    $scope.company = Company.findOne(
      {
        filter: {
          where: {name: $routeParams.companyname},
          include: ['perks', 'majors', 'reviews', {'locations': 'region'}]
        }
      },
      function (successData) {
        $scope.loading = false;
      }
    );

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

    var pushData = {};

    angular.element(document).ready(function () {
      $('.ui.accordion').accordion();
      $('.ui.selection.dropdown').dropdown();
      $('.rating').rating();
    });

  });
