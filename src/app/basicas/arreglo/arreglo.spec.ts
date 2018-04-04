import { obtenerRobot } from "./arreglo";

describe('Prueba de arreglos', () => {
  it('Debe de terner almenos tres robot',() => {
    const resp = obtenerRobot();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  })

  it('Debe de existir robocob y utraman', () => {
    const resp = obtenerRobot();
    expect(resp).toContain('robocob');
    expect(resp).toContain('utraman');
  })
});
