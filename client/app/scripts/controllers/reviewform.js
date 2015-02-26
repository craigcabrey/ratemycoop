'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:ReviewformCtrl
 * @description
 * # ReviewformCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('ReviewformCtrl', function ($scope) {


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

  });
