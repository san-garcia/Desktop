import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarias',
  imports: [CommonModule, RouterLink],
  templateUrl: './usuarias.component.html',
  styleUrl: './usuarias.component.css'
})

export class UsuariasComponent implements OnInit{
  servicio : any[] = [];

  constructor(private servicioService: ServicioService){}

  ngOnInit() {
    this.servicio = this.servicioService.getUsuarias();
  }
}
