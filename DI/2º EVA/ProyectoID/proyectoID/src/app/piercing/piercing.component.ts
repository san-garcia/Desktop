import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArtistasServiceService } from '../services/artistas-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-piercing',
  imports: [CommonModule],
  templateUrl: './piercing.component.html',
  styleUrl: './piercing.component.css'
})
export class PiercingComponent {
busqueda: any;

  constructor(private route: ActivatedRoute, private artistasService: ArtistasServiceService){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.busqueda = this.artistasService.getBusquedaById(id!, 'piercings');
    
  }
}
