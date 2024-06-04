import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
import { ToleranciaStateService } from '../tolerancia-state.service'; // Servicio para mantener el estado de la tolerancia

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class RegistroComponent {
  registroForm: FormGroup;
  toleranciaId: number | null = null;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toleranciaStateService: ToleranciaStateService
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Leer el ID de la tolerancia del servicio de estado
    this.toleranciaId = this.toleranciaStateService.getToleranciaId();
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const formValue = this.registroForm.value;
      const user: User = {
        nombre: formValue.nombre,
        apellidos: formValue.apellidos,
        email: formValue.email,
        telefono: formValue.telefono,
        username: formValue.username,
        password: formValue.password,
        tolerancias: this.toleranciaId || 0
      };
      this.userService.createUser(user).subscribe({
        next: response => {
          console.log('Usuario registrado:', response);
          this.router.navigate(['/login']);
        },
        error: err => {
          console.error('Error registrando usuario:', err);
          this.errorMessage = 'Error registrando usuario. Por favor, inténtalo de nuevo.';
        }
      });
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
