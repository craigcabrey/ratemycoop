'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('MainCtrl', ['$scope', 'Company', '$location', function ($scope, Company, $location) {

    // OMG API TO ACCESS STUFF SO EASY
    $scope.companies = Company.find({},
      function (success) {// Search trigger
        var searchable = [];
        angular.forEach(success, function (value) {
          var newVal = value;
          newVal['title'] = value.name;
          newVal['url'] = "/#/company/" + value.name;
          if (value.description && value.description.length >= 230) {
            newVal['description'] = value.description.substr(0, 230) + "...";
          }
          if (value.description === null) { // For when the desciption is null
            newVal['description'] = "";
          }
          searchable.push(newVal);
        });
        $("#searchInput").search({
          source: searchable,
          onSelect: function (result, res) {
            goToCompany(result.name);
          }
        });

      }
    );


    /**
     * Searching Functionality
     */
    $scope.searchCompanyField = '';
    $scope.handleSearchChange = function () {
      if ($scope.searchCompanyField === '') {
        $('#mainSearch').css({'top': '50%'});
      } else {
        $('#mainSearch').css({'top': '20%'});
      }
    };

    /**
     * When pressing enter or submitting the form, this gets called
     */
    $scope.search = function () {
      goToCompany($scope.searchCompanyField);
    };

    function goToCompany(companyName) {
      $location.path("/company/" + companyName);
      $scope.$apply();
    }


    /**
     * Semantic Triggers .ready() block.
     */
    $(document).ready(function () {
      $('#coopDefinition').popup({position: 'bottom center'});
      $('button').popup({position: 'bottom center'});

      $('#searchField').focus();


    });
  }]);

