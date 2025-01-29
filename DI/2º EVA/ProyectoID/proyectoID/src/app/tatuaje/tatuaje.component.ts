import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistasServiceService } from '../services/artistas-service.service';

@Component({
  selector: 'app-tatuaje',
  imports: [CommonModule],
  templateUrl: './tatuaje.component.html',
  styleUrl: './tatuaje.component.css'
})
export class TatuajeComponent {
busqueda: any;

  constructor(private route: ActivatedRoute, private tatuajesService: ArtistasServiceService){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.busqueda = this.tatuajesService.getBusquedaById(id!, 'tatuajes');
    
  }
}
