import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { NavbarComponent } from '../navbar/navbar.component';
import { TitleCasePipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { MenuSemanal } from '../models/menu.interfaces';
import { MenuDiaComponent } from '../menu-dia/menu-dia.component';
import { Routes, RouterModule } from '@angular/router';

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
    NgIf
  ]
})

export class MenuSemanalComponent implements OnInit {
  menuSemanal?: MenuSemanal;
  readonly daysOfWeek: String[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    
    this.userService.currentUser.subscribe(user => {
      if (user && user.idUsuario !== undefined) {
        console.log('Usuario actual:', user);
        this.loadMenu(user.idUsuario);
      } else {
        console.log('No hay usuario autenticado o el ID del usuario no está definido');
      }
    }, error => {
      console.error('Error al obtener el usuario actual:', error);
    });
  }

  loadMenu(idUsuario: number) {
    this.http.get<{menuSemanal: string}>(`http://localhost:8080/api/usuario/${idUsuario}`).subscribe(data => {
      this.menuSemanal = JSON.parse(data.menuSemanal);
      if (!this.menuSemanal) { // Verifica si menuSemanal es null
        this.requestNewMenu(idUsuario); // Llama a otra función que maneja la nueva solicitud y recarga
      }
    }, error => {
      console.error('Error al obtener los datos del menú:', error);
    });
  }

  requestNewMenu(idUsuario: number) {
    this.http.get(`http://localhost:8080/api/usuario/menu-semanal/${idUsuario}`).subscribe(() => {
      console.log('Menú semanal actualizado');
      window.location.reload(); // Recarga la página para reflejar los cambios
    }, error => {
      console.error('Error al solicitar el nuevo menú:', error);
    });
  }

  generateNewWeeklyMenu() {
    this.userService.currentUser.subscribe(user => {
      if (user && user.idUsuario !== undefined) {
        this.requestNewMenu(user.idUsuario);
      } else {
        console.error('No hay usuario autenticado o el ID del usuario no está definido');
      }
    });

  }

  getImageUrl(id: number): string {
    return `https://img.spoonacular.com/recipes/${id}-556x370.jpg`;
  }
}
