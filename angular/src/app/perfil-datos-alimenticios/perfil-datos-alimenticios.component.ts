import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-perfil-datos-alimenticios',
    standalone: true,
    templateUrl: './perfil-datos-alimenticios.component.html',
    styleUrl: './perfil-datos-alimenticios.component.css',
    imports: [NavbarComponent, FormsModule, CommonModule]
})
export class PerfilDatosAlimenticiosComponent {
  vegatariano: boolean = false;
  vegano: boolean = false;
  intoleranteGluten: boolean = false;
  intoleranteLactosa: boolean = false;
  bajoCarbohidratos: boolean = false;
  bajoGrasas: boolean = false;



  
  guardarCambios() {
    // Lógica para guardar los cambios en el perfil
  }


}
