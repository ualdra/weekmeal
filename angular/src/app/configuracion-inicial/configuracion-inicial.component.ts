import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToleranciaService } from '../tolerancia.service'; // Servicio para manejar las tolerancias
import { Tolerancia } from '../tolerancia';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { response } from 'express';


interface Elemento {
  nombre: string;
  seleccionado: boolean;
  campo: keyof Tolerancia;
}

@Component({
  selector: 'app-configuracion-inicial',
  standalone: true,
  templateUrl: './configuracion-inicial.component.html',
  styleUrls: ['./configuracion-inicial.component.css'],
  imports: [FormsModule, NgFor]
})
export class ConfiguracionInicialComponent {
  preferenciaSeleccionada: string = '';

  preferencias: Elemento[] = [
    { nombre: 'Vegetariano', seleccionado: false, campo: 'vegetarian' },
    { nombre: 'Vegano', seleccionado: false, campo: 'vegan' },
    { nombre: 'Low Fodmap', seleccionado: false, campo: 'lowFodmap' },
    { nombre: 'Sin Gluten', seleccionado: false, campo: 'glutenFree' },
    { nombre: 'Sin Lácteos', seleccionado: false, campo: 'dairyFree' },
    { nombre: 'Ketogénico', seleccionado: false, campo: 'ketogenic' },
    { nombre: 'Barato', seleccionado: false, campo: 'cheap' },
  ];

  constructor(private router: Router, private toleranciaService: ToleranciaService) {}

  onSelectionChange(elemento: Elemento) {
    this.preferenciaSeleccionada = elemento.nombre;
  }

  continuar() {
    // Crear la tolerancia y guardar el ID
    const tolerancia: Tolerancia = {
      idTolerancia: 0,
      vegetarian: false,
      vegan: false,
      lowFodmap: false,
      glutenFree: false,
      dairyFree: false,
      ketogenic: false,
      cheap: true
    };
    this.toleranciaService.createTolerancia(tolerancia).subscribe(response => {
      console.log('Tolerancia creada:', response);
      this.router.navigate(['/signup']);
    });
  }
}
