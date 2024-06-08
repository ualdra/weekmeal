import { Component } from '@angular/core';
import { ToleranciaStateService } from '../services/tolerancia-state.service'; 
import { Tolerancia } from '../interfaces/tolerancia';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion-inicial',
  standalone: true,
  templateUrl: './configuracion-inicial.component.html',
  styleUrls: ['./configuracion-inicial.component.css'],
  imports: [FormsModule]
})
export class ConfiguracionInicialComponent {

  tolerancia: Tolerancia = {
    vegetarian: false,
    vegan: false,
    lowFodmap: false,
    glutenFree: false,
    dairyFree: false,
    ketogenic: false,
    cheap: false,
  };

  constructor(
    private router: Router,
    private toleranciaStateService: ToleranciaStateService
  ) {}

  continuar() {
    this.toleranciaStateService.setTolerancia(this.tolerancia);
    console.log('Tolerancia guardada:', this.toleranciaStateService.getTolerancia());
    this.router.navigate(['/signup']);
  }
}