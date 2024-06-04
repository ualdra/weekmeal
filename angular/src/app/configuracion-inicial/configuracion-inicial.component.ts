import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToleranciaService } from '../tolerancia.service'; // Servicio para manejar las tolerancias
import { ToleranciaStateService } from '../tolerancia-state.service'; // Servicio para mantener el estado de la tolerancia
import { Tolerancia } from '../tolerancia';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-configuracion-inicial',
  standalone: true,
  templateUrl: './configuracion-inicial.component.html',
  styleUrls: ['./configuracion-inicial.component.css'],
  imports: [FormsModule, NgFor]
})
export class ConfiguracionInicialComponent {
  tolerancia: Tolerancia = {
    idTolerancia: 0,
    vegetarian: false,
    vegan: false,
    lowFodmap: false,
    glutenFree: false,
    dairyFree: false,
    ketogenic: false,
    cheap: false
  };

  constructor(
    private router: Router,
    private toleranciaService: ToleranciaService,
    private toleranciaStateService: ToleranciaStateService
  ) {}

  continuar() {
    this.toleranciaService.createTolerancia(this.tolerancia).subscribe(response => {
      console.log('Tolerancia creada:', response);
      // Guardar el ID de la tolerancia en el servicio de estado
      this.toleranciaStateService.setToleranciaId(response.idTolerancia);
      this.router.navigate(['/signup']);
    });
  }
}
