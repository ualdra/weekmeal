import { Routes } from '@angular/router';
import { MenuSemanalComponent } from './menu-semanal/menu-semanal.component';
import { MenuDiaComponent } from './menu-dia/menu-dia.component';

export const routes: Routes = [
    { path: '', redirectTo: '/menu-semanal', pathMatch: 'full' },
    { path: 'menu-semanal', component: MenuSemanalComponent},
    { path: 'menu-dia/:dia/:comida', component: MenuDiaComponent },
];
