import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistasServiceService {

  constructor() { }

  // Artistas 
  artistas = [
    { id: '1', nombre: 'Jesica', especilidad: 'Especializada en: Tradicional a color/negro y blackwork', descripcion:'Jessica lleva muchísimo tiempo con nosotros en el estudio. Sus obras han hecho que la gente tenga su tatuaje soñado plasmado en su piel. Los colores que implementa hace que sea toda una obra maestra. Si tienes pensado realizarte un tatuaje con Jessica, ¡no lo dudes!. Te dejamos su contacto, las obras que ha hecho y algunos diseños que tiene disponible.' ,imagen: 'artistas/jessica.jpg', tatuajes: 'tatuajes-jessica', ig: 'jesica_36'},
    { id: '2', nombre: 'Ana', especilidad: 'Especializada en: Microrealismo, Fineline y Blackwork', imagen: 'artistas/ana.jpg', tatuajes: 'tatuajes-ana',ig: 'anaplaza.tattoo'},
    { id: '3', nombre: 'Joni', especilidad: 'Especializado en: Realismo y microrealismo', imagen: 'artistas/joni.jpg', tatuajes: 'tatuajes-joni',ig: 'badblood13tattoo'},
    { id: '4', nombre: 'Jota', especilidad: 'Especializado en: Blackwork, Dotwork e Ilustración', imagen: 'artistas/jota.jpg', tatuajes: 'tatuajes-jota',ig: '13tattooer'},
    { id: '5', nombre: 'John', especilidad: 'Especializado en: Realismo black and grey y Surrealismo color', imagen: 'artistas/jhon.jpg', tatuajes: 'tatuajes-jhon',ig: 'jhonbarrios.tattoo'},
    { id: '6', nombre: 'Yasmina', especilidad: 'Especializada en: Piercing, microdermal y gemas mentales', imagen: 'artistas/yasmina.jpg', tatuajes: 'tatuajes-yasmina',ig: '17.yaspiercing'},
    { id: '7', nombre: 'Chaky', especilidad: 'Especializado en: Lettering, Graffiti y Blackwork', imagen: 'artistas/chaky.jpg', tatuajes: 'tatuajes-chaky',ig: 'chakytattoo'},
    { id: '8', nombre: 'Jan', especilidad: 'Especializado en: Black n Gray, Geometría y Fine line', imagen: 'artistas/jan.png', tatuajes: 'tatuajes-jan',ig: 'jan_soloink'}
  ];
  // Tatuajes
  tatuajes = [

  ];
  // Piercings
  piercings = [

  ];

  // Getters 
  getArtistas(){
    return this.artistas
  }

  getTatuajes(){
    return this.tatuajes
  }

  getPiercings(){
    return this.piercings
  }

  getBusquedaById(id: string, categoria: string) {
    if(categoria === 'artistas') return this.artistas.find((busqueda) => busqueda.id === id);
    else if(categoria === 'tatuajes') return this.artistas.find((busqueda) => busqueda.id === id);
    else if(categoria === 'piercings') return this.artistas.find((busqueda) => busqueda.id === id);
    else return;
  }
}
