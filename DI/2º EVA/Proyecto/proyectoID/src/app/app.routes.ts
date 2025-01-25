import { Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { ArtistaComponent } from './artista/artista.component';
import { TatuajesComponent } from './tatuajes/tatuajes.component';
import { TatuajeComponent } from './tatuaje/tatuaje.component';
import { PiercingsComponent } from './piercings/piercings.component';
import { PiercingComponent } from './piercing/piercing.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'header', component: HeaderComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'inicio', component: InicioComponent},
    { path: 'artistas', component: ArtistasComponent},
    { path: 'artista/id', component: ArtistaComponent},
    { path: 'tatuajes', component: TatuajesComponent},
    { path: 'tatuaje', component: TatuajeComponent},
    { path: 'piercings', component: PiercingsComponent},
    { path: 'piercing', component: PiercingComponent},
    { path: 'contacto', component: ContactoComponent}

];
