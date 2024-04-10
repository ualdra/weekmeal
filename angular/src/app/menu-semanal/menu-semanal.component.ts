import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ColumnaDiaComponent } from '../columna-dia/columna-dia.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu-semanal',
  standalone: true,
  imports: [NgFor, NavbarComponent, ColumnaDiaComponent],
  templateUrl: './menu-semanal.component.html',
  styleUrl: './menu-semanal.component.css'
})
export class MenuSemanalComponent {


}
