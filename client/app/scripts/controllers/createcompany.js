'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:CreatecompanyCtrl
 * @description
 * # CreatecompanyCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('CreatecompanyCtrl', function ($scope, Company, $location) {
    $scope.suggestCompanyEditForm = {
      name: "",
      url: "",
      logo: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      seekingFulltime: false,
      seekingCoop: false,
      description: "",

      loading: false,
      error: false
    };


    $scope.submitNewCompany = function () {
      var data = $scope.suggestCompanyEditForm;
      data.loading = true;
      Company.create(
        {
          "name": data.name,
          "url": data.url,
          "logo": data.logo,
          "facebook": data.facebook,
          "twitter": data.twitter,
          "linkedin": data.linkedin,
          "seekingFulltime": data.seekingFulltime,
          "seekingCoop": data.seekingCoop,
          "description": data.description,
          minPay: null,
          maxPay: null
        },
        function (success) {
          data.loading = false;
          $location.path('/company/' + data.name);
        },
        function (error) {
          data.loading = false;
          data.error = true;
        }
      )
    };


    // Semantic Triggers .ready() block.
    $(document).ready(function () {
      $('.ui.checkbox').checkbox();
    });


  });
