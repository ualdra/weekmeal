import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../interfaces/user';
import { MatDialog, MatDialogRef, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import { Tolerancia } from '../interfaces/tolerancia';
import { UserService } from '../services/user.service';
import { ToleranciaService } from '../services/tolerancia.service';
import { MatButtonModule } from '@angular/material/button';
import { InfoWikiPopUpComponent } from '../info-wiki-pop-up/info-wiki-pop-up.component';

@Component({
  selector: 'app-perfil-datos-alimenticios',
  standalone: true,
  templateUrl: './perfil-datos-alimenticios.component.html',
  styleUrls: ['./perfil-datos-alimenticios.component.css'],
  imports: [NavbarComponent, FormsModule, CommonModule, RouterModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent]
})
export class PerfilDatosAlimenticiosComponent implements OnInit {
  currentUser: User | null = null;
  tolerancia: Tolerancia | null = null;

  constructor(private userService: UserService, private toleranciaService: ToleranciaService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log('Usuario actual en ngOnInit:', this.currentUser); // Depuración inicial
      if (this.currentUser) {
        this.loadTolerancias();
      }
    });
  }

  loadTolerancias(): void {

    this.toleranciaService.getToleranciaByUserId(this.currentUser!.idUsuario!).subscribe(
      data => {
        console.log('Datos de las tolerancias recibidos:', data);
        this.tolerancia = data;
        console.log('Tolerancia después de asignación:', this.tolerancia);
      },
      error => {
        console.error('Error al cargar las tolerancias del usuario', error);
      }
    );
  }

  guardarCambios(): void {
    if (this.tolerancia) {
      console.log('Guardando cambios para la tolerancia con ID:', this.tolerancia.idTolerancia);
      console.log('Datos de tolerancia antes de guardar:', this.tolerancia);
      this.userService.updateUserTolerancias(this.tolerancia).subscribe(
        response => {
          console.log('Cambios guardados exitosamente:', response);
        },
        error => {
          console.error('Error al guardar los cambios:', error);
        }
      );
    } else {
      console.error('No hay tolerancias para guardar');
    }
  }
  openDialog(option: number) {
    this.dialogRef.open(InfoWikiPopUpComponent, {data: {option: option}})
  }
}
