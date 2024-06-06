import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(user => {
        console.log('Inicio de sesión exitoso:', user);
        // Redirigir a la página deseada después del login exitoso
        this.router.navigate(['/vista-inicial']);
      }, error => {
        console.error('Error al iniciar sesión:', error);
        // Manejar el error de inicio de sesión aquí
      });
    }
  }
}
