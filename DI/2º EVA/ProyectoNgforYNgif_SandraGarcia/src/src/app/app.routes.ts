import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscoComponent } from './busco/busco.component';
import { OfrezcoComponent } from './ofrezco/ofrezco.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

export const routes: Routes = [
    { path: '', redirectTo: 'header', pathMatch: 'full'},
    { path: 'header', component : HeaderComponent},
    { path: 'main', component : MainComponent},
    { path: 'footer', component : FooterComponent},
    { path: 'inicio', component : InicioComponent},
    { path: 'busco', component : BuscoComponent},
    { path: 'ofrezco', component : OfrezcoComponent},
    { path: 'busqueda', component : BusquedaComponent},
    { path: 'solicitud', component : SolicitudComponent}
    
    
];
