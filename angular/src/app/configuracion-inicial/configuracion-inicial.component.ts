import { Component } from '@angular/core';
import { ToleranciaStateService } from '../services/tolerancia-state.service'; 
import { Tolerancia } from '../interfaces/tolerancia';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InfoWikiPopUpComponent } from '../info-wiki-pop-up/info-wiki-pop-up.component';
import { WIKI } from '../common/wikiEnum';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-configuracion-inicial',
  standalone: true,
  templateUrl: './configuracion-inicial.component.html',
  styleUrls: ['./configuracion-inicial.component.css'],
  imports: [FormsModule, MatButtonModule]
})
export class ConfiguracionInicialComponent {

  tolerancia: Tolerancia = {
    vegetarian: false,
    vegan: false,
    lowFodmap: false,
    glutenFree: false,
    dairyFree: false,
    ketogenic: false,
    cheap: false,
  };

  constructor(
    private router: Router,
    private toleranciaStateService: ToleranciaStateService,
    private dialogRef: MatDialog
  ) {}

  continuar() {
    this.toleranciaStateService.setTolerancia(this.tolerancia);
    console.log('Tolerancia guardada:', this.toleranciaStateService.getTolerancia());
    this.router.navigate(['/signup']);
  }

  openDialog(option: number) {
    this.dialogRef.open(InfoWikiPopUpComponent, {data: {option: option}})
  }
}