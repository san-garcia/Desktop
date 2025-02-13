import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  // Usuarias 
  usuarias = 
    [
      {
        id: '1',
        nombre: 'Mía',
        apellidos: 'Rodriguez',
        pop: 'imagen de estrellas',
        img: 'img/mia.png',
        ultvezconectada: 'En línea',
        ubi: 'Valencia - Ruzafa',
        desc: 'Apasionada de la fotografía y los viajes.',
        telefono: '612345678'
      },
      {
        id: '2',
        nombre: 'Lia',
        apellidos: 'Fernández',
        pop: 'imagen de estrellas',
        img: 'img/lia.png',
        ultvezconectada: 'Hace 10 minutos',
        ubi: 'Valencia - El Carmen',
        desc: 'Diseñadora gráfica y amante del arte urbano.',
        telefono: '623456789'
      },
      {
        id: '3',
        nombre: 'Noa',
        apellidos: 'Martín',
        pop: 'imagen de estrellas',
        img: 'img/noa.png',
        ultvezconectada: 'Hace 2 horas',
        ubi: 'Murcia - La Flota',
        desc: 'Estudiante de ingeniería, fan del senderismo.',
        telefono: '634567890'
      },
      {
        id: '4',
        nombre: 'Zoe',
        apellidos: 'Castillo',
        pop: 'imagen de estrellas',
        img: 'img/zoe.png',
        ultvezconectada: 'En línea',
        ubi: 'Murcia - Santa Eulalia',
        desc: 'Apasionada del yoga y la cocina saludable.',
        telefono: '645678901'
      },
      {
        id: '5',
        nombre: 'Ava',
        apellidos: 'Gómez',
        pop: 'imagen de estrellas',
        img: 'img/ava.png',
        ultvezconectada: 'Hace 30 minutos',
        ubi: 'Barcelona - Gracia',
        desc: 'Amante de los gatos y la música indie.',
        telefono: '656789012'
      },
      {
        id: '6',
        nombre: 'Isla',
        apellidos: 'Moreno',
        pop: 'imagen de estrellas',
        img: 'img/isla.png',
        ultvezconectada: 'Hace 5 horas',
        ubi: 'Barcelona - Eixample',
        desc: 'Le encanta el teatro y la literatura.',
        telefono: '667890123'
      },
      {
        id: '7',
        nombre: 'Naya',
        apellidos: 'Torres',
        pop: 'imagen de estrellas',
        img: 'img/naya.png',
        ultvezconectada: 'Hace 20 minutos',
        ubi: 'Zaragoza - Casco Antiguo',
        desc: 'Entrenadora personal, apasionada del fitness.',
        telefono: '678901234'
      },
      {
        id: '8',
        nombre: 'Elara',
        apellidos: 'Sánchez',
        pop: 'imagen de estrellas',
        img: 'img/elara.png',
        ultvezconectada: 'Hace 1 hora',
        ubi: 'Zaragoza - Delicias',
        desc: 'Le encanta viajar y aprender nuevos idiomas.',
        telefono: '689012345'
      },
      {
        id: '9',
        nombre: 'Tessa',
        apellidos: 'Navarro',
        pop: 'imagen de estrellas',
        img: 'img/tessa.png',
        ultvezconectada: 'Hace 3 días',
        ubi: 'Madrid - Malasaña',
        desc: 'Artista callejera y pintora muralista.',
        telefono: '690123456'
      },
      {
        id: '10',
        nombre: 'Vera',
        apellidos: 'Domínguez',
        pop: 'imagen de estrellas',
        img: 'img/vera.png',
        ultvezconectada: 'En línea',
        ubi: 'Madrid - Chamberí',
        desc: 'Fanática del café y la escritura creativa.',
        telefono: '601234567'
      },
      {
        id: '11',
        nombre: 'Kai',
        apellidos: 'Ramírez',
        pop: 'imagen de estrellas',
        img: 'img/kai.png',
        ultvezconectada: 'Hace 4 horas',
        ubi: 'Valencia - Benimaclet',
        desc: 'Músico y productor de electrónica.',
        telefono: '612345678'
      },
      {
        id: '12',
        nombre: 'Sienna',
        apellidos: 'Álvarez',
        pop: 'imagen de estrellas',
        img: 'img/sienna.png',
        ultvezconectada: 'Hace 2 horas',
        ubi: 'Murcia - San Antón',
        desc: 'Amante del cine clásico y la moda vintage.',
        telefono: '623456789'
      },
      {
        id: '13',
        nombre: 'Nova',
        apellidos: 'Mendoza',
        pop: 'imagen de estrellas',
        img: 'img/nova.png',
        ultvezconectada: 'Hace 10 minutos',
        ubi: 'Barcelona - El Born',
        desc: 'Influencer de viajes y bloguera.',
        telefono: '634567890'
      },
      {
        id: '14',
        nombre: 'Luca',
        apellidos: 'Hernández',
        pop: 'imagen de estrellas',
        img: 'img/luca.png',
        ultvezconectada: 'Hace 5 días',
        ubi: 'Zaragoza - Universidad',
        desc: 'Fotógrafo de naturaleza y paisajes urbanos.',
        telefono: '645678901'
      },
      {
        id: '15',
        nombre: 'Ivy',
        apellidos: 'Ortega',
        pop: 'imagen de estrellas',
        img: 'img/ivy.png',
        ultvezconectada: 'Hace 1 día',
        ubi: 'Madrid - Lavapiés',
        desc: 'Escritora de poesía y activista social.',
        telefono: '656789012'
      }, 
      {
        id: '16',
        nombre: 'Luna',
        apellidos: 'Fernández',
        pop: 'imagen de estrellas',
        img: 'img/luna.png',
        ultvezconectada: 'En línea',
        ubi: 'Barcelona - El Raval',
        desc: 'Diseñadora gráfica y amante del arte urbano.',
        telefono: '612345678'
      },
      {
        id: '17',
        nombre: 'Sofía',
        apellidos: 'Martínez',
        pop: 'imagen de estrellas',
        img: 'img/sofia.png',
        ultvezconectada: 'Hace 2 horas',
        ubi: 'Valencia - Ruzafa',
        desc: 'Fotógrafa profesional con pasión por la naturaleza.',
        telefono: '622334455'
      },
      {
        id: '18',
        nombre: 'Camila',
        apellidos: 'Ruiz',
        pop: 'imagen de estrellas',
        img: 'img/camila.png',
        ultvezconectada: 'Hace 30 minutos',
        ubi: 'Sevilla - Triana',
        desc: 'Cantante y compositora de música indie.',
        telefono: '633445566'
      },
      {
        id: '19',
        nombre: 'Elena',
        apellidos: 'Gómez',
        pop: 'imagen de estrellas',
        img: 'img/elena.png',
        ultvezconectada: 'Hace 3 días',
        ubi: 'Bilbao - Casco Viejo',
        desc: 'Programadora y entusiasta de la inteligencia artificial.',
        telefono: '644556677'
      },
      {
        id: '20',
        nombre: 'Valeria',
        apellidos: 'Torres',
        pop: 'imagen de estrellas',
        img: 'img/valeria.png',
        ultvezconectada: 'Hace 5 horas',
        ubi: 'Granada - Albaicín',
        desc: 'Bailarina de flamenco y profesora de danza.',
        telefono: '655667788'
      },
      {
        id: '21',
        nombre: 'Clara',
        apellidos: 'Hernández',
        pop: 'imagen de estrellas',
        img: 'img/clara.png',
        ultvezconectada: 'Hace 2 semanas',
        ubi: 'Zaragoza - Centro',
        desc: 'Chef y creadora de contenido gastronómico.',
        telefono: '666778899'
      },
      {
        id: '22',
        nombre: 'Diego',
        apellidos: 'Sánchez',
        pop: 'imagen de estrellas',
        img: 'img/diego.png',
        ultvezconectada: 'Hace 1 día',
        ubi: 'Madrid - Chueca',
        desc: 'Ilustrador y muralista callejero.',
        telefono: '677889900'
      },
      {
        id: '23',
        nombre: 'Hugo',
        apellidos: 'Ramírez',
        pop: 'imagen de estrellas',
        img: 'img/hugo.png',
        ultvezconectada: 'Hace 8 horas',
        ubi: 'Barcelona - Gràcia',
        desc: 'Músico y productor de ritmos electrónicos.',
        telefono: '688990011'
      },
      {
        id: '24',
        nombre: 'Marcos',
        apellidos: 'López',
        pop: 'imagen de estrellas',
        img: 'img/marcos.png',
        ultvezconectada: 'En línea',
        ubi: 'Valencia - El Carmen',
        desc: 'Desarrollador de videojuegos y entusiasta del cosplay.',
        telefono: '699001122'
      },
      {
        id: '25',
        nombre: 'Isabella',
        apellidos: 'Pérez',
        pop: 'imagen de estrellas',
        img: 'img/isabella.png',
        ultvezconectada: 'Hace 4 horas',
        ubi: 'Sevilla - Santa Cruz',
        desc: 'Actriz de teatro independiente.',
        telefono: '611223344'
      },
      {
        id: '26',
        nombre: 'Renata',
        apellidos: 'Vargas',
        pop: 'imagen de estrellas',
        img: 'img/renata.png',
        ultvezconectada: 'Hace 6 días',
        ubi: 'Málaga - Soho',
        desc: 'Diseñadora de moda y creadora de tendencias.',
        telefono: '622334455'
      },
      {
        id: '27',
        nombre: 'Gabriel',
        apellidos: 'Ortega',
        pop: 'imagen de estrellas',
        img: 'img/gabriel.png',
        ultvezconectada: 'Hace 12 horas',
        ubi: 'Bilbao - Indautxu',
        desc: 'Cineasta y productor audiovisual.',
        telefono: '633445566'
      },
      {
        id: '28',
        nombre: 'Amelia',
        apellidos: 'Navarro',
        pop: 'imagen de estrellas',
        img: 'img/amelia.png',
        ultvezconectada: 'En línea',
        ubi: 'Madrid - Malasaña',
        desc: 'Periodista y creadora de pódcast.',
        telefono: '611334455'
      }

  ]

  // Get
  getUsuarias(){
    return this.usuarias;
  }

  getServicioById(id: string, usuarias: string) {
    if(usuarias === 'usuarias') return this.usuarias.find((servicio) => servicio.id === id);
    else return;
  }
}
