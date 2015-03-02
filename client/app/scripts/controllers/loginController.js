'use strict';

/**
 * THIS IS THE NAVBAR LOGIN CONTROLLER, NOT TO BE CONFUSED BY LOGIN.JS
 * FOR STANDALONE LOGIN CONTROLLER
 * @ngdoc function
 * @name ratemycoopApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('LoginCtrl', function ($scope, User, $location) {
    $scope.loginLoading = false;

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
      // First, check if register mode is on
      if ($scope.loginForm.registerMode) {
        var form = $scope.loginForm;
        if (form.confirmPass === form.pass && /(.+)@(.+){2,}\.(.+){2,}/.test(form.email)) {
          $scope.loginLoading = true;
          User.create({
              email: form.email,
              password: form.pass
            },
            function (success) {
              $scope.loginLoading = false;
              loginAction()
            },
            function (err) {
              $scope.loginForm.email = "";
              $scope.loginForm.pass = "";
              $scope.loginForm.error = false;
              $scope.loginForm.confirmPass = "";
              setLoginError(err.data.error.message);
              $scope.loginLoading = false;
            }
          );
        } else {
          // Clear everything
          $scope.loginForm.email = "";
          $scope.loginForm.pass = "";
          $scope.loginForm.error = false;
          $scope.loginForm.confirmPass = "";
          setLoginError("Invalid data.");
          $("#emailField").focus()
        }
      } else {
        // register mode is off, so login
        loginAction()
      }
    };

    /**
     * private class that actually performs the logging in.
     * Called from register after register success and when
     * logging in.
     */
    function loginAction() {
      $scope.loginLoading = true;
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

          $scope.loginLoading = false;
        },
        function () {
          // On Error Login
          setLoginError("Invalid credentials.");
          $("#passwordField").val("");
          $("#emailField").select();
          $scope.loginLoading = false;
        });
    }

    $scope.logout = function () {
      $scope.loginLoading = true;
      User.logout({},
        function (success) {
          $scope.loginLoading = false;
          $("#loggedInPopup").popup('hide');
          $scope.userButton.text = "Login";
          $scope.user = null;
        },
        function (err) {
          $scope.loginLoading = false;
          setLoginError(err.data.error.message);
        }
      );
    };
    $scope.toggleRegisterMode = function () {
      // Reset all data, make sure we are clean for register
      $scope.loginForm.registerMode = !$scope.loginForm.registerMode; // Used for ui change
      $scope.loginForm.email = "";
      $scope.loginForm.pass = "";
      $scope.loginForm.error = false;
      $scope.loginForm.confirmPass = "";
      $("#emailField").focus()
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
