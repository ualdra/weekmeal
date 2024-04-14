import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buscar-receta',
  standalone: true,
  imports: [NgForOf, NgIf, NavbarComponent, RouterModule],
  templateUrl: './buscar-receta.component.html',
  styleUrl: './buscar-receta.component.css'
})
export class BuscarRecetaComponent {
  resultados: number = 10;

   // Función para generar un array con la cantidad especificada de elementos
   arrayFromNumber(num: number): any[] {
    return Array(num).fill(0).map((x, i) => i);
  }

}
