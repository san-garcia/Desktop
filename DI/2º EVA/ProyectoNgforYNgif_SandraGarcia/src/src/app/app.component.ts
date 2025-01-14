import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscoComponent } from './busco/busco.component';
import { OfrezcoComponent } from './ofrezco/ofrezco.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent, 
  InicioComponent, BuscoComponent, OfrezcoComponent, BusquedaComponent, SolicitudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'paginaFormulario';
}
