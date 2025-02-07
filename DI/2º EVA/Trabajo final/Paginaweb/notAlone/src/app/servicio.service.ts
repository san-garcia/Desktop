import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  // Usuarias 
  usuarias = [
    {
      id: '',
      nombre: '',
      apellidos: '',
      popularidad: '',
      ultvezconectada: '',
      descripcion: '',
      telefono: ''

    }

    // Más nombres de usuarias
  ];

  // Get
  getUsuarias(){
    return this.usuarias;
  }

  getServicioById(id: string, usuarias: string) {
    if(usuarias === 'usuarias') return this.usuarias.find((servicio) => servicio.id === id);
    else return;
  }
}
