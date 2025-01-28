import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtistasServiceService } from '../services/artistas-service.service';

@Component({
  selector: 'app-piercings',
  imports: [RouterLink, CommonModule],
  templateUrl: './piercings.component.html',
  styleUrl: './piercings.component.css'
})
export class PiercingsComponent {
busquedas: any[] = [];

 constructor(private piercingsService: ArtistasServiceService) {}

 ngOnInit() {
  this.busquedas = this.piercingsService.getPiercings();
  
 }
}
