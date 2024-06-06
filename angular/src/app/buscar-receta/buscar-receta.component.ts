import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buscar-receta',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './buscar-receta.component.html',
  styleUrls: ['./buscar-receta.component.css']
})
export class BuscarRecetaComponent implements OnInit {
  resultados: any[] = [];
  query: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      if (this.query) {
        this.buscarRecetas(this.query);
      }
    });
  }

  buscarRecetas(query: string): void {
    const apiKey = '17262177eb36463d8142d3ec41cc8893';
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey}`;

    this.http.get(url).subscribe((response: any) => {
      this.resultados = response.results;
    });
  }
}
