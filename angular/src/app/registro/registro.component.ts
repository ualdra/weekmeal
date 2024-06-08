import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { Tolerancia } from '../interfaces/tolerancia';
import { ToleranciaService } from '../services/tolerancia.service';
import { ToleranciaStateService } from '../services/tolerancia-state.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private toleranciaStateService: ToleranciaStateService, private toleranciaService: ToleranciaService) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
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
      };
      
      this.userService.createUser(user).subscribe(newUser => {
        console.log('Usuario registrado:', newUser);
        const tolerancia: Tolerancia = this.toleranciaStateService.getTolerancia();
        tolerancia.idUsuario = newUser.idUsuario!;
        this.toleranciaService.createTolerancia(tolerancia).subscribe(() => {
          console.log('Usuario y Tolerancia creados');
          this.router.navigate(['/login']);
        });
      });
    }
  }
}