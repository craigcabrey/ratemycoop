'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('FeedCtrl', function ($scope, Company) {

    $scope.companies = Company.find({
        filter: {
          limit: 2,
          include: ['reviews', {'locations': 'region'}]
        }
      },
      function (success) {// Search trigger


        console.log($scope.companies[0]);
        angular.forEach(success, function (value) {

          var newVal = value;
          newVal['title'] = value.name;
          newVal['url'] = "/#/company/" + value.name;
          if (value.description && value.description.length >= 230) {
            newVal['description'] = value.description.substr(0, 230) + "...";
          }
          if (value.description === null) { // For when the description is null
            newVal['description'] = "";
          }
        });


      }
    );


  });
