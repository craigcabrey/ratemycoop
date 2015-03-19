'use strict';

describe('Controller: CreatecompanyCtrl', function () {

  // load the controller's module
  beforeEach(module('ratemycoopApp'));

  var CreatecompanyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatecompanyCtrl = $controller('CreatecompanyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
