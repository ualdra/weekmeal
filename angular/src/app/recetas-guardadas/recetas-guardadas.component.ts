import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RecetaService } from '../services/receta.service';
import { RecetaFav } from '../interfaces/RecetaFav';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-recetas-guardadas',
  standalone: true,
  imports: [NgForOf, NgIf, NavbarComponent, RouterModule],
  templateUrl: './recetas-guardadas.component.html',
  styleUrls: ['./recetas-guardadas.component.css']
})
export class RecetasGuardadasComponent implements OnInit {
  resultados: number = 15;
  pag: number = 0;
  maxPag: number = 0;
  recetasFav: any[] = [];
  currentUser: User | null = null;
  resultadosMaxPg: number = 12;

  constructor(private recetaService: RecetaService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser) {
        this.getRecetasFavoritas();
      }
    });
  }

  nextPage(): void {
    if (this.pag + 1 <= this.maxPag) {
      this.pag += 1;
    }
  }

  previousPage(): void {
    if (this.pag - 1 >= 0) {
      this.pag -= 1;
    }
  }

  paginaResultado(): number[] {
    const start = this.pag * this.resultadosMaxPg;
    return Array.from({ length: Math.min(this.resultadosMaxPg, this.recetasFav.length - start) }, (_, i) => start + i);
  }

  getRecetasFavoritas(): void {
    if (this.currentUser) {
      this.recetaService.getRecetasFavByUsuario(this.currentUser?.idUsuario!)
        .subscribe(
          recetasFav => {
            this.recetasFav = recetasFav;
            this.maxPag = Math.floor((this.recetasFav.length - 1) / this.resultadosMaxPg);
          },
          error => console.error('Error al obtener recetas favoritas', error)
        );
    }
  }
}
