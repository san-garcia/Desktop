import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-usuarias',
  imports: [CommonModule],
  templateUrl: './usuarias.component.html',
  styleUrl: './usuarias.component.css'
})

export class UsuariasComponent {
  servicio : any[] = [];

  constructor(private servicioService: ServicioService){}

  ngOnInit() {
    this.servicio = this.servicioService.getUsuarias();
  }
}
