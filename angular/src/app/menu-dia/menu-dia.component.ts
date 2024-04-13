import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { RecetaInfoComponent } from '../receta-info/receta-info.component';
import { ColumnaDiaComponent } from '../columna-dia/columna-dia.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-dia',
  standalone: true,
  imports: [NavbarComponent, RecetaInfoComponent, ColumnaDiaComponent, RouterModule],
  templateUrl: './menu-dia.component.html',
  styleUrl: './menu-dia.component.css'
})
export class MenuDiaComponent implements OnInit {
  comida: string | undefined;
  dia: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Acceder a los parámetros de la URL
    this.route.params.subscribe(params => {
      this.dia = params['dia'];
      this.comida = params['comida'];
    });
  }
  
}
