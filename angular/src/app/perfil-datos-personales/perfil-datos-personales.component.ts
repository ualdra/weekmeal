import { Component, OnInit } from '@angular/core';
import { PerfilComponent } from "../perfil/perfil.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-perfil-datos-personales',
  standalone: true,
  templateUrl: './perfil-datos-personales.component.html',
  styleUrls: ['./perfil-datos-personales.component.css'],
  imports: [PerfilComponent, NavbarComponent, FormsModule, RouterModule, HttpClientModule]
})
export class PerfilDatosPersonalesComponent implements OnInit {
  user: User = {
    idUsuario: 0,
    username: '',
    password: '',
    email: '',
    telefono: '',
    nombre: '',
    apellidos: ''
  };
  fotoPerfil: File | null = null;
  hidePassword: boolean = true;
  imagenSeleccionada: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const userId = 1; // Aquí puedes obtener el ID del usuario registrado, por ejemplo, desde un servicio de autenticación
    this.userService.getUserById(userId).subscribe(
      data => {
        console.log('Datos del usuario recibidos:', data); // Verifica la respuesta de la API
        this.user = data;
        console.log('Usuario después de asignación:', this.user); // Verifica el usuario asignado
        if (!this.user.idUsuario) {
          console.error('ID de usuario no definido en los datos cargados');
        }
      },
      error => {
        console.error('Error al cargar los datos del usuario', error);
      }
    );
  }
  

  guardarCambios(): void {
  console.log('Intentando guardar cambios:', this.user); // Añade depuración antes de guardar
  if (this.user.idUsuario) {
    this.userService.updateUser(this.user).subscribe(
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
