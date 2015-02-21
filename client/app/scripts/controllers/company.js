'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('CompanyCtrl', function ($scope) {

    // Semantic Triggers .ready() block.
    $(document).ready(function () {

      var ratingIDs = ["#rating", "#overallRating", "#difficultyRating", "#cultureRating"];
      $("#rating").rating();

      for (var i = 0 ; i < ratingIDs.length; i++){
        var id = ratingIDs[i];
        $(id).rating({
          maxRating:5
        });
        $(id).rating('disable');
      }
    });



  });
