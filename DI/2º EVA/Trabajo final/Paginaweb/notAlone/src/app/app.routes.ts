import { Routes } from '@angular/router';
import { NosotrasComponent } from './nosotras/nosotras.component';
import { UsuariasComponent } from './usuarias/usuarias.component';
import { UsuariaComponent } from './usuaria/usuaria.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MapaComponent } from './mapa/mapa.component';
import { InicioComponent } from './inicio/inicio.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuariasPagina2Component } from './usuarias-pagina2/usuarias-pagina2.component';


export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent},
    { path: 'nosotras', component: NosotrasComponent},
    { path: 'usuarias', component: UsuariasComponent},
    { path: 'usuariaspage2', component: UsuariasPagina2Component},
    { path: 'usuaria/:id', component: UsuariaComponent},
    { path: 'mapa', component: MapaComponent},
    { path: 'informacion', component: InformacionComponent},
    { path: 'sesion', component: SesionComponent},
    { path: 'registro', component: RegistroComponent}
];
