import { Component } from '@angular/core';
import { RecetaInfoComponent } from '../receta-info/receta-info.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-receta-detalle',
  standalone: true,
  imports: [NavbarComponent, RecetaInfoComponent],
  templateUrl: './receta-detalle.component.html',
  styleUrl: './receta-detalle.component.css'
})
export class RecetaDetalleComponent {

}
