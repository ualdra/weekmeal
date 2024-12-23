import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  titulo: string =  "WeekMeal";
  descripcion: string =  "¡Descubre la frescura y variedad cada semana con WeekMeal, tu destino para sabores emocionantes y comidas deliciosas! Descubre tu menú ideal";
  login: string =  "Log in";
  signup: string =  "Sign up";
}
