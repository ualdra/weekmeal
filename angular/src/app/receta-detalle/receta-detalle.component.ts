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

  recetaId: number | undefined;


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.recetaId = Number(this.route.snapshot.paramMap.get('id'));
  }



}
