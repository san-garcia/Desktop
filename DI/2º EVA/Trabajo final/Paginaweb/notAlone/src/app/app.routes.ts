import { Routes } from '@angular/router';
import { NosotrasComponent } from './nosotras/nosotras.component';
import { UsuariasComponent } from './usuarias/usuarias.component';
import { UsuariaComponent } from './usuaria/usuaria.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MapaComponent } from './mapa/mapa.component';

export const routes: Routes = [
    { path: '', redirectTo: 'nosotras', pathMatch: 'full'},
    { path: 'nosotras', component: NosotrasComponent},
    { path: 'usuarias', component: UsuariasComponent},
    { path: 'usuaria/id', component: UsuariaComponent},
    { path: 'mapa', component: MapaComponent},
    { path: 'informacion', component: InformacionComponent}
];
