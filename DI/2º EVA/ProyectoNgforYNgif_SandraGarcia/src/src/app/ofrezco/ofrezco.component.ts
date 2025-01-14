import { Component } from '@angular/core';
import { Database, ref, push, onValue } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofrezco',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ofrezco.component.html',
  styleUrl: './ofrezco.component.css',
  providers: [FormBuilder]
})

export class OfrezcoComponent {
  form: FormGroup;
  ofertas: any[] = [];

  constructor(private db: Database, private fb: FormBuilder) {
    this.form = this.fb.group({
      puesto: ['', Validators.required],
      ubicacion: ['', Validators.required],
      salario: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
    
    const ofertasRef = ref(this.db, 'ofertas');
    onValue(ofertasRef, (snapshot) => {
      const data = snapshot.val();
      this.ofertas = data ? Object.values(data) : []; 
    })

  }

  solicitarSubmit() {
    const { puesto, ubicacion, salario, descripcion } = this.form.value;
    const solicitudesRef = ref(this.db, 'ofertas');
    push(solicitudesRef, { puesto, ubicacion, salario, descripcion })
      .then(() => {
        console.log('Solicitud añadida correctamente a la base de datos.');
        this.form.reset();
      })
      .catch((error) => console.error('Error al añadir la solicitud: ', error));
  }
}
