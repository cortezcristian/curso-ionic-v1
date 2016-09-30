
describe("CalcServ", function(){
  var CServ;

  beforeEach(module('starter.factories'));

  beforeEach(inject(function(_CalcServ_){
    CServ = _CalcServ_;
  }));

  it('debe cargar el servicio', function(){
    expect(CServ).toBeDefined();
    expect(CServ.alcuadrado).toBeDefined();
  });

  it('debe operar con valores numericos', function(){
    expect(CServ.alcuadrado(2)).toBe(4);
    expect(CServ.alcuadrado(2)).not.toBe(5);
    expect(CServ.alcuadrado(2)).not.toBe(3);
  });

  it('debe levantar excepcion con cadenas de textos', function(){
    //expect(CServ.alcuadrado(2)).toBe(4);
    expect(function(){ CServ.alcuadrado("Hola :)") }).toThrow();
  });

});
