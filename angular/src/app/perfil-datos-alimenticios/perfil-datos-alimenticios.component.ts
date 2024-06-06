import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../interfaces/user';
import { Tolerancia } from '../interfaces/tolerancia';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil-datos-alimenticios',
  standalone: true,
  templateUrl: './perfil-datos-alimenticios.component.html',
  styleUrls: ['./perfil-datos-alimenticios.component.css'],
  imports: [NavbarComponent, FormsModule, CommonModule, RouterModule]
})
export class PerfilDatosAlimenticiosComponent implements OnInit {
  currentUser: User | null = null;
  tolerancia: Tolerancia | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log('Usuario actual en ngOnInit:', this.currentUser); // Depuración inicial
      if (this.currentUser) {
        // this.loadUser();
      }
    });
  }

  // loadUser(): void {
  //   const userId = this.currentUser!.idUsuario;
  //   console.log('Cargando datos del usuario con ID:', userId); // Depuración de carga de usuario
  //   this.userService.getUserById(userId!).subscribe(
  //     data => {
  //       console.log('Datos del usuario recibidos:', data);
  //       this.currentUser = data;
  //       if (this.currentUser.tolerancias) {
  //         console.log('Tolerancias del usuario:', this.currentUser.tolerancias); // Depuración de tolerancias del usuario
  //         this.loadTolerancias(this.currentUser.tolerancias.idTolerancia);
  //       } else {
  //         console.error('El usuario no tiene tolerancias asociadas');
  //       }
  //     },
  //     error => {
  //       console.error('Error al cargar los datos del usuario', error);
  //     }
  //   );
  // }

  loadTolerancias(idTolerancia: number): void {
    console.log('Cargando tolerancias con ID:', idTolerancia); // Depuración de carga de tolerancias
    this.userService.getUserTolerancias(idTolerancia).subscribe(
      data => {
        console.log('Datos de las tolerancias recibidos:', data);
        this.tolerancia = { ...data, idTolerancia }; // Asigna manualmente el idTolerancia
        console.log('ID de tolerancia recibido:', this.tolerancia.idTolerancia); // Verificación del ID de tolerancia
      },
      error => {
        console.error('Error al cargar las tolerancias del usuario', error);
      }
    );
  }

  guardarCambios(): void {
    if (this.tolerancia) {
      console.log('Guardando cambios para la tolerancia con ID:', this.tolerancia.idTolerancia);
      console.log('Datos de tolerancia antes de guardar:', this.tolerancia);
      this.userService.updateUserTolerancias(this.tolerancia).subscribe(
        response => {
          console.log('Cambios guardados exitosamente:', response);
        },
        error => {
          console.error('Error al guardar los cambios:', error);
        }
      );
    } else {
      console.error('No hay tolerancias para guardar');
    }
  }
}
