import { Component } from '@angular/core';
import { PerfilDatosPersonalesComponent } from "../perfil-datos-personales/perfil-datos-personales.component";
import { PerfilDatosAlimenticiosComponent } from "../perfil-datos-alimenticios/perfil-datos-alimenticios.component";
import { NavbarComponent } from "../navbar/navbar.component"; 
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-perfil',
    standalone: true,
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.css',
    imports: [
        PerfilDatosPersonalesComponent,
        PerfilDatosAlimenticiosComponent,
        NavbarComponent,
        RouterModule
    ]
})
export class PerfilComponent {

}