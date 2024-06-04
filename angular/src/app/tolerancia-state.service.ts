import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToleranciaStateService {
  private toleranciaId: number | null = null;

  setToleranciaId(id: number): void {
    this.toleranciaId = id;
  }

  getToleranciaId(): number | null {
    return this.toleranciaId;
  }
}
