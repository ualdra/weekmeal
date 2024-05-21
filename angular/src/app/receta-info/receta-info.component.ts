import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RecetaService } from '../services/receta.service';
import { Receta, Ingrediente, Instruction } from '../interfaces/receta';

@Component({
  selector: 'app-receta-info',
  standalone: true,
  imports: [NgIf, NgFor, MatIconModule],
  templateUrl: './receta-info.component.html',
  styleUrls: ['./receta-info.component.css']
})
export class RecetaInfoComponent implements OnInit {

  favorito: boolean = false;
  @Input() receta: Receta | undefined;

  constructor(private recetaService: RecetaService) { }

  ngOnInit(): void {
    console.log("receta", this.receta);
    console.log("receta", this.receta?.analyzedInstructions);
    console.log("receta", this.receta?.analyzedInstructions[0].steps);
  }

  toggleFavorite() {
    this.favorito = !this.favorito;
  }
}
