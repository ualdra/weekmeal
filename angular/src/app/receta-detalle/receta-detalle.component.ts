import { Component, OnInit } from '@angular/core';
import { RecetaInfoComponent } from '../receta-info/receta-info.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RecetaService } from '../services/receta.service';
import { ActivatedRoute } from '@angular/router';
import { Receta } from '../interfaces/receta';

@Component({
  selector: 'app-receta-detalle',
  standalone: true,
  imports: [NavbarComponent, RecetaInfoComponent],
  templateUrl: './receta-detalle.component.html',
  styleUrl: './receta-detalle.component.css'
})

export class RecetaDetalleComponent implements OnInit {
  receta: Receta | undefined;

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService
  ) { }

  ngOnInit(): void {
    this.getReceta();
  }

  getReceta(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recetaService.getReceta(id)
      .subscribe(receta => {
        this.receta = receta;
      }
      );
  }

}
