import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToleranciaStateService {
  private toleranciaId: number=0;

  setToleranciaId(id: number): void {
    this.toleranciaId = id;
  }

  getToleranciaId(): number {
    return this.toleranciaId;
  }
}
