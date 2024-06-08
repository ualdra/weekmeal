import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil-datos-personales',
  standalone: true,
  templateUrl: './perfil-datos-personales.component.html',
  styleUrls: ['./perfil-datos-personales.component.css'],
  imports: [ NavbarComponent, FormsModule, RouterModule, HttpClientModule]
})
export class PerfilDatosPersonalesComponent implements OnInit {
  currentUser: User | null = null;
  hidePassword: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.loadUser();
    });
  }

    
  loadUser(): void {
    const userId = this.currentUser!.idUsuario; // Aquí puedes obtener el ID del usuario registrado, por ejemplo, desde un servicio de autenticación
    this.userService.getUserById(userId!).subscribe(
          data => {
            console.log('Datos del usuario recibidos:', data); // Verifica la respuesta de la API
            this.currentUser = data;
            console.log('Usuario después de asignación:', this.currentUser); // Verifica el usuario asignado
            if (!this.currentUser.idUsuario) {
              console.error('ID de usuario no definido en los datos cargados');
            }
          },
          error => {
            console.error('Error al cargar los datos del usuario', error);
          }
    );
  }

  guardarCambios(): void {
  console.log('Intentando guardar cambios:', this.currentUser); // Añade depuración antes de guardar
  if (this.currentUser!.idUsuario) {
    this.userService.updateUser(this.currentUser!).subscribe(
      data => {
        alert('Datos actualizados correctamente');
      },
      error => {
        console.error('Error al actualizar los datos', error);
        alert('Hubo un error al actualizar los datos');
      }
    );
  } else {
    console.error('ID de usuario no definido');
    alert('No se puede actualizar los datos. ID de usuario no definido.');
  }
}

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
