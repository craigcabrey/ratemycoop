'use strict';

/**
 * @ngdoc function
 * @name ratemycoopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ratemycoopApp
 */
angular.module('ratemycoopApp')
  .controller('AboutCtrl', function ($scope, common) {

    var se = "Software Engineering";

    var kocsen = new Contributor("Kocsen Chung", "Creator & Developer", "kocsenc@gmail.com", se);
    var craig = new Contributor("Craig Cabrey", "Creator & Developer", "craigcabrey@gmail.com", se);
    var erin = new Contributor("Erin McIntosh", "Designer and Cooper-ator", "eem7920@rit.edu", "Photo Sciences");
    var ben = new Contributor("Ben Kantor", "Developer - UI/Devops", "bkantor01@gmail.com", se);
    var piper = new Contributor("Piper Chester", "Developer - UI", "piperchester@gmail.com", se);
    var rob = new Contributor("Rob Holt", "Developer - Backend", "holt.r94@gmail.com", se);
    var lexi = new Contributor("Lexi Rich", "Idea Packager", "fill", "Packaging Science");
    var joe = new Contributor("Joseph DeSimpliciis", "Developer", "jcd4790@rit.edu", se);

    function Contributor(name, role, email, major) {
      this.name = name;
      this.role = role;
      this.email = email;
      this.major = major;
      this.gravatar_link = "http://www.gravatar.com/avatar/" + common.MD5(email) + "?s=300&d=retro";
    }

    $scope.contributors = [kocsen, craig, erin, ben, piper, rob, lexi, joe];

  });
