import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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

export class RecetaDetalleComponent implements OnInit, AfterViewInit  {
  receta: Receta | undefined;

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService, private el: ElementRef, private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.getReceta();
  }

  ngAfterViewInit() {
    setTimeout(() => {
        this.checkOverflow();
    },300); // Espera 1 segundo
  }

  getReceta(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recetaService.getReceta(id)
      .subscribe(receta => {
        this.receta = receta;
      }
      );
  }

  checkOverflow() {
    const container = this.el.nativeElement.querySelector('.container');
    if (container.scrollHeight > container.clientHeight) {
      this.renderer.addClass(container, 'overflow');
    } else {
      this.renderer.removeClass(container, 'overflow');
    }
  }


}
