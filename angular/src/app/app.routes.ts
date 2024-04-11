import { Routes } from '@angular/router';
// import { InicioComponent } from './inicio/inicio.component';
import { MenuSemanalComponent } from './menu-semanal/menu-semanal.component';
import { MenuDiaComponent } from './menu-dia/menu-dia.component';

export const routes: Routes = [
    { path: '', redirectTo: '/menudia', pathMatch: 'full' },
    // { path: 'inicio', component: InicioComponent },
    { path: 'menusemanal', component: MenuSemanalComponent},
    { path: 'menudia', component: MenuDiaComponent },
];
