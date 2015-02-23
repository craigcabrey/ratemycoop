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
     * Initialize Session
     */
    if (User.isAuthenticated()) {
      $scope.user = User.getCurrent(
        function (success) {
          // Get user data
          $scope.userButton.text = usernameFromEmail(success.email);
          console.log(success);
        }
      );
    } else {
      $scope.user = null;
    }


    /**
     * Searching Functionality
     */
    $scope.searchCompanyField = '';
    $scope.handleSearchChange = function () {
      if ($scope.searchCompanyField === '') {
        $('#mainSearch').css({'top': '50%'});
      } else {
        $('#mainSearch').css({'top': '10%'});
      }
    };

    /**
     * Login Functionality
     * @type {{email: string, pass: string}}
     */
    $scope.userButton = {
      text: "Login"
    };
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
          // On Login Success
          // Change login button (including icon)
          $scope.loginForm.error = false;
          $scope.userButton.text = usernameFromEmail(success.user.email);
          $(".loginButtonContainer").popup('hide');
          $scope.user = User.getCurrent();
        },
        function (err) {
          // On Error Login
          $scope.loginForm.error = true;
          $("#passwordField").val("");
          $("#emailField").select();
        });
    };
    $scope.logout = function () {
      User.logout({},
        function (success) {
          $("#loggedInPopup").popup('hide');
          $scope.userButton.text = "Login";
          $scope.user = null;
        });
    };


    /**
     * Simple helper function to get the xxx portion of xxx@yolo.com
     * @param email
     * @returns {string}
     */
    function usernameFromEmail(email) {
      if (email.indexOf('@') >= 1) {
        return email.substring(0, email.indexOf('@'));
      }
    }

    /**
     * Semantic Triggers .ready() block.
     */
    $(document).ready(function () {
      $('button').popup({position: 'bottom center'});

      $('#searchField').focus();

      $(".loginButtonContainer").popup({
        on: "click",
        position: "bottom right",
        onVisible: function () {
          $("#loginButton").removeClass('inverted');
          $("#emailField").focus();
        },
        onHide: function () {
          $("#loginButton").addClass('inverted');
        }
      });

      $("#logoutDropdown").dropdown();


    });
  });

