'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('MainCtrl', function ($scope, Company, User) {

    // OMG API TO ACCESS STUFF SO EASY
    $scope.companies = Company.find({},
      function (success) {// Search trigger
        var searchable = [];
        angular.forEach(success, function (value) {
          var newVal = value;
          newVal['title'] = value.name;
          newVal['url'] = "/#/company/" + value.name;
          searchable.push(newVal);
        });
        $("#searchInput").search({
          source: searchable
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
     * Semantic Triggers .ready() block.
     */
    $(document).ready(function () {
      $('#coopDefinition').popup({position: 'bottom center'});
      $('button').popup({position: 'bottom center'});

      $('#searchField').focus();

    });
  });

