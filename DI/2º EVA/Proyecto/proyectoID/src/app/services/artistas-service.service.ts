import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistasServiceService {

  constructor() { }

  // Artistas 
  artistas = [
    { id: '1', 
      nombre: 'Jesica', 
      especilidad: 'Especializada en: Tradicional a color/negro y blackwork', 
      descripcion:'Jessica lleva muchísimo tiempo con nosotros en el estudio. Sus obras han hecho que la gente tenga su tatuaje soñado plasmado en su piel. Los colores que implementa hace que sea toda una obra maestra. Si tienes pensado realizarte un tatuaje con Jessica, ¡no lo dudes!. Te dejamos su contacto, las obras que ha hecho y algunos diseños que tiene disponible.',
      imagen: 'artistas/jessica.jpg', 
      tatuajes: 'tatuajes-jessica', 
      ig: 'jesica_36'},

    { id: '2', 
      nombre: 'Ana', 
      especilidad: 'Especializada en: Microrealismo, Fineline y Blackwork', 
      descripcion: 'Ana es una talentosa tatuadora apasionada por el arte en la piel. Especialista en Microrealismo, Fineline y Blackwork, su estilo destaca por su precisión, delicadeza y atención al detalle. Cada diseño que crea refleja su creatividad y compromiso con la calidad, ofreciendo a sus clientes piezas únicas y llenas de significado. Su habilidad para capturar emociones y momentos en tatuajes la convierte en una verdadera artista del cuerpo.', 
      imagen: 'artistas/ana.jpg', 
      tatuajes: 'tatuajes-ana',
      ig: 'anaplaza.tattoo'},

    { id: '3', 
      nombre: 'Joni', 
      especilidad: 'Especializado en: Realismo y microrealismo', 
      descripcion: 'Joni es un tatuador experto en Realismo y Microrealismo, conocido por su impresionante habilidad para transformar ideas en obras de arte hiperrealistas sobre la piel. Su talento radica en capturar cada detalle con precisión, logrando tatuajes que parecen cobrar vida. Con un enfoque perfeccionista y creativo, Joni crea piezas personalizadas que narran historias únicas y conectan profundamente con sus clientes.', 
      imagen: 'artistas/joni.jpg', 
      tatuajes: 'tatuajes-joni',
      ig: 'badblood13tattoo'},

    { id: '4', 
      nombre: 'Jota', 
      especilidad: 'Especializado en: Blackwork, Dotwork e Ilustración', 
      descripcion: 'Jota es un tatuador innovador y creativo, especializado en Blackwork, Dotwork e Ilustración. Su estilo combina la intensidad del negro con patrones detallados y texturas únicas, creando diseños que son verdaderas obras de arte. Cada tatuaje refleja su pasión por los detalles y su capacidad para convertir ideas en piezas visualmente impactantes. Jota es la elección ideal para quienes buscan un tatuaje audaz, artístico y lleno de carácter.', 
      imagen: 'artistas/jota.jpg', 
      tatuajes: 'tatuajes-jota',
      ig: '13tattooer'},

    { id: '5', 
      nombre: 'John', 
      especilidad: 'Especializado en: Realismo black and grey y Surrealismo color', 
      descripcion: 'John es un tatuador de gran talento, especializado en Realismo Black and Grey y Surrealismo a color. Su trabajo se caracteriza por la precisión en los detalles y su habilidad para dar vida a imágenes impactantes, ya sean monocromáticas o llenas de vibrantes tonalidades. Con una visión artística única, combina técnicas realistas con elementos surrealistas, creando tatuajes que son verdaderas obras maestras llenas de profundidad y creatividad.', 
      imagen: 'artistas/jhon.jpg', 
      tatuajes: 'tatuajes-jhon',
      ig: 'jhonbarrios.tattoo'},

    { id: '6', 
      nombre: 'Yasmina', 
      especilidad: 'Especializada en: Piercing, microdermal y gemas mentales', 
      descripcion: 'Yasmina es una experta en el arte del piercing, microdermal y gemas mentales, reconocida por su precisión y delicadeza. Con un enfoque personalizado, guía a cada cliente para encontrar la pieza perfecta que refleje su estilo y personalidad. Su habilidad técnica y conocimiento garantizan procedimientos seguros y resultados impecables, mientras sus diseños innovadores aportan un toque único y sofisticado. Yasmina convierte cada experiencia en un momento especial de autoexpresión y confianza.', 
      imagen: 'artistas/yasmina.jpg', 
      tatuajes: 'tatuajes-yasmina',
      ig: '17.yaspiercing'},

    { id: '7', 
      nombre: 'Chaky', 
      especilidad: 'Especializado en: Lettering, Graffiti y Blackwork', 
      descripcion: 'Chaky es un tatuador creativo y versátil, especializado en Lettering, Graffiti y Blackwork. Su habilidad para jugar con las formas y estilos de las letras le permite crear diseños únicos que transmiten personalidad y significado. Inspirado por el arte urbano, combina técnicas gráficas con la intensidad del Blackwork, logrando tatuajes audaces y llenos de carácter. Chaky es la elección ideal para quienes buscan piezas personalizadas con un estilo auténtico y moderno.', 
      imagen: 'artistas/chaky.jpg', 
      tatuajes: 'tatuajes-chaky',
      ig: 'chakytattoo'},

    { id: '8', 
      nombre: 'Jan', 
      especilidad: 'Especializado en: Black n Gray, Geometría y Fine line', 
      descripcion: 'Jan es un tatuador especializado en Black n Gray, Geometría y Fine Line, reconocido por su precisión y estilo elegante. Su trabajo destaca por la sutileza de los trazos y la armonía en los diseños, combinando técnicas minimalistas con patrones geométricos llenos de equilibrio y profundidad. Con un enfoque perfeccionista y creativo, Jan crea tatuajes que son tanto artísticos como significativos, reflejando la personalidad y visión de cada cliente.', 
      imagen: 'artistas/jan.png', 
      tatuajes: 'tatuajes-jan',
      ig: 'jan_soloink'}
  ];

  // Tatuajes
  tatuajes = [
    { id: '1', 
      nombre: 'Retratos', 
      imagen: 'tattoo/leon.PNG', 
      tatuajes: 'retratos'},

    { id: '2', 
      nombre: 'Anime', 
      imagen: 'tattoo/anime.PNG', 
      tatuajes: 'anime'},

    { id: '3', 
      nombre: 'Areas', 
      imagen: 'tattoo/areas.PNG', 
      tatuajes: 'areas'},

    { id: '4', 
      nombre: 'Mandala', 
      imagen: 'tattoo/mandala.PNG', 
      tatuajes: 'mandala'},

    { id: '5', 
      nombre: 'Covers', 
      imagen: 'tattoo/covers.PNG', 
      tatuajes: 'covers'},

    { id: '6', 
      nombre: 'Color', 
      imagen: 'tattoo/color.PNG', 
      tatuajes: 'color'},

    { id: '7', 
      nombre: 'Dibujo', 
      imagen: 'tattoo/dibujo.PNG', 
      tatuajes: 'dibujo'},

    { id: '8',
      nombre: 'Trash polka', 
      imagen: 'tattoo/trashpolka.PNG', 
      tatuajes: 'trashpolka'},

    { id: '9', 
      nombre: 'Acuarela', 
      imagen: 'tattoo/acuarela.PNG', 
      tatuajes: 'acuarela'},

    { id: '10', 
      nombre: 'Old School', 
      imagen: 'tattoo/oldschool.PNG', 
      tatuajes: 'oldschool'}
  ];

  // Piercings
  piercings = [
    { id: '1', 
      nombre: 'Gema dental', 
      imagen: 'piercing/microdermal.PNG', 
      piercings: 'gemadental'},

    { id: '2', 
      nombre: 'Oreja', 
      imagen: 'piercing/oreja.PNG', 
      piercings: 'oreja'},

    { id: '3', 
      nombre: 'Boca', 
      imagen: 'piercing/piercing.PNG', 
      piercings: 'boca'},

    { id: '4', 
      nombre: 'Dilatación', 
      imagen: 'piercing/dilatacion.PNG', 
      piercings: 'dilatacion'},

    { id: '5', 
      nombre: 'Cara', 
      imagen: 'piercing/cara.PNG', 
      piercings: 'cara'}
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
    else if(categoria === 'tatuajes') return this.tatuajes.find((busqueda) => busqueda.id === id);
    else if(categoria === 'piercings') return this.piercings.find((busqueda) => busqueda.id === id);
    else return;
  }
}
