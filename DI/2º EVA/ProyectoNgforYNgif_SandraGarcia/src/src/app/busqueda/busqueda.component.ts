import { Component } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'], 
  providers: [FormBuilder],
})

export class BusquedaComponent {
  form: FormGroup;
  ofertas: any[] = [];
  ofertasFiltradas: any[] = [];
  mostrarResultados = false; 
  
  constructor(private db: Database, private fb: FormBuilder) {
    this.form = this.fb.group({
      tipoTrabajo: ['', Validators.required],
      ubicacion: ['', Validators.required],
      salario: ['', Validators.required],
      descripcion: [''],
    });

    // Leer datos desde Firebase
    const ofertasRef = ref(this.db, 'ofertas');
    onValue(ofertasRef, (snapshot) => {
      const data = snapshot.val();
      this.ofertas = data ? Object.values(data) : [];
      console.log('Ofertas desde Firebase:', this.ofertas); // Log de las ofertas
      this.ofertasFiltradas = [...this.ofertas];
    });
    
  }

  filtrarOfertas() {
    const { tipoTrabajo, ubicacion, salario, descripcion } = this.form.value;
  
    this.ofertasFiltradas = this.ofertas.filter((oferta) => {
      const tipoTrabajoCoincide = tipoTrabajo ? 
        oferta.tipoTrabajo && oferta.tipoTrabajo.trim().toLowerCase().includes(tipoTrabajo.trim().toLowerCase()) : true;
      
      const ubicacionCoincide = ubicacion ? oferta.ubicacion && oferta.ubicacion.toLowerCase().includes(ubicacion.toLowerCase()) : true;
  
      let salarioCoincide = true;
      if (salario) {
        const salarioNum = Number(salario); // Asegura que sea un número
        if (salario.includes('-')) {
          const [minSalario, maxSalario] = salario.split('-').map(Number);
          salarioCoincide = oferta.salario >= minSalario && oferta.salario <= maxSalario;
        } else {
          salarioCoincide = oferta.salario === salarioNum;
        }
      }
  
      const descripcionCoincide = descripcion ? oferta.descripcion && oferta.descripcion.toLowerCase().includes(descripcion.toLowerCase()) : true;
  
      return tipoTrabajoCoincide && ubicacionCoincide && salarioCoincide && descripcionCoincide;
    });
  
    this.mostrarResultados = true;
  
    console.log('Ofertas filtradas:', this.ofertasFiltradas);
  }
  
}
