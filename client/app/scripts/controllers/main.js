'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('MainCtrl', function ($scope, Company) {

    // OMG API TO ACCESS STUFF SO EASY
    $scope.companies = Company.find({},
      function (success) {// Search trigger
        var searchable = [];
        angular.forEach(success, function (value) {
          var newVal = value;
          newVal['title'] = value.name;
          searchable.push(newVal);
        });
        $("#searchInput").search({
          source: searchable
        });
      }
    );

    // Semantic Triggers .ready() block.
    $(document).ready(function () {
      console.log("ready!");


      var dummyCompanies = [
        {title: 'Google'},
        {title: 'Apple'},
        {title: 'Amazon'},
        {title: 'RedHat'},
        {title: 'Reddit'},
        {title: 'Unicef'},
        {title: 'RIT'},
        {title: 'Rochester Software Associates'},
        {title: 'Datto'},
        {title: 'Constant Contact'},
        {title: 'Nuggies Land'},
        {title: 'Mars Chocolate'},
        {title: 'UTC aerospace'},
        {title: 'Potato land'}
      ];


    });


  });

