'use strict';

describe('Controller: MastercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('ratemycoopApp'));

  var MastercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MastercontrollerCtrl = $controller('MastercontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
