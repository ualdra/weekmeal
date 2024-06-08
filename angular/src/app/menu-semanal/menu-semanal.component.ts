import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { NavbarComponent } from '../navbar/navbar.component';
import { TitleCasePipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';  // Importar NgFor aquí
import { MenuSemanal } from '../models/menu.interfaces';

@Component({
  selector: 'app-menu-semanal',
  templateUrl: './menu-semanal.component.html',
  styleUrls: ['./menu-semanal.component.css'],
  standalone: true,
  imports: [
    SafeUrlPipe, 
    NavbarComponent, 
    TitleCasePipe, 
    KeyValuePipe,
    NgFor,
    NgIf  // Añadir NgFor a las importaciones
  ]
})



export class MenuSemanalComponent implements OnInit {
  menuSemanal?: MenuSemanal;  // Define la variable usando la interfaz
  readonly daysOfWeek: String[] =
   ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    const idUsuario = 2;
    this.http.get<{menuSemanal: string}>(`http://localhost:8080/api/usuario/${idUsuario}`).subscribe(data => {
      this.menuSemanal = JSON.parse(data.menuSemanal);
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }

  getImageUrl(id: number): string {
    return `https://img.spoonacular.com/recipes/${id}-556x370.jpg`;
  }
}