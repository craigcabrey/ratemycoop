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
      if ($('#newCompanyForm').form('validate form')) {
        var data = $scope.suggestCompanyEditForm;
        data.loading = true;

        var parsedLogo = checkIfEmpty(data.logo);
        var parsedFacebook = checkIfEmpty(data.facebook);
        var parsedTwitter = checkIfEmpty(data.twitter);
        var parsedLinkedin = checkIfEmpty(data.linkedin);

        Company.create(
          {
            "name": data.name,
            "url": data.url,
            "logo": parsedLogo,
            "facebook": parsedFacebook,
            "twitter": parsedTwitter,
            "linkedin": parsedLinkedin,
            "seekingFulltime": data.seekingFulltime,
            "seekingCoop": data.seekingCoop,
            "description": data.description,
            "minPay": null,
            "maxPay": null
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
      }
    };

    function checkIfEmpty(string) {
      if (string === "") {
        return null;
      } else {
        return string;
      }
    }


    // Semantic Triggers .ready() block.
    $(document).ready(function () {
      $('.ui.checkbox').checkbox();


      $('#newCompanyForm').form(
        {
          name: {
            identifier: 'companyEdit-name',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter a company name.'
              }
            ]
          },
          description: {
            identifier: 'companyEdit-description',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter a company description'
              }
            ]
          },
          site: {
            identifier: 'companyEdit-url',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter a company website'
              }
            ]
          }

        },
        {
          on: 'blur',
          keyboardShortcuts: false
          //inline: true
        }
      )
    });


  });
