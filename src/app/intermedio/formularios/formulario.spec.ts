import { FormularioRegister } from "./formulario";
import { FormBuilder } from "@angular/forms";



describe('Formularios', () => {
  let componente: FormularioRegister;
  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });

  it('Debe crear un formulario con dos campos, email y password', () => {
    expect(componente.form.contains('email')).toBe(true);
    expect(componente.form.contains('password')).toBe(true);
  });

  it('Email debe ser obligatorio', () => {
    const control = componente.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();

  });
  it('Email debe ser un email valido', () => {
    const control = componente.form.get('email');
    control.setValue('jantoniogc@gmail.com');
    expect(control.valid).toBeTruthy()

  });
});
