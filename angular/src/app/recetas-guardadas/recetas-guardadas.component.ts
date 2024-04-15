import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recetas-guardadas',
  standalone: true,
  imports: [NgForOf, NgIf, NavbarComponent, RouterModule],
  templateUrl: './recetas-guardadas.component.html',
  styleUrl: './recetas-guardadas.component.css'
})
export class RecetasGuardadasComponent {
  resultados: number = 30;
  pag: number = 0;
  maxPag: number = 0;

  ngOnInit(): void {
    this.maxPag = Math.floor(this.resultados/this.resultadosMaxPg);
  }

  resultadosMaxPg: number = 14;
  
  paginaResultado(): any[] { //Adaptar cuándo haya API
    var num: number = this.resultados - this.pag*this.resultadosMaxPg 
    if(num > this.resultadosMaxPg){
      num = this.resultadosMaxPg;
    }
    return Array(num).fill(0).map((x, i) => i); //función de test Alejandro -> Reemplazar
  }
}
