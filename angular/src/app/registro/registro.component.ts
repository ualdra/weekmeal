import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {


  registroForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      foto: ['']
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      // Aquí puedes manejar el envío de datos del formulario
      console.log('Datos del formulario:', this.registroForm.value);
    }
  }
}
