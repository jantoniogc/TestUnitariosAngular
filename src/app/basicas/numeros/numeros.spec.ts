import { incrementar } from './numeros';


describe('Prueba de Números', () =>{
  it('Debe de retorna 100, si el número es mayor de 100', () => {
    const resp = incrementar(300);
    expect(resp).toBe(100);

  });

  it('Deber retornar el número mas uno', () => {
    const resp = incrementar(50);
    expect(resp).toBe(51);
  });
});
