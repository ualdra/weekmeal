import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Receta, Ingrediente, Instruction } from '../interfaces/receta';
import { RecetaFav } from '../interfaces/RecetaFav';
import { RecetaService } from '../services/receta.service';
import { RecetaBackend } from '../interfaces/recetabackend';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

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
  recetaback: RecetaBackend | undefined;
  currentUser: User | null = null;

  constructor(private recetaService: RecetaService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  toggleFavorite() {
    this.favorito = !this.favorito;
    if (this.favorito && this.receta) {
      this.addRecetaFav();
    }
  }

  onImageLoad(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.classList.add('loaded');
  }

  parseRecetaData(data: any): RecetaBackend {
    // Parsea los datos de la estructura recibida del backend
    return {
      idReceta: data.id,
      nombre: data.title,
      imagen: data.image,
      descripcion: data.summary,
      pasosReceta: data.instructions
    };
  }

  addRecetaFav() {

    this.recetaback = this.parseRecetaData(this.receta);

    if (!this.recetaback) {
      return;
    }
    // Verificar si la receta ya existe en la base de datos
    this.recetaService.getRecetaById(this.recetaback.idReceta).subscribe(
      existingReceta => {
        if (!existingReceta) {
          console.warn('Receta existente:', existingReceta);
          console.warn('Receta:', this.recetaback);

          // Si la receta no existe, crearla primero
          this.recetaService.createReceta(this.recetaback!).subscribe( // <-- Utilizamos el operador '!' para indicar que estamos seguro de que receta no es undefined
            newReceta => {
              // Una vez creada la receta, crear la entrada en RecetaFav
              // this.createRecetaFav(newReceta.idReceta);
            },
            error => {
              console.error('Error al crear la receta:', error);
            }
          );
        } else {
          // Si la receta ya existe, crear la entrada en RecetaFav directamente
          // this.createRecetaFav(existingReceta.id);
        }
      },
      error => {
        console.error('Error al buscar la receta:', error);
      }
    );
  }

  // createRecetaFav(recetaId: number) {
  //   if (!this.currentUser || !this.currentUser.idUsuario) {
  //     console.error('No se encontró el usuario actual');
  //     return;
  //   }

  //   const newRecetaFav: RecetaFav = {
  //     usuario: { idUsuario: this.currentUser.idUsuario },
  //     receta: { idReceta: recetaId }
  //   };

  //   this.recetaService.createRecetaFav(newRecetaFav).subscribe(
  //     data => {
  //       console.log('Receta favorita creada:', data);
  //     },
  //     error => {
  //       console.error('Error al crear la receta favorita:', error);
  //     }
  //   );
  // }

}
