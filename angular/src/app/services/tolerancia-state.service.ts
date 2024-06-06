import { Injectable } from '@angular/core';
import { Tolerancia } from '../interfaces/tolerancia';

@Injectable({
  providedIn: 'root'
})
export class ToleranciaStateService {
  
  private tolerancia!: Tolerancia;

  setTolerancia(tolerancia: Tolerancia) {
    this.tolerancia = tolerancia;
  }

  getTolerancia(): Tolerancia {
    return this.tolerancia;
  }
}
