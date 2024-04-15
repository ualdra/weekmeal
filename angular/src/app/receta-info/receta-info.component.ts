import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-receta-info',
  standalone: true,
  imports: [NgIf, MatIconModule],
  templateUrl: './receta-info.component.html',
  styleUrl: './receta-info.component.css'
})
export class RecetaInfoComponent {

  texto: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  favorito: boolean = false;

  toggleFavorite() {
    this.favorito = !this.favorito;
  }

}
