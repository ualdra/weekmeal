import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
navigateToRegistro() {
throw new Error('Method not implemented.');
}
togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  loginForm: FormGroup;
 showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí puedes manejar el envío de datos del formulario, por ejemplo, puedes enviarlos a través de un servicio de autenticación.
      console.log('Datos del formulario:', this.loginForm.value);
    }
  }
}
