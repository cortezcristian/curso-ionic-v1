
describe('Grupo', function(){

  // cargar modulo
  beforeEach(module('starter'));
  // cargar controllers
  beforeEach(module('starter.controllers'));

  var DashCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashCtrl = $controller('DashCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('debe salir ok', function(){
    // Vacio
    //expect(DashCtrl.awesomeThings.length).toBe(3);
    console.log("ah....", DashCtrl);
  });
});
