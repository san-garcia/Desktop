import { Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { TatuajesComponent } from './tatuajes/tatuajes.component';
import { PiercingsComponent } from './piercing/piercings.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    { path: '', redirectTo: 'header', pathMatch: 'full'},
    { path: 'footer', component: FooterComponent},
    { path: 'inicio', component: InicioComponent},
    { path: 'artistas', component: ArtistasComponent},
    { path: 'tatuajes', component: TatuajesComponent},
    { path: 'piercing', component: PiercingsComponent},
    { path: 'contacto', component: ContactoComponent}

];
