import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tolerancia } from '../interfaces/tolerancia'; // Importar la interfaz Tolerancia

@Injectable({
  providedIn: 'root'
})
export class ToleranciaService {
  private apiUrl = 'http://localhost:8080/api/tolerancias';
  constructor(private http: HttpClient) {}

  tolerancia!: Tolerancia;

  createTolerancia(tolerancia: Tolerancia): Observable<Tolerancia> {
    this.tolerancia = tolerancia;
    return this.http.post<Tolerancia>(this.apiUrl, tolerancia);
  }

  getTolerancia(): Tolerancia {
    return this.tolerancia;
  }

  getTolerancias(): Observable<Tolerancia[]> {
    return this.http.get<Tolerancia[]>(this.apiUrl);
  }
}
