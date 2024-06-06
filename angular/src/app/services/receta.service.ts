import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Receta } from '../interfaces/receta';
import { RecetaFav } from '../interfaces/RecetaFav';
import { RecetaBackend } from '../interfaces/recetabackend';

@Injectable({
  providedIn: 'root'
})

export class RecetaService {

  private backend = 'http://localhost:8080/api';  
  // private recetasUrl = 'https://api.spoonacular.com/recipes';
  private recetasFavUrl = 'http://localhost:8080/api/receta-fav'; 
  private recetasUrl = 'http://localhost:8080/api/receta';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getReceta(id: number): Observable<Receta> {
    const url = `${this.backend}/meal?query=${id}`;
    return this.http.get<Receta>(url)
      .pipe(
        catchError(this.handleError<Receta>('getReceta', {} as Receta))
      );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  createReceta(receta: RecetaBackend): Observable<RecetaBackend> {
    return this.http.post<RecetaBackend>(this.recetasUrl, receta);
  }

  createRecetaFav(recetaFav: RecetaFav): Observable<RecetaFav> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<RecetaFav>(this.recetasFavUrl, recetaFav, { headers });
  }

  getRecetaById(id: number): Observable<Receta> {
    const url = `${this.recetasUrl}/${id}`;
    return this.http.get<Receta>(url);
  }

  getRecetaByNombre(nombre: string): Observable<Receta> {
    return this.http.get<Receta>(`${this.recetasUrl}/nombre/${nombre}`);
  }

  existsRecetaFav(idUsuario: number, idReceta: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.recetasFavUrl}/exists?idUsuario=${idUsuario}&idReceta=${idReceta}`);
  }

}