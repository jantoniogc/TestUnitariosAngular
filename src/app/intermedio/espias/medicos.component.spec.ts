import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  const servicio = new MedicosService(null);


  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });


  it('Init debe de cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return Observable.from([medicos])
    })
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);

  });

  it('Debe llamar al servidor para agregar un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico2) => {
      return Observable.empty();
    })
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo médico al array de médicos', () => {
    const medico = { id: 1, nombre: 'Juan' }
    spyOn(servicio, 'agregarMedico').and.returnValue(Observable.from([medico]));

    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agragar al médico';
    spyOn(servicio, 'agregarMedico').and
      .returnValue(Observable.throw(miError));

    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servidor para borrar el médico', () => {

    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico').and
      .returnValue(Observable.empty());

    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No Debe de llamar al servidor para borrar el médico', () => {

    spyOn(window, 'confirm').and.returnValue(false);

    const espia = spyOn(servicio, 'borrarMedico').and
      .returnValue(Observable.empty());

    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
