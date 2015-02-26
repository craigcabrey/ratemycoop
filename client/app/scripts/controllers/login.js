'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('LoginCtrl', function ($scope, User) {


    /**
     * Initialize Session
     */
    if (User.isAuthenticated()) {
      $scope.user = User.getCurrent(
        function (success) {
          // Get user data
          $scope.userButton.text = usernameFromEmail(success.email);
        }
      );
    } else {
      $scope.user = null;
    }


    /**
     * Sets scope to control user flow
     * @type {{email: string, pass: string}}
     */
    $scope.userButton = {
      text: "Login"
    };
    $scope.loginForm = {
      error: false,
      errorMessage: "Invalid credentials. ",
      email: "",
      pass: "",
      registerMode: false,
      confirmPass: ""
    };
    /**
     * POSTCONDITION:
     * All fields and errors are clear, register mode is OFF
     */
    $scope.clearLoginFormData = function () {
      $scope.loginForm = {
        error: false,
        errorMessage: "Invalid credentials. ",
        email: "",
        pass: "",
        registerMode: false,
        confirmPass: ""
      };
    };

    /**
     * Log in or Register action
     */
    $scope.submitLoginForm = function () {
      // First, check if register
      if ($scope.loginForm.registerMode) {
        var form = $scope.loginForm;
        if (form.confirmPass === form.pass && /(.+)@(.+){2,}\.(.+){2,}/.test(form.email)) {
          User.create({
            email: form.email,
            password: form.pass
          });

        } else {
          // Clear everything
          $scope.loginForm.email = "";
          $scope.loginForm.pass = "";
          $scope.loginForm.error = false;
          $scope.loginForm.confirmPass = "";
          setLoginError("Invalid data.");
        }

      } else {
        // Else, login
        User.login({
            rememberMe: true
          }, {
            email: $scope.loginForm.email,
            password: $scope.loginForm.pass
          },
          function (success) {
            // On Login Success
            // Change login button (including icon)
            $scope.clearLoginFormData();
            $scope.userButton.text = usernameFromEmail(success.user.email);
            $(".loginButtonContainer").popup('hide');
            $scope.user = User.getCurrent();
          },
          function () {
            // On Error Login
            setLoginError("Invalid credentials.");
            $("#passwordField").val("");
            $("#emailField").select();
          });
      }

    };
    $scope.logout = function () {
      User.logout({},
        function (success) {
          $("#loggedInPopup").popup('hide');
          $scope.userButton.text = "Login";
          $scope.user = null;
        });
    };
    $scope.toggleRegisterMode = function () {
      // Reset all data, make sure we are clean for register
      $scope.loginForm.registerMode = !$scope.loginForm.registerMode; // Used for ui change
      $scope.loginForm.email = "";
      $scope.loginForm.pass = "";
      $scope.loginForm.error = false;
      $scope.loginForm.confirmPass = "";


    };

    /**
     * Sets an error in login form.
     * @param message - message to display to user
     */
    function setLoginError(message) {
      $scope.loginForm.error = true;
      $scope.loginForm.errorMessage = message;
    }


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
