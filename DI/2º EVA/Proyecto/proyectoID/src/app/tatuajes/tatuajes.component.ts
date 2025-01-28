import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtistasServiceService } from '../services/artistas-service.service';

@Component({
  selector: 'app-tatuajes',
  imports: [RouterLink, CommonModule],
  templateUrl: './tatuajes.component.html',
  styleUrl: './tatuajes.component.css'
})
export class TatuajesComponent {
busquedas: any[] = [];

 constructor(private tatuajesService: ArtistasServiceService) {}

 ngOnInit() {
  this.busquedas = this.tatuajesService.getTatuajes();
  
 }
}
