import { Component } from '@angular/core';
import {FormControl, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  registrar(){
    if (this.formulario.valid){
      console.log("Formulario valido", this.formulario.value); 
    }
  }

}
