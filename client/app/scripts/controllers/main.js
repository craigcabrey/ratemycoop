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
     * Login initializer
     * @type {{email: string, pass: string}}
     */
    $scope.loginForm = {
      error: false,
      email: "",
      pass: ""
    };

    $scope.login = function () {
      User.login({
          rememberMe: true
        }, {
          email: $scope.loginForm.email,
          password: $scope.loginForm.pass
        },
        function (success) {
          // Change login button (including icon)
          $scope.loginForm.error = false;

          // TODO: hide the popover
        },
        function (err) {
          // Hightlight forms for error
          $scope.loginForm.error = true;
          $scope.loginForm.email = "";
          $scope.loginForm.pass = "";

        });
    };


    // Semantic Triggers .ready() block.
    $(document).ready(function () {
      /**
       * Setup popup for login
       */
      $(".loginButtonContainer").popup({
        on: "click",
        position: "bottom right",
        onVisible: function () {
          $("#loginButton").removeClass('inverted');
        },
        onHide: function () {
          $("#loginButton").addClass('inverted');
        }
      });

    });
  });

