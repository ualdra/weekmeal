import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-vista-inicial',
  standalone: true,
  imports: [NgClass, NavbarComponent],
  templateUrl: './vista-inicial.component.html',
  styleUrl: './vista-inicial.component.css'
})
export class VistaInicialComponent {
  // Variables para controlar qué imagen se muestra a color.
  public imagenActiva: 'imagen1' | 'imagen2' = 'imagen1';

  // Métodos para cambiar la imagen activa.
  public mostrarImagen1(): void {
    this.imagenActiva = 'imagen1';
  }

  public mostrarImagen2(): void {
    this.imagenActiva = 'imagen2';
  }
}
