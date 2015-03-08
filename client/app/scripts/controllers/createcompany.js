'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:CreatecompanyCtrl
 * @description
 * # CreatecompanyCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('CreatecompanyCtrl', function ($scope, Company) {
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

      loading: false
    };


    $scope.submitNewCompany = function () {
      var data = $scope.suggestCompanyEditForm;
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
          "description": data.description
        },
        function (success) {
          console.log('success');
        },
        function (error) {
          console.log('error');
        }
      )

    };


    // Semantic Triggers .ready() block.
    $(document).ready(function () {
      $('.ui.checkbox').checkbox();
    });


  });
