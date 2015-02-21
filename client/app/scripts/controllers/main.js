'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('MainCtrl', function ($scope) {



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

      // Search trigger
      $("#mainSearchBar").search({source: dummyCompanies});
    });


  });

