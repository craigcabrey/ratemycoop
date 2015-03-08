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

    $scope.companies = Company.find({},
      function (success) {// Search trigger
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
        });


      }
    );



  });
