import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  @Output() agregarAlumno: EventEmitter<any> = new EventEmitter<any>();

  formulario= this.formBuilder.group({
    nombre: new FormControl ('', [Validators.required]),
    apellido: new FormControl ('', [Validators.required]),
    edad: new FormControl ('', [Validators.required, Validators.min(18), this.validarEdad()]),
    fechaDeNacimiento: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  validarEdad(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return (!Number.isInteger(parseInt(control.value))) ? { errorEdad: true } : null;
    }
  }

  enviarFormulario(): void {
    console.log(this.formulario.value);
    this.agregarAlumno.emit(this.formulario.value);
  }
  

}
