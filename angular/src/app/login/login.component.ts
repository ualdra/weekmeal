import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  loginError: string | null = null;

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  navigateToRegistro() {
    throw new Error('Method not implemented.');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    const url = 'http://localhost:8080/api/usuarios/login';
    const credentials = this.loginForm.value;

    this.http.post(url, credentials).subscribe({
      next: (response: any) => {
        console.log('Inicio de sesión exitoso', response);
        this.authService.setId(response.id); // Guardar ID en AuthService
        this.authService.setUsername(response.username); // Guardar nombre de usuario en AuthService
        this.router.navigate(['/']); // Redirigir al inicio
      },
      error: (error: any) => {
        console.error('Error en el inicio de sesión', error);
        this.loginError = error.error.message;
      }
    });
  }
}
