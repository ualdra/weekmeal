import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from '../services/receta.service';
import { Receta } from '../interfaces/receta';

@Component({
  selector: 'app-receta-info',
  standalone: true,
  imports: [NgIf, NgFor, MatIconModule],
  templateUrl: './receta-info.component.html',
  styleUrl: './receta-info.component.css'
})
export class RecetaInfoComponent implements OnInit{

  texto: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  favorito: boolean = false;
  @Input() recetaId: number | undefined;
  receta: Receta | undefined;

  constructor(
    private recetaService: RecetaService
  ) { }

  ngOnInit(): void {
    if (this.recetaId) {
      this.getReceta(this.recetaId);
    }
  }

  toggleFavorite() {
    this.favorito = !this.favorito;
  }

  getReceta(id: number): void {
    this.recetaService.getReceta(id).subscribe(receta => {
      this.receta = receta;
      console.log(receta);
    });
  }


}
