import { Component } from '@angular/core';
import { Database, ref, push, onValue } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'; // Lo importo para el *ngFor

@Component({
  selector: 'app-busco',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './busco.component.html',
  styleUrl: './busco.component.css',
  providers: [FormBuilder]
})

export class BuscoComponent {
  form: FormGroup;
  solicitudes: any[] = []; // Array que almacena las busquedas
 
  constructor(private db: Database, private fb: FormBuilder) {
    this.form = this.fb.group({
      tipoTrabajo: ['', Validators.required],
      localidad: ['', Validators.required],
      salario: ['', Validators.required],
    });
    
    // Leer los datos desde Firebase 
    const solicitudesRef = ref(this.db, 'solicitudes');
    onValue(solicitudesRef, (snapshot) => {
      const data = snapshot.val();
      this.solicitudes = data ? Object.values(data) : []; // Esto convierte el obejto en un Array
    })
  }

  solicitarSubmit() {
    const { tipoTrabajo, localidad, salario } = this.form.value;
    const solicitudesRef = ref(this.db, 'solicitudes');
    push(solicitudesRef, { tipoTrabajo, localidad, salario })
      .then(() => {
        console.log('Solicitud añadida correctamente a la base de datos.');
        this.form.reset();
      })
      .catch((error) => console.error('Error al añadir la solicitud: ', error));
  }

}
