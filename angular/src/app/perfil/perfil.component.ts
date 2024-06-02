import { Component } from '@angular/core';
import { PerfilDatosPersonalesComponent } from "../perfil-datos-personales/perfil-datos-personales.component";
import { PerfilDatosAlimenticiosComponent } from "../perfil-datos-alimenticios/perfil-datos-alimenticios.component";
import { NavbarComponent } from "../navbar/navbar.component"; 
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'app-perfil',
    standalone: true,
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.css',
    imports: [
        PerfilDatosPersonalesComponent,
        PerfilDatosAlimenticiosComponent,
        NavbarComponent,
        RouterModule,
        FormsModule
    ]
})
export class PerfilComponent {
  currentUser: User | null = null;

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
}
