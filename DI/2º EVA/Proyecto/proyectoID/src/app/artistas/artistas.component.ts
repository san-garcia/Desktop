import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artistas',
  imports: [RouterLink],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})

export class ArtistasComponent {
 artistas = [
    { id: 'jesica', nombre: 'Jesica', especilidad: 'Especializada en: Tradicional a color/negro y blackwork', imagen: 'artistas/jessica.jpg', ig: 'jesica_36'},
    { id: 'ana', nombre: 'Ana', especilidad: 'Especializada en: Microrealismo, Fineline y Blackwork', imagen: 'artistas/ana.jpg', ig: 'anaplaza.tattoo'},
    { id: 'joni', nombre: 'Joni', especilidad: 'Especializado en: Realismo y microrealismo', imagen: 'artistas/joni.jpg', ig: 'badblood13tattoo'},
    { id: 'jota', nombre: 'Jota', especilidad: 'Especializado en: Blackwork, Dotwork e Ilustración', imagen: 'artistas/jota.jpg', ig: '13tattooer'},
    { id: 'john', nombre: 'John', especilidad: 'Especializado en: Realismo black and grey y Surrealismo color', imagen: 'artistas/john.jpg', ig: 'jhonbarrios.tattoo'},
    { id: 'yasmina', nombre: 'Yasmina', especilidad: 'Especializada en: Piercing, microdermal y gemas mentales', imagen: 'artistas/yasmina.jpg', ig: '17.yaspiercing'},
    { id: 'chaky', nombre: 'Chaky', especilidad: 'Especializado en: Lettering, Graffiti y Blackwork', imagen: 'artistas/chaky.jpg', ig: 'chakytattoo'},
    { id: 'jan', nombre: 'Jan', especilidad: 'Especializado en: Black n Gray, Geometría y Fine line', imagen: 'artistas/jan.jpg', ig: 'jan_soloink'}
 ]
}
