import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { User } from '../interfaces/user';
import { Tolerancia } from '../interfaces/tolerancia';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api';
  private currentUserSubject: BehaviorSubject<User | null>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
  }

  get currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  setCurrentUser(user: User | null) {
    this.currentUserSubject.next(user);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/usuario`, user);
  }

  login(credentials: { usuario: string, contrasena: string }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/usuario/login`, credentials).pipe(
      tap(user => this.setCurrentUser(user))
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/usuario/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/usuario/${user.idUsuario}`, user);
  }

  getUserTolerancias(id: number): Observable<Tolerancia> {
    return this.http.get<Tolerancia>(`${this.apiUrl}/tolerancias/${id}`);
  }

  updateUserTolerancias(tolerancias: Tolerancia): Observable<any> {
    return this.http.put(`${this.apiUrl}/tolerancias/${tolerancias.idTolerancia}`, tolerancias);
  }
}
