import { Juagador2 } from './jugador2';
import { Juagador } from '../../basicas/clases/clases';

describe('Jugador 2 Emit', () => {
  let jugador: Juagador2;

  beforeEach(() => jugador = new Juagador2());

  it('Debe de emitir un evento cuando recibe daño', () => {

    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp => {
      nuevoHP = hp;
    })

    jugador.recibeDanio(1000);

    expect(nuevoHP).toBe(0);
  });

  it('Debe de emitir un evento cuando recibe daño y sobrevivier si es menor de 100', () => {

    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp =>  nuevoHP = hp);

    jugador.recibeDanio(50);

    expect(nuevoHP).toBe(50);
  });
});
