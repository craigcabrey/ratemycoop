'use strict';

describe('Controller: PrivacyCtrl', function () {

  // load the controller's module
  beforeEach(module('ratemycoopApp'));

  var PrivacyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrivacyCtrl = $controller('PrivacyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
