import { Juagador } from "./clases";

describe('Pruebas de Clase', () => {

  it('debe retornas 80 de hp si recibe 20 de daño', () => {
    const jugador = new Juagador();
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });


  it('debe retornas 0 de hp si recibe 100 de daño o más', () => {
    const jugador = new Juagador();
    const resp = jugador.recibeDanio(101);
    expect(resp).toBe(0);
  });
});
