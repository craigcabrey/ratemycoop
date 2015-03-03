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

    var kocsen = new Contributor("Kocsen Chung", "Creator & Developer", "kocsenc@gmail.com", "http://kocsen.com");
    var craig = new Contributor("Craig Cabrey", "Creator & Developer", "craigcabrey@gmail.com", "http://craigcabrey.com");
    var erin = new Contributor("Erin McIntosh", "Designer and Cooper-ator", "eem7920@rit.edu", "http://erinmcintosh.me");
    var ben = new Contributor("Ben Kantor", "Developer", "bkantor01@gmail.com", "");
    var piper = new Contributor("Piper Chester", "Developer", "piperchester@gmail.com", "http://piper.im");
    var rob = new Contributor("Rob Holt", "Developer", "holt.r94@gmail.com", "");
    var lexi = new Contributor("Lexi Rich", "Idea Packager", "fill", "");
    var joe = new Contributor("Joseph DeSimpliciis", "Developer", "jcd4790@rit.edu", "http://jcdesimp.com");

    function Contributor(name, role, email, link) {
      this.name = name;
      this.role = role;
      this.email = email;
      this.link = link;
      this.gravatar_link = "http://www.gravatar.com/avatar/" + common.MD5(email) + "?s=300&d=retro";
    }

    $scope.contributors = [kocsen, craig, erin, ben, piper, rob, lexi, joe];

  });
