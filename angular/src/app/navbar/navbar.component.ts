import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  username: string = 'NombreDeUsuario';

  constructor() { }

  ngOnInit(): void {
  }
}
