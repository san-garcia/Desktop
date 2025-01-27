import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtistasServiceService } from '../services/artistas-service.service';

@Component({
  selector: 'app-artistas',
  imports: [RouterLink, CommonModule],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})

export class ArtistasComponent {
 busquedas: any[] = [];

 constructor(private artistasService: ArtistasServiceService) {}

 ngOnInit() {
  this.busquedas = this.artistasService.getArtistas();
  
 }
}
