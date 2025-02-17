import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArtistasServiceService } from '../services/artistas-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  imports: [CommonModule],
  templateUrl: './artista.component.html',
  styleUrl: './artista.component.css'
})

export class ArtistaComponent implements OnInit {
  artistaSeleccionado: any;

  artistas = {
    jesica: {
      imagen: 'artistas/jessica.jpg',
      descripcion: 'Jessica lleva muchísimo tiempo con nosotros en el estudio. Sus obras han hecho que la gente tenga su tatuaje soñado plasmado en su piel. Los colores que implementa hace que sea toda una obra maestra. Si tienes pensado realizarte un tatuaje con Jessica, ¡no lo dudes!. Te dejamos su contacto, las obras que ha hecho y algunos diseños que tiene disponible.',
      tatuajes: ['artistas/tatuajes-jessica/tatuaje1.jpg',
        'artistas/tatuajes-jessica/tatuaje2.jpg',
        'artistas/tatuajes-jessica/tatuaje3.jpg',
        'artistas/tatuajes-jessica/tatuaje4.jpg',
        'artistas/tatuajes-jessica/tatuaje5.jpg',
        'artistas/tatuajes-jessica/tatuaje6.jpg'
      ],
      diseños: ['artistas/tatuajes-jessica/diseño1.jpg',
        'artistas/tatuajes-jessica/diseño2.jpg',
        'artistas/tatuajes-jessica/diseño3.jpg',
        'artistas/tatuajes-jessica/diseño4.jpg',
        'artistas/tatuajes-jessica/diseño5.jpg',
        'artistas/tatuajes-jessica/diseño6.jpg'
      ]
    },

    ana: {
      imagen: 'artistas/ana.jpg',
      descripcion: 'Ana es nuestra experta en tatuajes finelines, realismo y blackwork. Su principal objetivo es plasmar en tu piel una obra de arte',
      tatuajes: ['artistas/tatuajes-ana/tatuaje1.jpg',
        'artistas/tatuajes-ana/tatuaje2.jpg',
        'artistas/tatuajes-ana/tatuaje3.jpg',
        'artistas/tatuajes-ana/tatuaje4.jpg',
        'artistas/tatuajes-ana/tatuaje5.jpg',
        'artistas/tatuajes-ana/tatuaje6.jpg'
      ],
      diseños: ['artistas/tatuajes-jessica/diseño1.jpg',
        'artistas/tatuajes-ana/diseño2.jpg',
        'artistas/tatuajes-ana/diseño3.jpg',
        'artistas/tatuajes-ana/diseño4.jpg',
        'artistas/tatuajes-ana/diseño5.jpg',
        'artistas/tatuajes-ana/diseño6.jpg'
      ]
    },

    joni: {
      imagen: 'artistas/joni.jpg',
      descripcion: 'joni',
      tatuajes: ['artistas/tatuajes-joni/tatuaje1.jpg',
        'artistas/tatuajes-joni/tatuaje2.jpg',
        'artistas/tatuajes-joni/tatuaje3.jpg',
        'artistas/tatuajes-joni/tatuaje4.jpg',
        'artistas/tatuajes-joni/tatuaje5.jpg',
        'artistas/tatuajes-joni/tatuaje6.jpg'
      ],
      diseños: ['artistas/tatuajes-joni/diseño1.jpg',
        'artistas/tatuajes-joni/diseño2.jpg',
        'artistas/tatuajes-joni/diseño3.jpg',
        'artistas/tatuajes-joni/diseño4.jpg',
        'artistas/tatuajes-joni/diseño5.jpg',
        'artistas/tatuajes-joni/diseño6.jpg'
      ]
    },
    
    jota: {
      imagen: 'artistas/jota.jpg',
      descripcion: 'Jota',
      tatuajes: ['artistas/tatuajes-jota/tatuaje1.jpg',
        'artistas/tatuajes-jota/tatuaje2.jpg',
        'artistas/tatuajes-jota/tatuaje3.jpg',
        'artistas/tatuajes-jota/tatuaje4.jpg',
        'artistas/tatuajes-jota/tatuaje5.jpg',
        'artistas/tatuajes-jota/tatuaje6.jpg'
      ],
      diseños: ['artistas/tatuajes-jota/diseño1.jpg',
        'artistas/tatuajes-jota/diseño2.jpg',
        'artistas/tatuajes-jota/diseño3.jpg',
        'artistas/tatuajes-jota/diseño4.jpg',
        'artistas/tatuajes-jota/diseño5.jpg',
        'artistas/tatuajes-jota/diseño6.jpg'
      ]
    },

    jhon: {
      imagen: 'artistas/jhon.jpg',
      descripcion: 'jhon',
      tatuajes: ['artistas/tatuajes-jhon/tatuaje1.jpg',
        'artistas/tatuajes-jhon/tatuaje2.jpg',
        'artistas/tatuajes-jhon/tatuaje3.jpg',
        'artistas/tatuajes-jhon/tatuaje4.jpg',
        'artistas/tatuajes-jhon/tatuaje5.jpg',
        'artistas/tatuajes-jhon/tatuaje6.jpg'
      ],
      diseños: ['artistas/tatuajes-jhon/diseño1.jpg',
        'artistas/tatuajes-jhon/diseño2.jpg',
        'artistas/tatuajes-jhon/diseño3.jpg',
        'artistas/tatuajes-jhon/diseño4.jpg',
        'artistas/tatuajes-jhon/diseño5.jpg',
        'artistas/tatuajes-jhon/diseño6.jpg'
      ]
    },

    yasmina: {
      imagen: 'artistas/yasmina.jpg',
      descripcion: 'yasmina',
      tatuajes: ['artistas/tatuajes-yasmina/tatuaje1.jpg',
        'artistas/tatuajes-yasmina/tatuaje2.jpg',
        'artistas/tatuajes-yasmina/tatuaje3.jpg',
        'artistas/tatuajes-yasmina/tatuaje4.jpg',
        'artistas/tatuajes-yasmina/tatuaje5.jpg',
        'artistas/tatuajes-yasmina/tatuaje6.jpg'
      ],
      diseños: ['artistas/tatuajes-yasmina/diseño1.jpg',
        'artistas/tatuajes-yasmina/diseño2.jpg',
        'artistas/tatuajes-yasmina/diseño3.jpg',
        'artistas/tatuajes-yasmina/diseño4.jpg',
        'artistas/tatuajes-yasmina/diseño5.jpg',
        'artistas/tatuajes-yasmina/diseño6.jpg'
      ]
    },

    chaky: {
      imagen: 'artistas/chaky.jpg',
      descripcion: 'chaky',
      tatuajes: ['artistas/tatuajes-chaky/tatuaje1.jpg',
        'artistas/tatuajes-chaky/tatuaje2.jpg',
        'artistas/tatuajes-chaky/tatuaje3.jpg',
        'artistas/tatuajes-chaky/tatuaje4.jpg',
        'artistas/tatuajes-chaky/tatuaje5.jpg',
        'artistas/tatuajes-chaky/tatuaje6.jpg'
      ],
      diseños: ['artistas/tatuajes-chaky/diseño1.jpg',
        'artistas/tatuajes-chaky/diseño2.jpg',
        'artistas/tatuajes-chaky/diseño3.jpg',
        'artistas/tatuajes-chaky/diseño4.jpg',
        'artistas/tatuajes-chaky/diseño5.jpg',
        'artistas/tatuajes-chaky/diseño6.jpg'
      ]
    },

    jan: {
      imagen: 'artistas/jan.png',
      descripcion: 'jan',
      tatuajes: ['artistas/tatuajes-jan/tatuaje1.jpg',
        'artistas/tatuajes-jan/tatuaje2.jpg',
        'artistas/tatuajes-jan/tatuaje3.jpg',
        'artistas/tatuajes-jan/tatuaje4.jpg',
        'artistas/tatuajes-jan/tatuaje5.jpg',
        'artistas/tatuajes-jan/tatuaje6.jpg'
      ],
      diseños: ['artistas/tatuajes-jan/diseño1.jpg',
        'artistas/tatuajes-jan/diseño2.jpg',
        'artistas/tatuajes-jan/diseño3.jpg',
        'artistas/tatuajes-jan/diseño4.jpg',
        'artistas/tatuajes-jan/diseño5.jpg',
        'artistas/tatuajes-jan/diseño6.jpg'
      ]
    }

  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      /*this.artistaSeleccionado = this.artistas[id ?? 'jesica'];*/
    });
  }

export class ArtistaComponent {
  busqueda: any;

  constructor(private route: ActivatedRoute, private artistasService: ArtistasServiceService){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.busqueda = this.artistasService.getBusquedaById(id!, 'artistas');
    
  }
}
