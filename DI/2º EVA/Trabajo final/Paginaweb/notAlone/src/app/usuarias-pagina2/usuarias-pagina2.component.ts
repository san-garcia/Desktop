import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarias-pagina2',
  imports: [CommonModule, RouterLink],
  templateUrl: './usuarias-pagina2.component.html',
  styleUrl: './usuarias-pagina2.component.css'
})
export class UsuariasPagina2Component {
servicio : any[] = [];

  constructor(private servicioService: ServicioService){}

  ngOnInit() {
    this.servicio = this.servicioService.getUsuarias();
  }
}
