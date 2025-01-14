import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { ChandalesComponent } from './chandales/chandales.component';
import { DeportivasComponent } from './deportivas/deportivas.component';
import { UserComponent } from './user/user.component';
import { HeartComponent } from './heart/heart.component';
import { CarritoComponent } from './carrito/carrito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DescripcionComponent, CamisetasComponent, 
  ChandalesComponent, DeportivasComponent, UserComponent, HeartComponent, CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'paginaAngular';
}
