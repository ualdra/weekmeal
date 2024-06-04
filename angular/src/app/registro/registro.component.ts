import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
import { Tolerancia } from '../tolerancia';
import { ToleranciaService } from '../tolerancia.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class RegistroComponent {
  registroForm: FormGroup;
  tolerancia! : Tolerancia;
  

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private toleranciaService: ToleranciaService) {
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
      this.tolerancia= this.toleranciaService.getTolerancia();
      const user: User = {
        nombre: formValue.nombre,
        apellidos: formValue.apellidos,
        email: formValue.email,
        telefono: formValue.telefono,
        username: formValue.username,
        password: formValue.password,
      };
      this.userService.createUser(user).subscribe(response => {
        this.userService.updateUserTolerancias(this.tolerancia)
        console.log('Usuario registrado:', response);
        this.router.navigate(['/login']);
      });
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
