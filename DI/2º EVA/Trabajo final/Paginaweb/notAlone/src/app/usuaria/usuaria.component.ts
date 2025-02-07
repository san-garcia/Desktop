import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuaria',
  imports: [CommonModule],
  templateUrl: './usuaria.component.html',
  styleUrl: './usuaria.component.css'
})

export class UsuariaComponent {
  servicio: any;

  constructor(private route: ActivatedRoute, private servicioService: ServicioService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.servicio = this.servicioService.getServicioById(id!,'usuarias');
  }
}
