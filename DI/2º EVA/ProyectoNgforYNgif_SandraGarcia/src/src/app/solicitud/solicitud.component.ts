import { Component } from '@angular/core';
import { Database, ref, push, onValue } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],
  providers: [FormBuilder],
})

export class SolicitudComponent {
  form: FormGroup;
  solicitudes: any[] = [];
  solicitudesFiltradas: any[] = [];
  mostrarResultados = false; 

  constructor(private db: Database, private fb: FormBuilder) {
    this.form = this.fb.group({
      tipoTrabajo: ['', Validators.required],
      ubicacion: ['', Validators.required],
      salario: ['', Validators.required],
    });

    // Leer datos desde Firebase
    const solicitudesRef = ref(this.db, 'solicitudes');
    onValue(solicitudesRef, (snapshot) => {
      const data = snapshot.val();
      this.solicitudes = data ? Object.values(data) : [];
      this.solicitudesFiltradas = [...this.solicitudes];
    });
  }

  filtrarSolicitudes() {
    const { tipoTrabajo, ubicacion, salario } = this.form.value;

    this.solicitudesFiltradas = this.solicitudes.filter((solicitud) => {
      const tipoTrabajoCoincide = tipoTrabajo ? solicitud.tipoTrabajo.toLowerCase().includes(tipoTrabajo.toLowerCase()) : true;
      
      const ubicacionCoincide = ubicacion ? solicitud.localidad.toLowerCase().includes(ubicacion.toLowerCase()) : true;

      let salarioCoincide = true;
      if (salario) {
        const salarioNum = Number(salario);
        if (salario.includes('-')) {
          const [minSalario, maxSalario] = salario.split('-').map(Number);
          salarioCoincide = solicitud.salario >= minSalario && solicitud.salario <= maxSalario;
        } else {
          salarioCoincide = solicitud.salario === salarioNum;
        }
      }

      return tipoTrabajoCoincide && ubicacionCoincide && salarioCoincide;
    });

    // Activar la bandera para mostrar los resultados
    this.mostrarResultados = true;

    console.log('Resultados filtrados:', this.solicitudesFiltradas);
  }
}
