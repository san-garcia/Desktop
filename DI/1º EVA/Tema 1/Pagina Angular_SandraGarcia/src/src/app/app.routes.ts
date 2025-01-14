import { Routes } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { DeportivasComponent } from './deportivas/deportivas.component';
import { ChandalesComponent } from './chandales/chandales.component';
import { UserComponent } from './user/user.component';
import { HeartComponent } from './heart/heart.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
    { path: '', redirectTo: 'descripcion', pathMatch: 'full'},
    { path: 'descripcion', component: DescripcionComponent },
    { path: 'camisetas', component: CamisetasComponent }, 
    { path: 'deportivas', component: DeportivasComponent},
    { path: 'chandals', component: ChandalesComponent},
    { path: 'usuario', component: UserComponent},
    { path: 'corazon', component: HeartComponent},
    { path: 'carro', component: CarritoComponent}
];
