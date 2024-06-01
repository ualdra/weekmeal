import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registerForm: FormGroup;
  showModal: boolean = false;
  registrationError: string | null = null;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const url = 'http://localhost:8080/api/usuarios/register';
    const user: User = this.registerForm.value;

    this.http.post(url, user).subscribe({
      next: (response: any) => {
        console.log('Registro exitoso', response);
        this.showModal = true;
        this.registrationError = null;
      },
      error: (error: any) => {
        console.error('Error en el registro', error);
        this.registrationError = error.error.message;
      }
    });
  }

  closeModal() {
    this.showModal = false;
  }}
