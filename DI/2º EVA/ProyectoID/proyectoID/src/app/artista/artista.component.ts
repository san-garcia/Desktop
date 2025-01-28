import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArtistasServiceService } from '../services/artistas-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  imports: [CommonModule],
  templateUrl: './artista.component.html',
  styleUrl: './artista.component.css'
})

export class ArtistaComponent {
  busqueda: any;

  constructor(private route: ActivatedRoute, private artistasService: ArtistasServiceService){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.busqueda = this.artistasService.getBusquedaById(id!, 'artistas');
    
  }
}
