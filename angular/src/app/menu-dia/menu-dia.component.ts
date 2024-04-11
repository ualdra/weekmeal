import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { RecetaInfoComponent } from '../receta-info/receta-info.component';
import { ColumnaDiaComponent } from '../columna-dia/columna-dia.component';

@Component({
  selector: 'app-menu-dia',
  standalone: true,
  imports: [NavbarComponent, RecetaInfoComponent, ColumnaDiaComponent],
  templateUrl: './menu-dia.component.html',
  styleUrl: './menu-dia.component.css'
})
export class MenuDiaComponent implements OnInit{
  comida: string | undefined;
  dia: number | undefined;

  constructor(private route: ActivatedRoute) { }

ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.comida = params['comida'];
      this.dia = +params['dia']; // Convierte la cadena a un número si es necesario
    });

    this.dia = 1;
    this.comida = "desayuno";

  }
}
