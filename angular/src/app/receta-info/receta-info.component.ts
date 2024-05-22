import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Receta, Ingrediente, Instruction } from '../interfaces/receta';

@Component({
  selector: 'app-receta-info',
  standalone: true,
  imports: [NgIf, NgFor, MatIconModule],
  templateUrl: './receta-info.component.html',
  styleUrls: ['./receta-info.component.css']
})
export class RecetaInfoComponent {

  favorito: boolean = false;
  @Input() receta: Receta | undefined;

  constructor() { }

  toggleFavorite() {
    this.favorito = !this.favorito;
  }

  onImageLoad(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.classList.add('loaded');
  }

}
