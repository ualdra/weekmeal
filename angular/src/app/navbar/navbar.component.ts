import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  username: string = 'NombreDeUsuario';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  buscar(inputValue: string) {
    if (inputValue.trim() !== '') {
      this.router.navigate(['/buscar-receta'], { queryParams: { query: inputValue } });
    }
  }

  irAPerfil() {
    this.router.navigate(['/perfil']);
  }
}
