import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-columna-dia',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './columna-dia.component.html',
  styleUrl: './columna-dia.component.css'
})
export class ColumnaDiaComponent implements OnInit {
  @Input() diaSemana: number | undefined;
  nombreDia: string | undefined;
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.diaSemana !== undefined && this.diaSemana >= 0 && this.diaSemana < this.diasSemana.length) {
      this.nombreDia = this.diasSemana[this.diaSemana];
    }
  }
  
}
