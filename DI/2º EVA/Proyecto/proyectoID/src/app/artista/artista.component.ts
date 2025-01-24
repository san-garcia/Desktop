import { Component } from '@angular/core';

@Component({
  selector: 'app-artista',
  imports: [],
  templateUrl: './artista.component.html',
  styleUrl: './artista.component.css'
})

export class ArtistaComponent {
  static artistas = [
    { nombre: 'Jesica', especilidad: 'Especializada en: Tradicional a color/negro y blackwork', imagen: 'artistas/jessica.jpg', ig: 'jesica_36'},
    { nombre: 'Ana', especilidad: 'Especializada en: Microrealismo, Fineline y Blackwork', imagen: 'artistas/ana.jpg', ig: 'anaplaza.tattoo'},
    { nombre: 'Joni', especilidad: 'Especializado en: Realismo y microrealismo', imagen: 'artistas/joni.jpg', ig: 'badblood13tattoo'},
    { nombre: 'Jota', especilidad: 'Especializado en: Blackwork, Dotwork e Ilustración', imagen: 'artistas/jota.jpg', ig: '13tattooer'},
    { nombre: 'John', especilidad: 'Especializado en: Realismo black and grey y Surrealismo color', imagen: 'artistas/john.jpg', ig: 'jhonbarrios.tattoo'},
    { nombre: 'Yasmina', especilidad: 'Especializada en: Piercing, microdermal y gemas mentales', imagen: 'artistas/yasmina.jpg', ig: '17.yaspiercing'},
    { nombre: 'Chaky', especilidad: 'Especializado en: Lettering, Graffiti y Blackwork', imagen: 'artistas/chaky.jpg', ig: 'chakytattoo'},
    { nombre: 'Jan', especilidad: 'Especializado en: Black n Gray, Geometría y Fine line', imagen: 'artistas/jan.jpg', ig: 'jan_soloink'}
  ]
}
