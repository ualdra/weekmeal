import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tolerancia } from '../interfaces/tolerancia'; // Importar la interfaz Tolerancia

@Injectable({
  providedIn: 'root'
})
export class ToleranciaService {

  private apiUrl = 'http://localhost:8080/api/tolerancia';

  constructor(private http: HttpClient) {}

  tolerancia!: Tolerancia;

  getTolerancias(): Observable<Tolerancia[]> {
    return this.http.get<Tolerancia[]>(this.apiUrl);
  }

  createTolerancia(tolerancia: Tolerancia): Observable<Tolerancia> {
    return this.http.post<Tolerancia>(`${this.apiUrl}`, tolerancia);
  }

  getToleranciaById(idTolerancia: number): Observable<Tolerancia> {
    return this.http.get<Tolerancia>(`${this.apiUrl}/${idTolerancia}`);
  }

  getToleranciaByUserId(userId: number): Observable<Tolerancia> {
    return this.http.get<Tolerancia>(`${this.apiUrl}/usuario/${userId}`);
  }

  updateTolerancia(idTolerancia: number, tolerancia: Tolerancia): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${idTolerancia}`, tolerancia);
  }
}
