import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  valoraciones = [
    'valoracion1.png',
    'valoracion2.png',
    'valoracion3.png',
    'valoracion4.png',
    'valoracion5.png'
  ];
  
  // Usuarias 
  usuarias = 
    [
      {
        id: '1',
        nombre: 'Mía',
        apellidos: 'Rodriguez',
        pop: 'imagen de valoracions',
        img: 'img/mia.png',
        ultvezconectada: 'En línea',
        ubi: 'Valencia  Ruzafa',
        desc: 'Apasionada de la fotografía y los viajes.',
        telefono: '612 345 678'
      },
      {
        id: '2',
        nombre: 'Lia',
        apellidos: 'Fernández',
        pop: 'imagen de valoracions',
        img: 'img/lia.png',
        ultvezconectada: 'Hace 10 minutos',
        ubi: 'Valencia  El Carmen',
        desc: 'Diseñadora gráfica y amante del arte urbano.',
        telefono: '623 456 789'
      },
      {
        id: '3',
        nombre: 'Noa',
        apellidos: 'Martín',
        pop: 'imagen de valoracions',
        img: 'img/noa.png',
        ultvezconectada: 'Hace 2 horas',
        ubi: 'Murcia  La Flota',
        desc: 'Estudiante de ingeniería, fan del senderismo.',
        telefono: '634 567 890'
      },
      {
        id: '4',
        nombre: 'Zoe',
        apellidos: 'Castillo',
        pop: 'imagen de valoracions',
        img: 'img/zoe.png',
        ultvezconectada: 'En línea',
        ubi: 'Murcia  Santa Eulalia',
        desc: 'Apasionada del yoga y la cocina saludable.',
        telefono: '645 678 901'
      },
      {
        id: '5',
        nombre: 'Ava',
        apellidos: 'Gómez',
        pop: 'imagen de valoracions',
        img: 'img/ava.png',
        ultvezconectada: 'Hace 30 minutos',
        ubi: 'Barcelona  Gracia',
        desc: 'Amante de los gatos y la música indie.',
        telefono: '656 789 012'
      },
      {
        id: '6',
        nombre: 'Isla',
        apellidos: 'Moreno',
        pop: 'imagen de valoracions',
        img: 'img/isla.png',
        ultvezconectada: 'Hace 5 horas',
        ubi: 'Barcelona  Eixample',
        desc: 'Le encanta el teatro y la literatura.',
        telefono: '667 890 123'
      },
      {
        id: '7',
        nombre: 'Naya',
        apellidos: 'Torres',
        pop: 'imagen de valoracions',
        img: 'img/naya.png',
        ultvezconectada: 'Hace 20 minutos',
        ubi: 'Zaragoza  Casco Antiguo',
        desc: 'Entrenadora personal, apasionada del fitness.',
        telefono: '678 901 234'
      },
      {
        id: '8',
        nombre: 'Elara',
        apellidos: 'Sánchez',
        pop: 'imagen de valoracions',
        img: 'img/elara.png',
        ultvezconectada: 'Hace 1 hora',
        ubi: 'Zaragoza  Delicias',
        desc: 'Le encanta viajar y aprender nuevos idiomas.',
        telefono: '689 012 345'
      },
      {
        id: '9',
        nombre: 'Tessa',
        apellidos: 'Navarro',
        pop: 'imagen de valoracions',
        img: 'img/tessa.png',
        ultvezconectada: 'Hace 3 días',
        ubi: 'Madrid  Malasaña',
        desc: 'Artista callejera y pintora muralista.',
        telefono: '690 123 456'
      },
      {
        id: '10',
        nombre: 'Vera',
        apellidos: 'Domínguez',
        pop: 'imagen de valoracions',
        img: 'img/vera.png',
        ultvezconectada: 'En línea',
        ubi: 'Madrid  Chamberí',
        desc: 'Fanática del café y la escritura creativa.',
        telefono: '601 234 567'
      },
      {
        id: '11',
        nombre: 'Kai',
        apellidos: 'Ramírez',
        pop: 'imagen de valoracions',
        img: 'img/kai.png',
        ultvezconectada: 'Hace 4 horas',
        ubi: 'Valencia  Benimaclet',
        desc: 'Músico y productor de electrónica.',
        telefono: '612 345 678'
      },
      {
        id: '12',
        nombre: 'Sienna',
        apellidos: 'Álvarez',
        pop: 'imagen de valoracions',
        img: 'img/sienna.png',
        ultvezconectada: 'Hace 2 horas',
        ubi: 'Murcia  San Antón',
        desc: 'Amante del cine clásico y la moda vintage.',
        telefono: '623 456 789'
      },
      {
        id: '13',
        nombre: 'Nova',
        apellidos: 'Mendoza',
        pop: 'imagen de valoracions',
        img: 'img/nova.png',
        ultvezconectada: 'Hace 10 minutos',
        ubi: 'Barcelona  El Born',
        desc: 'Influencer de viajes y bloguera.',
        telefono: '634 567 890'
      },
      {
        id: '14',
        nombre: 'Luca',
        apellidos: 'Hernández',
        pop: 'imagen de valoracions',
        img: 'img/luca.png',
        ultvezconectada: 'Hace 5 días',
        ubi: 'Zaragoza  Universidad',
        desc: 'Fotógrafo de naturaleza y paisajes urbanos.',
        telefono: '645 678 901'
      },
      {
        id: '15',
        nombre: 'Ivy',
        apellidos: 'Ortega',
        pop: 'imagen de valoracions',
        img: 'img/ivy.png',
        ultvezconectada: 'Hace 1 día',
        ubi: 'Madrid  Lavapiés',
        desc: 'Escritora de poesía y activista social.',
        telefono: '656 789 012'
      }, 
      {
        id: '16',
        nombre: 'Luna',
        apellidos: 'Fernández',
        pop: 'imagen de valoracions',
        img: 'img/luna.png',
        ultvezconectada: 'En línea',
        ubi: 'Barcelona  El Raval',
        desc: 'Diseñadora gráfica y amante del arte urbano.',
        telefono: '612 345 678'
      },
      {
        id: '17',
        nombre: 'Sofía',
        apellidos: 'Martínez',
        pop: 'imagen de valoracions',
        img: 'img/sofia.png',
        ultvezconectada: 'Hace 2 horas',
        ubi: 'Valencia  Ruzafa',
        desc: 'Fotógrafa profesional con pasión por la naturaleza.',
        telefono: '622 334 455'
      },
      {
        id: '18',
        nombre: 'Camila',
        apellidos: 'Ruiz',
        pop: 'imagen de valoracions',
        img: 'img/camila.png',
        ultvezconectada: 'Hace 30 minutos',
        ubi: 'Sevilla  Triana',
        desc: 'Cantante y compositora de música indie.',
        telefono: '633 445 566'
      },
      {
        id: '19',
        nombre: 'Elena',
        apellidos: 'Gómez',
        pop: 'imagen de valoracions',
        img: 'img/elena.png',
        ultvezconectada: 'Hace 3 días',
        ubi: 'Bilbao  Casco Viejo',
        desc: 'Programadora y entusiasta de la inteligencia artificial.',
        telefono: '644 556 677'
      },
      {
        id: '20',
        nombre: 'Valeria',
        apellidos: 'Torres',
        pop: 'imagen de valoracions',
        img: 'img/valeria.png',
        ultvezconectada: 'Hace 5 horas',
        ubi: 'Granada  Albaicín',
        desc: 'Bailarina de flamenco y profesora de danza.',
        telefono: '655 667 788'
      },
      {
        id: '21',
        nombre: 'Clara',
        apellidos: 'Hernández',
        pop: 'imagen de valoracions',
        img: 'img/clara.png',
        ultvezconectada: 'Hace 2 semanas',
        ubi: 'Zaragoza  Centro',
        desc: 'Chef y creadora de contenido gastronómico.',
        telefono: '666 778 899'
      },
      {
        id: '22',
        nombre: 'Diego',
        apellidos: 'Sánchez',
        pop: 'imagen de valoracions',
        img: 'img/diego.png',
        ultvezconectada: 'Hace 1 día',
        ubi: 'Madrid  Chueca',
        desc: 'Ilustrador y muralista callejero.',
        telefono: '677 889 900'
      },
      {
        id: '23',
        nombre: 'Hugo',
        apellidos: 'Ramírez',
        pop: 'imagen de valoracions',
        img: 'img/hugo.png',
        ultvezconectada: 'Hace 8 horas',
        ubi: 'Barcelona  Gràcia',
        desc: 'Músico y productor de ritmos electrónicos.',
        telefono: '688 990 011'
      },
      {
        id: '24',
        nombre: 'Marcos',
        apellidos: 'López',
        pop: 'imagen de valoracions',
        img: 'img/marcos.png',
        ultvezconectada: 'En línea',
        ubi: 'Valencia  El Carmen',
        desc: 'Desarrollador de videojuegos y entusiasta del cosplay.',
        telefono: '699 001 122'
      },
      {
        id: '25',
        nombre: 'Isabella',
        apellidos: 'Pérez',
        pop: 'imagen de valoracions',
        img: 'img/isabella.png',
        ultvezconectada: 'Hace 4 horas',
        ubi: 'Sevilla  Santa Cruz',
        desc: 'Actriz de teatro independiente.',
        telefono: '611 223 344'
      },
      {
        id: '26',
        nombre: 'Renata',
        apellidos: 'Vargas',
        pop: 'imagen de valoracions',
        img: 'img/renata.png',
        ultvezconectada: 'Hace 6 días',
        ubi: 'Málaga  Soho',
        desc: 'Diseñadora de moda y creadora de tendencias.',
        telefono: '622 334 455'
      },
      {
        id: '27',
        nombre: 'Gabriel',
        apellidos: 'Ortega',
        pop: 'imagen de valoracions',
        img: 'img/gabriel.png',
        ultvezconectada: 'Hace 12 horas',
        ubi: 'Bilbao  Indautxu',
        desc: 'Cineasta y productor audiovisual.',
        telefono: '633 445 566'
      },
      {
        id: '28',
        nombre: 'Amelia',
        apellidos: 'Navarro',
        pop: 'imagen de valoracions',
        img: 'img/amelia.png',
        ultvezconectada: 'En línea',
        ubi: 'Madrid  Malasaña',
        desc: 'Periodista y creadora de pódcast.',
        telefono: '611 334 455'
      }
      
  ];

  usuarias2 = [
    {
      id: '29',
      nombre: 'Adriana',
      apellidos: 'Suárez',
      pop: 'imagen de valoracions',
      img: 'img/adriana.png',
      ultvezconectada: 'Hace 3 horas',
      ubi: 'Palma de Mallorca  Santa Catalina',
      desc: 'Amante del mar y la fotografía submarina.',
      telefono: '655 778 899'
    },
    {
      id: '30',
      nombre: 'Beatriz',
      apellidos: 'Molina',
      pop: 'imagen de valoracions',
      img: 'img/beatriz.png',
      ultvezconectada: 'Hace 1 día',
      ubi: 'Ibiza  Dalt Vila',
      desc: 'DJ y productora de música house.',
      telefono: '666 889 900'
    },
    {
      id: '31',
      nombre: 'Carmen',
      apellidos: 'Díaz',
      pop: 'imagen de valoracions',
      img: 'img/carmen.png',
      ultvezconectada: 'En línea',
      ubi: 'Tenerife  La Laguna',
      desc: 'Bióloga marina y activista medioambiental.',
      telefono: '677 990 011'
    },
    {
      id: '32',
      nombre: 'Daniel',
      apellidos: 'Pérez',
      pop: 'imagen de valoracions',
      img: 'img/daniel.png',
      ultvezconectada: 'Hace 2 horas',
      ubi: 'Las Palmas de Gran Canaria  Vegueta',
      desc: 'Fotógrafo de moda y viajes.',
      telefono: '688 001 122'
    },
    {
      id: '33',
      nombre: 'Eva',
      apellidos: 'López',
      pop: 'imagen de valoracions',
      img: 'img/eva.png',
      ultvezconectada: 'Hace 4 horas',
      ubi: 'Santander  El Sardinero',
      desc: 'Surfista y entrenadora de yoga.',
      telefono: '699 112 233'
    },
    {
      id: '34',
      nombre: 'Fernando',
      apellidos: 'García',
      pop: 'imagen de valoracions',
      img: 'img/fernando.png',
      ultvezconectada: 'Hace 30 minutos',
      ubi: 'A Coruña  Ciudad Vieja',
      desc: 'Chef de cocina fusión y food blogger.',
      telefono: '611 223 344'
    },
    {
      id: '35',
      nombre: 'Gabriela',
      apellidos: 'Herrera',
      pop: 'imagen de valoracions',
      img: 'img/gabriela.png',
      ultvezconectada: 'Hace 3 días',
      ubi: 'Vigo  Casco Vello',
      desc: 'Escritora de novelas de ciencia ficción.',
      telefono: '622 334 455'
    },
    {
      id: '36',
      nombre: 'Héctor',
      apellidos: 'Ruiz',
      pop: 'imagen de valoracions',
      img: 'img/hector.png',
      ultvezconectada: 'En línea',
      ubi: 'Alicante  Playa San Juan',
      desc: 'Deportista y amante del senderismo.',
      telefono: '633 445 566'
    },
    {
      id: '37',
      nombre: 'Irene',
      apellidos: 'Castro',
      pop: 'imagen de valoracions',
      img: 'img/irene.png',
      ultvezconectada: 'Hace 8 horas',
      ubi: 'San Sebastián  Parte Vieja',
      desc: 'Pianista y profesora de música clásica.',
      telefono: '644 556 677'
    },
    {
      id: '38',
      nombre: 'Javier',
      apellidos: 'Morales',
      pop: 'imagen de valoracions',
      img: 'img/javier.png',
      ultvezconectada: 'Hace 1 día',
      ubi: 'Pamplona  Casco Antiguo',
      desc: 'Periodista y documentalista de viajes.',
      telefono: '655 667 788'
    }
  ]

  constructor() { }

  // Get
  getUsuarias() {
    return this.usuarias.map(usuaria => ({
      ...usuaria,
      pop: this.valoraciones[Math.floor(Math.random() * this.valoraciones.length)]
    }));
  }

  getServicioById(id: string, usuarias: string) {
    if(usuarias === 'usuarias') {
      return this.usuarias.find(servicio => servicio.id === id);
    } else if (usuarias === 'usuarias2') {
      return this.usuarias2.find(servicio => servicio.id === id);
    }
    return null;
  }
}
