import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuSemanalComponent } from './menu-semanal/menu-semanal.component';
import { MenuDiaComponent } from './menu-dia/menu-dia.component';
import { RecetaDetalleComponent } from './receta-detalle/receta-detalle.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'menu-semanal', component: MenuSemanalComponent},
    { path: 'menu-dia/:dia/:comida', component: MenuDiaComponent },
    { path: 'receta-detalle', component: RecetaDetalleComponent },
];
