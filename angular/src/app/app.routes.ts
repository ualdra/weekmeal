import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuSemanalComponent } from './menu-semanal/menu-semanal.component';
import { MenuDiaComponent } from './menu-dia/menu-dia.component';
import { RecetaDetalleComponent } from './receta-detalle/receta-detalle.component';
import { BuscarRecetaComponent } from './buscar-receta/buscar-receta.component';
import { RecetasGuardadasComponent } from './recetas-guardadas/recetas-guardadas.component';
import { VistaInicialComponent } from './vista-inicial/vista-inicial.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'menu-semanal', component: MenuSemanalComponent},
    { path: 'menu-dia/:dia/:comida', component: MenuDiaComponent },
    { path: 'receta-detalle', component: RecetaDetalleComponent },
    { path: 'buscar-receta', component: BuscarRecetaComponent },
    { path: 'recetas-guardadas', component: RecetasGuardadasComponent },
    { path: 'vista-inicial', component: VistaInicialComponent},
];
