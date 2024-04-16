import { Component } from '@angular/core';
import { PerfilComponent } from "../perfil/perfil.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-perfil-datos-personales',
    standalone: true,
    templateUrl: './perfil-datos-personales.component.html',
    styleUrl: './perfil-datos-personales.component.css',
    imports: [PerfilComponent, NavbarComponent, FormsModule, RouterModule]
})
export class PerfilDatosPersonalesComponent {
    nombre: string = '';
    apellidos: string = '';
    usuario: string = '';
    contrasena: string = '';
    fotoPerfil: File | null = null;
    hidePassword: boolean = true;
    imagenSeleccionada: string = '';

    togglePasswordVisibility() {
      this.hidePassword = !this.hidePassword;
    }
    
    guardarCambios() {
      // Lógica para guardar los cambios en el perfil
    }
  
    cargarFoto(event: any) {
      const files = event.target.files;
      if (files && files.length > 0) {
        this.fotoPerfil = files[0];
        // Aquí puedes agregar lógica para mostrar la vista previa de la imagen si es necesario
      }
    }
}
