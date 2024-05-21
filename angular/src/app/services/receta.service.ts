import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Receta } from '../interfaces/receta';

@Injectable({
  providedIn: 'root'
})

export class RecetaService {

  private backend = 'http://localhost:8080/api';  
  private recetasUrl = 'https://api.spoonacular.com/recipes';

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

  

}