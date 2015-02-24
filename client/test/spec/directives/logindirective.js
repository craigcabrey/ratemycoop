'use strict';

describe('Directive: loginDirective', function () {

  // load the directive's module
  beforeEach(module('ratemycoopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<login-directive></login-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loginDirective directive');
  }));
});
