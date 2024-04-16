import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Elemento {
  nombre: string;
  seleccionado: boolean;
}

@Component({
  selector: 'app-configuracion-inicial',
  standalone: true,
  imports: [NgFor, FormsModule, RouterModule],
  templateUrl: './configuracion-inicial.component.html',
  styleUrl: './configuracion-inicial.component.css'
})
export class ConfiguracionInicialComponent {
  preferenciaSeleccionada: string = '';

  preferencias: Elemento[] = [
    { nombre: 'Vegetariano', seleccionado: false },
    { nombre: 'Vegano', seleccionado: false },
    { nombre: 'Omnívoro', seleccionado: false },
    { nombre: 'Pisciactoria', seleccionado: false },
  ];

  alergias: Elemento[] = [
    { nombre: 'Crustáceos', seleccionado: false },
    { nombre: 'Pescado', seleccionado: false },
    { nombre: 'Frutos secos', seleccionado: false },
    { nombre: 'Lácteos', seleccionado: false },
  ];
 
  hasSelection(): boolean {
    return this.preferencias.some(p => p.seleccionado);
}

  onSelectionChange(elemento: Elemento): void {
    elemento.seleccionado = !elemento.seleccionado;
  }


}
